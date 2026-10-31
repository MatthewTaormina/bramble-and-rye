import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'Bramble & Rye | Naturally Leavened Hearth Bread & Cafe',
  description:
    'Rooted in Grain, Baked for the Neighborhood. Slow-fermented heritage hearth boules, stone-milled flours, wild bramble pastries, and precision third-wave espresso.',
  keywords: [
    'sourdough bakery',
    'heritage grain',
    'naturally leavened',
    'stone-milled flour',
    'Red Fife',
    'spelt bread',
    'rye bread',
    'Ontario bakery',
    'third-wave coffee',
  ],
  authors: [{ name: 'Bramble & Rye Hearth Bakery' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-hearth text-rye selection:bg-bramble/20 selection:text-bramble">
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <CartDrawer />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
