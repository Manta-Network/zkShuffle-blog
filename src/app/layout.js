import { Inter } from 'next/font/google';
import Header from '../components/Header';

import '../styles/style.css';

const mainText = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] });

// TODO:need update project title and description
export const metadata = {
  title: 'Nebra',
  description: 'Nebra scales and composes ZKP on blockchain, starting from Ethereum.',
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
