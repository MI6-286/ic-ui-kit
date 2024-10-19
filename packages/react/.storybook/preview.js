import "../dist/core/normalize.css";
import "@ukic/fonts/dist/fonts.css";
import "../dist/core/core.css";
import "./storybook-overrides.css";

import { withPerformance } from 'storybook-addon-performance';
import { IcTheme } from "../src/components";

const preview = {
  parameters: {
    controls: {
        matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      hideNoControlsWarning: true
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [{value: 'light', title: 'Light theme', left: '☀️'}, {value:'dark', title: 'Dark theme', left: '🌙'}],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme;
      const backgroundColor = selectedTheme === 'dark' ? 'var(--ic-color-background-primary-dark)' : 'var(--ic-color-background-primary-light)';
      return (
        <>
          <style>
            {`
              .sb-show-main {
                background-color: ${backgroundColor};
              }
            `}
          </style>
          <IcTheme 
            theme={selectedTheme}
            style={{ backgroundColor: backgroundColor }}
          >
            {story()}
          </IcTheme>
        </>
      );
    },
    withPerformance
  ],
};

export default preview;
