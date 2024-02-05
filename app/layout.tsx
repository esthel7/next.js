import { Metadata } from 'next';
import { Navigation } from '@components';
import '@styles/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Loading...'
  },
  description: 'The best movies on the best framework'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
