'use client';

import { getDesignTokens } from '../theme/theme';
import { ThemeProvider, createTheme, Box, Button } from '@mui/material';
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
          bgcolor: 'background.default',
          color: 'text.primary',
          maxWidth: '1900px',
          padding: '25px',
          margin: 'auto',
          position: 'relative',
        }}
      >
        <Box
          component="div"
          sx={{
            position: 'absolute',
            top: '43px',
            right: '25px',
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
        {children}
      </Box>
    </ThemeProvider>
  );
}
