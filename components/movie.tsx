'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import styles from '@styles/movie.module.css';

interface MovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: MovieProps) {
  const router = useRouter();
  const pRef = useRef<HTMLParagraphElement>(null);

  const showDetail = () => {
    router.push(`/movies/${id}`);
  };

  const tooltip = () => {
    if (pRef.current) pRef.current.style.display = 'block';
  };

  const hideTooltip = () => {
    if (pRef.current) pRef.current.style.display = 'none';
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={showDetail} />
      <p ref={pRef}>{title}</p>

      <Link
        href={`/movies/${id}`}
        onMouseOver={tooltip}
        onMouseOut={hideTooltip}
      >
        {title}
      </Link>
    </div>
  );
}
