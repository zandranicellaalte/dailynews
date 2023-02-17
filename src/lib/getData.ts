import sortNewsByImage from "./sortNewsByImage";


export async function getData(
category?: Category | string,
keywords?: string,
) {
  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.API_KEY}&countries=us%2Cgb&limit=100&offset=0&sort=published_desc&categories=${category}&keywords=${keywords}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const newsRes = await res.json();

  const news = sortNewsByImage(newsRes);

  return news;
}
