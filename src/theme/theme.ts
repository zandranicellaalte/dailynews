import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      light: '#FAFAFA',
      dark: '#1b2744',
      main: '#f44336',
    },
    ...(mode === 'light' ? {
      background: {
        default: '#FAFAFA',
        paper: '#FAFAFA',
      },
      text: {
        primary: '#1b2744',
        secondary: '#FF5536',
        hint: '#fafafa',
        disabled: '#a9a9a9',
        fontFamily: [
          'ui-serif',
          'Georgia',
          'Times New Roman',
          'Times',
          'serif',
        ].join(','),
      }
    } : {
      background: {
        default: '#1b2744',
        paper: '#1b2744',
      },
      text: {
        primary: '#FAFAFA',
        secondary: '#FF8975',
        hint: '#fafafa',
        disabled: '#a9a9a9',
        fontFamily: [
          'ui-serif',
          'Georgia',
          'Times New Roman',
          'Times',
          'serif',
        ].join(','),
      }
    }),
  },
});
