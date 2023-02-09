import Link from 'next/link';

type Props = {
  category: string;
  isActive: boolean;
};

export default function Navlink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${isActive && 'navLinkActive'}`}
    >
      {category}
    </Link>
  );
}
