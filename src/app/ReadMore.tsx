'use client';
import { useRouter } from 'next/navigation';
import { Button, useTheme } from '@mui/material';

type Props = {
  article: NewsArticle;
};

function ReadMore({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };

  const theme = useTheme();

  return (
    <Button
      sx={{
        height: '40px',
        width: '150px',
        backgroundColor: `${theme.palette.text.secondary}`,
        borderRadius: '25px',
        border: 'none',
        cursor: 'pointer',
        color: `${theme.palette.primary.light}`,
        '&:hover': {
          backgroundColor: 'transparent',
          border: `1px solid ${theme.palette.text.secondary}`,
          borderRadius: '25px',
          color: `${theme.palette.text.secondary}`,
        },
      }}
      onClick={handleClick}
    >
      Read More
    </Button>
  );
}

export default ReadMore;
