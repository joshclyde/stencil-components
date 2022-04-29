import {defineCustomElements} from '../loader';
import '../src/global.css'

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1a1a1a',
      },
      {
        name: 'light',
        value: '#ebebeb',
      },
    ],
  },
}