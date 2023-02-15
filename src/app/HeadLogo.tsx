'use client';
import Link from 'next/link';
import { Typography, useTheme } from '@mui/material';

export default function HeadLogo() {
  const theme = useTheme();
  return (
    <Link href="/" prefetch={false} className="Link">
      <Typography
        variant="h3"
        component="h4"
        sx={{
          color: `${theme.palette.text.secondary}`,
          // fontFamily: `${theme.palette.text.fontFamily}`,
        }}
      >
        News
      </Typography>
    </Link>
  );
}
