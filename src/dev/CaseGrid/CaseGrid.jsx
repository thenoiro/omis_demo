import { useMemo } from 'react';
import { Box } from '@mui/material';

const r = 0.625;

const getWidth = (axis1) => {
  return axis1.reduce((result, nodes) => {
    return result * nodes.length;
  }, 1);
};

const getCells = (rows, offsetX = 0, offsetY = 0, horizontal = true, data = []) => {
  const [currentRow, ...restRows] = rows;

  if (!Array.isArray(currentRow)) {
    return [];
  }
  const restRowsWidth = getWidth(restRows);

  const result = currentRow.reduce((allCells, cell, index) => {
    const c1 = offsetX + (restRowsWidth * index);
    const c2 = offsetX + (restRowsWidth * (index + 1));
    const c3 = offsetY;
    const c4 = offsetY + 1;

    const x1 = c1;
    const x2 = c2;
    const y1 = c3;
    const y2 = c4;

    const coords = (horizontal ? [y1, x1, y2, x2] : [x1, y1, x2, y2]).map((c) => c + 1)
    const cellData = { ...cell };
    const currentData = !cell.id ? data : [...data, cellData];    
    const nestedCells = getCells(restRows, x1, y2, horizontal, currentData);

    cellData.coords = nestedCells.length === 0 ? coords : null;
    cellData.horizontal = horizontal;

    return [
      ...allCells,
      {
        ...cell,
        data: currentData,
        coords,
        horizontal,
        children: nestedCells.length > 0,
      },
      ...nestedCells,
    ];
  }, []);

  return result;
};

const CaseGrid = (props) => {
  const { columns, rows, render } = props;

  const [columnsCount, rowsCount] = useMemo(() => {
    return [
      getWidth(columns) + rows.length,
      getWidth(rows) + columns.length,
    ]
  }, [columns, rows]);

  const [colCells, rowCells] = useMemo(() => {
    const colCells = getCells(columns, rows.length, 0, true);
    const rowCells = getCells(rows, columns.length, 0, false);
    return [colCells, rowCells];
  }, [columns, rows]);

  const renderCells = useMemo(() => {
    const dataColCells = colCells.filter((c) => !c.children);
    const dataRowCells = rowCells.filter((c) => !c.children);

    return dataColCells.reduce((allColCells, colCell) => {
      return [
        ...allColCells,
        ...dataRowCells.reduce((allRowCells, rowCell) => {
          return [
            ...allRowCells,
            [...colCell.data, ...rowCell.data],
          ];
        }, []),
      ];
    }, []);
  }, [colCells, rowCells]);

  return (
    <Box
      width={1}
      display="grid"
      gridTemplateRows={`repeat(${rowsCount}, auto)`}
      gridTemplateColumns={`repeat(${columnsCount}, auto)`}
    >
      <Box
        border="1px dashed #9747FF"
        sx={(theme) => ({
          borderRadius: theme.spacing(r),
        })}
        gridArea={[
          columns.length,
          rows.length,
          rowsCount,
          columnsCount,
        ].map((c) => c + 1).join(' / ')}
      />

      {[...colCells, ...rowCells].map((cell, index) => {
        const key = [index, cell.value].join('');
        const radius = cell.horizontal ? [r, r, 0, 0] : [r, 0, 0, r];

        return (
          <Box
            p={1}
            key={key}
            gap={1}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gridArea={cell.coords.join(' / ')}
            flexDirection={cell.horizontal ? 'column' : 'row'}
          >
            <Box color="#9747FF">
              {cell.label}
            </Box>

            {cell.children && (
              <Box
                sx={(theme) => ({
                  borderWidth: 1,
                  borderColor: '#9747FF',
                  borderStyle: 'solid',
                  width: cell.horizontal ? 1 : 14,
                  height: cell.horizontal ? 14 : 1,
                  borderRadius: theme.spacing(...radius),
                  borderBottom: `${cell.horizontal ? 0 : 1}px solid #9747FF`,
                  borderRight: `${!cell.horizontal ? 0 : 1}px solid #9747FF`,
                })}
              />
            )}
          </Box>
        );
      })}

      {renderCells.map((cell) => {
        const key = cell.map((c) => [c.id, c.label].join('')).join('');

        const coords = cell.reduce((coords, c) => {
          if (!c.coords) {
            return coords;
          }
          if (c.horizontal) {
            return {
              ...coords,
              x1: c.coords[1],
              x2: c.coords[3],
            };
          }
          return {
            ...coords,
            y1: c.coords[0],
            y2: c.coords[2],
          };
        }, {});

        return (
          <Box
            p={2}
            key={key}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
            gridArea={[coords.y1, coords.x1, coords.y2, coords.x2].join(' / ')}
          >
            {render(cell)}
          </Box>
        );
      })}
    </Box>
  );
};

export default CaseGrid;
