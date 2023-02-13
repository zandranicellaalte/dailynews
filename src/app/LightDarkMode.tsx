'use client';
import { Sun, Moon } from './icon';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

function LightDarkMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log(theme);

  return (
    <div>
      {theme === 'dark' ? (
        <button
          className="lightDark-btn"
          value={'light'}
          onClick={() => setTheme('light')}
        >
          <Sun size={30} color={'#FF8975'} />
        </button>
      ) : (
        <button
          className="lightDark-btn"
          value={'dark'}
          onClick={() => setTheme('dark')}
        >
          <Moon size={30} color={'#FF5536'} />
        </button>
      )}
    </div>
  );
}

export default LightDarkMode;
