import Link from 'next/link';
import NavCategoryLinks from './NavCategoryLinks';
import SearchContainer from './SearchContainer';

export default function Header() {
  return (
    <header>
      <div className="headerContainer">
        {/* Heading */}
        <Link href="/" prefetch={false} className="Link">
          <h1 className="headerLogo">News</h1>
        </Link>

        {/* Searchbar */}
        <div className="search">
          <SearchContainer />
        </div>

        {/* Darkmode */}
        <div className="darkmode">Darkmode {/* <DarkModeButton /> */}</div>
      </div>

      {/* Navigation Link */}
      <NavCategoryLinks />
    </header>
  );
}
