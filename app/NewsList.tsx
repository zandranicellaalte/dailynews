import NewsArticle from './NewsArticle';

type Props = {
  news: NewsRespons;
};

function NewsList({ news }: Props) {
  return (
    <div className="newsList">
      {news.data.map((article) => (
        <NewsArticle key={article.title} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
