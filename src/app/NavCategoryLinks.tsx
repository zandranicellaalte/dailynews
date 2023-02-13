'use client';

import { categories } from '../../constants';
import { usePathname } from 'next/navigation';
import NavCategoryLink from './NavCategoryLink';

export default function NavCategoryLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path;
  };

  return (
    <nav className="navLinksContainer">
      {categories.map((category) => (
        <NavCategoryLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}
