import clsx from 'clsx';
import { Box } from '@mui/material';

import { Button } from 'components';
import { CaseGrid } from 'dev';

const enumDetail = (en) => {
  return Object.values(en).join('\n');
};

const states = [
  'default',
  'hovered',
  'focused',
  'active',
  'disabled',
];

const sizes = [
  'large',
  'medium',
  'small',
];

const colors = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
];

const labels = {
  primary: 'Primary*',
  medium: 'Medium*',
};

const getLabel = (l) => {
  return labels[l] || `${l[0].toUpperCase()}${l.slice(1)}`;
};

/**
 * Main project button component. You can customize its size and color. All Material UI (MUI) Button properties are also supported. Please note, however, that the button's design relies only on the size and color properties to define its appearance, whereas MUI's Button allows for more variation through the variant property. This means that using certain combinations like color="primary" and variant="outlined" may result in an unstyled button, as these specific styles are not part of our button's design system.
 */
const Common = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content (text or React Node)',
      table: {
        type: {
          summary: 'string | ReactNode',
        },
      },
    },
    color: {
      control: 'radio',
      options: colors,
      table: {
        type: {
          summary: 'enum',
          detail: enumDetail(colors),
        },
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      control: 'radio',
      options: sizes,
      table: {
        type: {
          summary: 'enum',
          detail: enumDetail(sizes),
        },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  args: {
    children: 'Default',
  },
};

export const Default = {
  args: {
    children: 'Button',
  },
};

export const Figma = {
  parameters: {
    pseudo: {
      hover: ['.hover'],
      active: ['.active'],
      focus: ['.focus'],
    },
  },
  render: () => {
    return (
      <Box
        p={2}
        overflow="auto"
        display="flex"
        flexDirection="column"
      >
        <CaseGrid
          columns={[
            [
              {
                value: 'colors',
                label: 'Colors',
              },
            ],
            colors.map((color) => ({
              id: 'color',
              value: color,
              label: getLabel(color),
            })),
          ]}
          rows={[
            states.map((state) => ({
              id: 'state',
              value: state,
              label: getLabel(state),
            })),
            sizes.map((size) => ({
              id: 'size',
              value: size,
              label: getLabel(size),
            })),
          ]}
          render={(params) => {
            const props = {};
            const state = {};

            params.forEach((p) => {
              if (p.id === 'state') {
                state[p.value] = true;
                return;
              }
              props[p.id] = p.value;
            });
            props.disabled = state.disabled;

            const className = clsx(
              state.focused && 'focus',
              state.hovered && 'hover',
              state.active && 'active',
            );
            return (
              <Button {...props} className={className}>
                Default
              </Button>
            );
          }}
        />
      </Box>
    );
  },
};

export default Common;
