import React from 'react'; // Explicitly import React for JSX
import type { Preview } from '@storybook/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darktheme from '../src/styles/theme/darktheme';
import lighttheme from '../src/styles/theme/lighttheme';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light', // Default theme
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light Theme' },
        { value: 'dark', title: 'Dark Theme' },
      ],
      showName: true,
    },
  },
};

const customViewports = {
  mobileS: {
    name: 'Mobile S',
    styles: {
      width: '320px',
      height: '717px',
    },
    type: 'mobile',
  },
  mobileM: {
    name: 'Mobile M',
    styles: {
      width: '375px',
      height: '717px',
    },
    type: 'mobile',
  },
  mobileL: {
    name: 'Mobile L',
    styles: {
      width: '425px',
      height: '717px',
    },
    type: 'mobile',
  },
  braveTablet: {
    name: 'Brave Tablet',
    styles: {
      width: '768px',
      height: '717px',
    },
    type: 'tablet',
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1024px',
      height: '717px',
    },
    type: 'laptop',
  },
  laptopL: {
    name: 'Laptop L',
    styles: {
      width: '1440px',
      height: '717px',
    },
    type: 'laptop',
  },
  laptop4k: {
    name: 'Laptop 4K',
    styles: {
      width: '2560px',
      height: '1025px',
    },
    type: 'laptop',
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS, // Default Storybook viewports
        ...customViewports, // Your custom viewports
      },
      defaultViewport: 'responsive', // Set the default viewport
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? darktheme : lighttheme;

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
