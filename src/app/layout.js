import { Roboto_Mono } from 'next/font/google';
import Header from '../components/Header';

import '../styles/style.css';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

// TODO:need update project title and description
export const metadata = {
  title: 'Zug ZK',
  description: 'Zug ZK news',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <main>
          <Header />
          <>{children}</>
        </main>
      </body>
    </html>
  );
}
