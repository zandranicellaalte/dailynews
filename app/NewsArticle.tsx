import ReadMore from './ReadMore';
import ATimeAgo from './ATimeAgo';

type Props = {
  article: NewsArticle;
};
function Article({ article }: Props) {
  return (
    <article className="articleContainer">
      {article.image && (
        <img src={article.image} alt={article.title} className="articleImage" />
      )}
      <div className="articleText">
        <div className="articleDetails">
          <p>{article.source} -</p>
          <p>
            <ATimeAgo time={article.published_at} />
          </p>
        </div>
        <div>
          <h2 className="articleTitle">{article.title}</h2>
          <section>
            <p className="articleDescription">{article.description}</p>
          </section>
        </div>
        <div className="readmoreContainer">
          <ReadMore article={article} />
        </div>
      </div>
    </article>
  );
}

export default Article;
