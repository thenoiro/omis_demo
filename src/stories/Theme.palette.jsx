import { useMemo, useState } from 'react';
import cx from 'clsx';
import { useTheme, styled, Box } from '@mui/material';

import * as colors from 'styles/colors';
import { getColorObject, getPalette } from 'styles/theme';

const defString = '';

const getString = (v) => {
  if (typeof v === 'string') {
    return v;
  }
  return defString;
};

const stringSearch = (v1, v2) => {
  const s1 = getString(v1).toLowerCase();
  const s2 = getString(v2).toLowerCase();
  return s1.includes(s2);
};

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
}));

const Title = styled('div')(() => ({
  fontWeight: 900,
  fontSize: 32,
}));

const Code = styled('code')(({ theme }) => ({
  fontSize: 12,
  borderRadius: theme.spacing(0.5),
  backgroundColor: 'black',
  color: 'white',
  padding: theme.spacing(0.25, 1),
}));

const Colors = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

const ColorName = styled(Box)(() => ({
  display: 'block',
  cursor: 'default',
  fontSize: 12,
  fontFamily: 'monospace',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

const Section = styled('div')(() => ({
  '&:not(:has(.visible))': {
    display: 'none',
  },
}));

const ColorTile = styled('div', {
  label: 'ColorTile',
  shouldForwardProp: (prop) => !['size'].includes(prop),
})(({ size }) => ({
  width: size,
  maxWidth: size,

  '&:not(.visible)': {
    display: 'none',
  },
}));

const ColorBox = styled('div', {
  label: 'ColorBox',
  shouldForwardProp: (prop) => !['size', 'color'].includes(prop),
})(({ theme, size, color }) => ({
  width: size,
  height: size,
  backgroundColor: color,
  borderRadius: theme.spacing(1),
  boxShadow: `2px 2px 2px ${theme.palette.grey[500]}`,
}));

const Input = styled('input', {
  label: 'SearchInput',
})(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1, 3),
}));

const SingleColorTile = (props) => {
  const { name, rgb, hex, size, search, path } = props;

  const fullPath = useMemo(() => {
    return [getString(path), name].filter(Boolean).join('.');
  }, [path, name]);

  const visible = useMemo(() => {
    if (!search) {
      return true;
    }
    return [
      stringSearch(fullPath, search),
      stringSearch(rgb, search),
      stringSearch(hex, search),
    ].some(Boolean);
  }, [hex, rgb, search, fullPath]);

  return (
    <ColorTile
      size={size}
      className={cx(visible && 'visible')}
    >
      <ColorName component="strong" title={name}>
        {name}
      </ColorName>

      {rgb && (
        <ColorName title={rgb}>
          {rgb}
        </ColorName>
      )}

      {hex && (
        <ColorName title={hex}>
          {hex}
        </ColorName>
      )}

      <ColorBox size={size} color={hex} title={`${fullPath}: ${hex}, ${rgb}`} />
    </ColorTile>
  );
};

const PaletteDemo = (props) => {
  const { size } = props;
  const theme = useTheme();
  const [search, setSearch] = useState('');

  const colorConstants = useMemo(() => {
    const result = [];

    Object.entries(colors).forEach(([name, color]) => {
      const { hex, rgb } = getColorObject(color);

      if (hex && rgb) {
        result.push({ name, hex, rgb });
      }
    });
    return result;
  }, []);

  const { standalones, sets, components } = useMemo(() => {
    const palette = getPalette(theme);

    const result = {
      sets: [],
      standalones: [],
      components: [],
    };
    Object.entries(palette).forEach(([name, value]) => {
      if (typeof value === 'string') {
        const { hex, rgb } = getColorObject(value);

        if (hex && rgb) {
          result.standalones.push({ name, hex, rgb });
        }
        return;
      }
      const innerColors = [];
      const innerSet = {
        name,
        value: innerColors,
      };
      Object.entries(value).forEach(([innerName, innerValue]) => {
        const { hex, rgb } = getColorObject(innerValue);

        if (hex && rgb) {
          innerColors.push({
            hex,
            rgb,
            name: innerName,
          });
        }
      });
      if (innerColors.length === 0) {
        return;
      }
      if (name[0] === name[0].toUpperCase()) {
        result.components.push(innerSet);
        return;
      }
      result.sets.push(innerSet);
    });
    return result;
  }, [theme]);

  return (
    <Root>
      <div>
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Section>
        <Title>Constants:</Title>
        <Code>{"import * as colors from 'styles/colors';"}</Code>

        <Colors>
          {colorConstants.map((c) => {
            return (
              <SingleColorTile
                search={search}
                {...c}
                key={c.name}
                size={size}
              />
            );
          })}
        </Colors>
      </Section>

      <Section>
        <Title>Palette:</Title>
        <Code>theme.palette</Code>

        <Colors>
          {standalones.map((c) => {
            return (
              <SingleColorTile
                search={search}
                {...c}
                key={c.name}
                size={size}
              />
            );
          })}
        </Colors>
      </Section>

      {[...sets, ...components].map((s) => {
        const { name, value } = s;

        return (
          <Section key={name}>
            <Title>{`palette.${name}`}</Title>
            <Colors>
              {value.map((c) => {
                return (
                  <SingleColorTile
                    path={name}
                    search={search}
                    {...c}
                    key={c.name}
                    size={size}
                  />
                );
              })}
            </Colors>
          </Section>
        );
      })}
    </Root>
  );
};

export default PaletteDemo;
