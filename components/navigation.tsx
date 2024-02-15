'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="bg-darkGray fixed top-8 w-1/3 mx-auto border border-white rounded-full py-3 z-10 left-1/2 -translate-x-1/2 176:w-56">
      <ul className="flex justify-center gap-7 mx-5">
        <li className="transition-all duration-100 ease-in-out hover:scale-105">
          <Link
            href="/"
            className={path === '/' ? 'text-xl opacity-100' : null}
          >
            Home
          </Link>
          {path === '/' ? '🍿' : ''}
        </li>

        <li className="transition-all duration-100 ease-in-out hover:scale-105">
          <Link
            href="/search"
            className={path === '/search' ? 'text-xl opacity-100' : null}
          >
            Search
          </Link>
          {path === '/search' ? '🔍' : ''}
        </li>
      </ul>
    </nav>
  );
}
