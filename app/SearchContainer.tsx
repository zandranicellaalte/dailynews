'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

function SearchContainer() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`); //Query param
  };

  return (
    <form className="searchForm" onSubmit={handleSearch}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="searchInput"
        placeholder="Search keyords ..."
      />
      <button type="submit" className="searchButton" disabled={!input}>
        Search
      </button>
    </form>
  );
}

export default SearchContainer;
