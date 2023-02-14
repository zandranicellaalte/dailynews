import { createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'light' ? {
      background: {
        default: '#FAFAFA',
        paper: '#FAFAFA',
      },
    } : {
      background: {
        default: '#1b2744',
        paper: '#1b2744',
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: '#1b2744',
            secondary: grey[800],
          }
        : {
            primary: '#FAFAFA',
            secondary: grey[500],
          }),
    },
  },
});
