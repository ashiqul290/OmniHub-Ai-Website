import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'OmniHub — All-in-One Super Platform',
  description: 'One Platform. Endless Possibilities. Unifying shopping, jobs, education, social, business, healthcare, services, travel, property, AI tools, finance, and productivity.',
  openGraph: {
    title: 'OmniHub — All-in-One Super Platform',
    description: 'One Platform. Endless Possibilities. Unifying 12 essential digital services in one connected ecosystem.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OmniHub — All-in-One Super Platform',
    description: 'One Platform. Endless Possibilities. Unifying 12 essential digital services in one connected ecosystem.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
