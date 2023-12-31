import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '../styles/index.scss';
import { Header } from './components/Header';

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
      <body className={inter.className}>
        <Header />
        <div
          className={`
            w-full
            max-w-[768px]
            h-auto
            absolute
            top-60
            left-0
            right-0
            m-auto        
          `}
        >
          {children}
        </div>
        <div id="modal-root" className={`absolute top-0 left-0`}></div>
      </body>
    </html>
  );
}
