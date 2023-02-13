import NewsList from './NewsList';
import response from '../../response.json';
import sortNewsByImage from '@/src/lib/sortNewsByImage';

export default function HomePage() {
  const news: NewsRespons = sortNewsByImage(response);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
