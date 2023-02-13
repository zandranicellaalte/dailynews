'use client';
import { useRouter } from 'next/navigation';

type Props = {
  article: NewsArticle;
};

function ReadMore({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };
  return <button className="readmore-btn">Read More</button>;
}

export default ReadMore;
