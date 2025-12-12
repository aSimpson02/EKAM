import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/contexts/CartContext";
import BottomTabNav from "@/components/BottomTabNav";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <div className="min-h-screen bg-[#0b1120] text-white">
          <Navbar />
          <main className="min-h-[calc(100vh-64px)] pb-[92px]">
            <Component {...pageProps} />
          </main>

          <BottomTabNav />
        </div>
      </CartProvider>
    </SessionProvider>
  );
}
