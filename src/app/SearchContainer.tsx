'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Box, Button, TextField, FormControl, useTheme } from '@mui/material';

function SearchContainer() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`); //Query param
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        gridColumnStart: 2,
        gridColumnEnd: 5,
        alignSelf: 'center',
        marginLeft: '10px',
      }}
    >
      <FormControl
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'spaceBetween',
          alignItems: 'center',
          border: 'none',
        }}
      >
        <TextField
          variant="standard"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            width: '100%',
            backgroundColor: 'transparent',
            height: '56px',
            justifyContent: 'center',
            color: `${theme.palette.text.secondary}`,
          }}
          placeholder="Search keyords ..."
        />
        <Button
          type="submit"
          sx={{
            backgroundColor: 'transparent',
            border: 'none',
            color: `${theme.palette.text.secondary}`,
          }}
          disabled={!input}
          onClick={(e) => handleSearch(e)}
        >
          Search
        </Button>
      </FormControl>
    </Box>
  );
}

export default SearchContainer;
