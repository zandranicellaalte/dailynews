import HeadLogo from './HeadLogo';
import NavCategoryLinks from './NavCategoryLinks';
import SearchContainer from './SearchContainer';

export default function Header() {
  return (
    <header>
      <div className="headerContainer">
        <HeadLogo />
        <SearchContainer />
      </div>
      <NavCategoryLinks />
    </header>
  );
}
