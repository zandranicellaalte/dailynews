export default function sortByCategory(news: NewsRespons, category: Category) {
  const newsWithCategory = news.data.filter((item) => item.category === category);

  const sortedNewsResponse = {
    pagination: news.pagination,
    data: [...newsWithCategory], //Spread Operator
  }

  return sortedNewsResponse;
}