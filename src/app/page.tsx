import NewsList from './NewsList';
import response from '../../response.json';
import { getData } from '../lib/getData';
import sortNewsByImage from '../lib/sortNewsByImage';

export default async function HomePage() {
  const news = await getData(
    'general,business,entertainment,health,science,sports,technology',
    ''
  );

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}