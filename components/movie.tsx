'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '@styles/movie.module.css';

interface MovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: MovieProps) {
  const router = useRouter();
  const showDetail = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={showDetail} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
