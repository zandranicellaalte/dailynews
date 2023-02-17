import { categories } from '../../../../constants';
import NewsList from '../../NewsList';
import { getData } from '@/src/lib/getData';
import sortByCategory from '@/src/lib/sortByCategory';

type Props = {
  params: { category: Category };
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

async function NewsCategory({ params: { category } }: Props) {
  const newsResp = await getData(
    'general,business,entertainment,health,science,sports,technology',
    ''
  );
  const news = sortByCategory(newsResp, category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;
