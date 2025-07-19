import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/contexts/CartContext';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <Navbar />
        <main className="bg-[#0b1120] text-white min-h-screen">
          <Component {...pageProps} />
        </main>
      </CartProvider>
    </SessionProvider>
  );
}

