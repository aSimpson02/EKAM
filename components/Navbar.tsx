'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
  const { data: session } = useSession();
  const { totalItems } = useCart();

  return (
    <nav className="bg-[#1C2B41] text-white border-b border-gray-800 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 gap-8 flex-wrap">
        {/* Left: Logo + Nav Links */}
        <div className="flex items-center gap-10 flex-wrap">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/final-logo.png"
              alt="EKAM Logo"
              width={140}
              height={40}
              priority
            />
          </Link>

          {/* Navigation */}
          <div className="flex gap-6 text-base tracking-wide">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/marketplace" className="hover:underline">Marketplace</Link>
            <Link href="/developers" className="hover:underline">For Developers</Link>
            <Link href="/business" className="hover:underline">For Businesses</Link>
            <Link href="/components" className="hover:underline">Components</Link>
          </div>
        </div>

        {/* Right: Cart + Auth */}
        <div className="flex items-center gap-6">
          {/* Cart icon */}
          <Link href="/checkout" className="relative hover:underline text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-white text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Auth buttons */}
          {session ? (
            <>
              <Link href="/dashboard" className="hover:underline text-sm tracking-wide">Dashboard</Link>
              <button
                onClick={() => signOut()}
                className="hover:underline text-sm tracking-wide"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:underline text-sm tracking-wide">Log in</Link>
              <Link href="/signup" className="hover:underline text-sm tracking-wide">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
