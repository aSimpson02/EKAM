import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <div className="min-h-screen bg-[#0b1120] text-white">
          <Navbar />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </SessionProvider>
  );
}

