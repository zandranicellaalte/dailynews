import { categories } from '../../../../constants';
import NewsList from '../../NewsList';
import response from '../../../../response.json';

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  // const news: NewsRespons = await fetchNews(category);
  const news: NewsRespons = response;

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
