import { notFound } from 'next/navigation';
import ATimeAgo from '../ATimeAgo';

type Props = {
  searchParams?: NewsArticle;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: NewsArticle = searchParams;

  return (
    <article>
      <section>
        <div className="articlePageImageContainer">
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="articlePageImage"
            />
          )}
        </div>
        <div>
          <h1 className="articlePageTitle">{article.title}</h1>
          <div className="articlePageDetails">
            <h3>By: {article.author || 'unknown'}</h3>
            <h3>Source: {article.source}</h3>
            <p>
              <ATimeAgo time={article.published_at} />
            </p>
          </div>
          <p>{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
