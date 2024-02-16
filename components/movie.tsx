'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

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
    <div className="grid grid-rows-[1fr,auto] gap-5 cursor-pointer place-items-center relative">
      <Image
        src={poster_path}
        alt={title}
        onClick={showDetail}
        width={1000}
        height={2000}
        className="max-w-full min-h-full rounded-lg transition-opacity duration-300 ease-in-out opacity-70 hover:opacity-100"
      />

      <p
        ref={pRef}
        className="absolute top-0 bg-darkGray opacity-80 text-white text-center p-1 rounded-md hidden overflow-visible z-10"
      >
        {title}
      </p>

      <Link
        href={`/movies/${id}`}
        onMouseOver={tooltip}
        onMouseOut={hideTooltip}
        className="w-full text-center truncate"
      >
        {title}
      </Link>
    </div>
  );
}
