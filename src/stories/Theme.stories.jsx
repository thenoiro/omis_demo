import PaletteDemo from './Theme.palette';

const Common = {
  title: 'Providers/Theme',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      step: 10,
      min: 50,
      max: 300,
    },
  },
  args: {
    size: 150,
  },
  component: PaletteDemo,
};

export const Default = {};

export default Common;
