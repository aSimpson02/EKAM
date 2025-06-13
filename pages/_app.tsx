import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/contexts/CartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />
      <main className="p-8">
        <Component {...pageProps} />
      </main>
    </CartProvider>
  );
}

