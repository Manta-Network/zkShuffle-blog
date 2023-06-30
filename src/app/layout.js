import { IBM_Plex_Sans, Inter } from 'next/font/google';
import Header from '../components/Header';

import '../styles/style.css';

const mainText = IBM_Plex_Sans({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700'] });

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
