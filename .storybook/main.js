import path from 'path';

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    const result = {
      ...config,
      resolve: {
        ...config?.resolve,
        modules: [
          ...(config?.resolve?.modules || []),
          path.resolve(__dirname, '../src'),
        ],
      },
    };
    return result;
  },
};
export default config;
