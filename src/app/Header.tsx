import Link from 'next/link';
import NavCategoryLinks from './NavCategoryLinks';
import SearchContainer from './SearchContainer';

export default function Header() {
  return (
    <header>
      <div className="headerContainer">
        <Link href="/" prefetch={false} className="Link">
          <h1 className="headerLogo">News</h1>
        </Link>
        <div className="search">
          <SearchContainer />
        </div>
      </div>
      <NavCategoryLinks />
    </header>
  );
}
