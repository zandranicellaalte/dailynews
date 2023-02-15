'use client';

import { categories } from '../../constants';
import { usePathname } from 'next/navigation';
import NavCategoryLink from './NavCategoryLink';
import { Box, useTheme } from '@mui/material';

export default function NavCategoryLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path;
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
        fontSize: '14px',
        lineHeight: '16px',
        gap: '10px',
        padding: '16px 0px',
        width: '100%',
        textAlign: 'center',
        borderTop: `1px solid ${theme.palette.text.secondary}`,
      }}
    >
      {categories.map((category) => (
        <NavCategoryLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </Box>
  );
}
