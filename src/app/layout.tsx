import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mini Next.js Project',
  description:
    'A mini project to demonstrate server-side data fetching with caching in Next.js.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header style={headerStyle}>
          <h1>Mini Next.js Project</h1>
        </header>
        <main style={mainStyle}>{children}</main>
      </body>
    </html>
  );
}

const headerStyle: React.CSSProperties = {
  backgroundColor: '#0070f3',
  padding: '20px',
  color: 'white',
  textAlign: 'center',
};

const mainStyle: React.CSSProperties = {
  padding: '20px',
};
