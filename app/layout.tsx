import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '../styles/index.scss';

const inter = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TemaMalov',
  description: "Tema Malov's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
