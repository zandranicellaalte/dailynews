import NewsList from './NewsList';
import response from '../response.json';

export default function HomePage() {
  const news: NewsRespons = response;

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
