type Props = {
  article: NewsArticle;
};
function Article({ article }: Props) {
  return (
    <article className="articleContainer">
      {article.image && (
        <img src={article.image} alt={article.title} className="articleImage" />
      )}
      <div>
        <div>
          <h2 className="articleTitle">{article.title}</h2>
          <section>
            <p className="articleDescription">{article.description}</p>
          </section>
          <footer className="articleFooter">
            <p>{article.source} -</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
        <p>Read more</p>
      </div>
    </article>
  );
}

export default Article;
