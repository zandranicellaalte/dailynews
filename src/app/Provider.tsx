'use client';

import { getDesignTokens } from '../theme/theme';
import {
  ThemeProvider,
  createTheme,
  Box,
  Button,
  CssBaseline,
} from '@mui/material';
import { PaletteMode } from '@mui/material';
import { useState } from 'react';
import { Sun, Moon } from './icon';

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>('light');

  const darkModeTheme = createTheme(getDesignTokens('dark'));
  const lightModeTheme = createTheme(getDesignTokens('light'));

  return (
    <ThemeProvider theme={mode === 'light' ? lightModeTheme : darkModeTheme}>
      <Box
        component="body"
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary',
          maxWidth: '1900px',
          padding: '25px',
          margin: 'auto',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '30px',
            right: '20px',
          }}
        >
          {mode === 'dark' ? (
            <Button onClick={() => setMode('light')}>
              <Sun size={30} color={'#FF8975'} />
            </Button>
          ) : (
            <Button value={'dark'} onClick={() => setMode('dark')}>
              <Moon size={30} color={'#FF5536'} />
            </Button>
          )}
        </Box>
        <CssBaseline />
        {children}
      </Box>
    </ThemeProvider>
  );
}
