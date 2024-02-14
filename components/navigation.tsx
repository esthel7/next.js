'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="bg-darkGray fixed top-8 w-1/3 mx-auto border border-white rounded-full py-3 z-10 left-1/2 -translate-x-1/2 176:w-52">
      <ul className="flex justify-center gap-7 mx-5">
        <li className="transition-all duration-100 ease-in-out hover:scale-105">
          <Link href="/">Home</Link> {path === '/' ? '🍿' : ''}
        </li>

        <li className="transition-all duration-100 ease-in-out hover:scale-105">
          <Link href="/search">Search</Link>
          {path === '/search' ? '🔍' : ''}
        </li>
      </ul>
    </nav>
  );
}
