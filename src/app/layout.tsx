import type { Metadata } from 'next';
import { Providers } from './providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Prodexaa - Premium Software Agency',
  description: 'Transform your business with cutting-edge software solutions. Expert development, design, and deployment services.',
  keywords: ['software development', 'web development', 'mobile apps', 'digital transformation', 'tech agency'],
  authors: [{ name: 'Prodexaa' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prodexaa.com',
    title: 'Prodexaa - Premium Software Agency',
    description: 'Transform your business with cutting-edge software solutions.',
    images: [
      {
        url: 'https://prodexaa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prodexaa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prodexaa - Premium Software Agency',
    description: 'Transform your business with cutting-edge software solutions.',
    images: ['https://prodexaa.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
