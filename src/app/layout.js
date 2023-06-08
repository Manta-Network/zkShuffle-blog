import { Rubik } from 'next/font/google';
import Header from '../components/Header';

import '../styles/style.css';

const mainText = Rubik({ subsets: ['latin'], weight: '300' });

// TODO:need update project title and description
export const metadata = {
  title: 'Zug ZK',
  description: 'Zug ZK news',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mainText.className}>
        <main>
          <Header />
          <>{children}</>
        </main>
      </body>
    </html>
  );
}
