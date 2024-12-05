import Providers from 'providers';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Providers>
          <Story />
        </Providers>
      );
    },
  ],
};

export default preview;
