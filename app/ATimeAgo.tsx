'use client';
import TimeAgo from 'react-timeago';

type Props = {
  time: string;
};

function ATimeAgo({ time }: Props) {
  return <TimeAgo date={time} />;
}

export default ATimeAgo;
