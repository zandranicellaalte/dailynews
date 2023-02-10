export default function sortNewsByImage(news: NewsRespons) {
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);

  const sortedNewsResponse = {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage], //Spread Operator
  }

  return sortedNewsResponse;
}