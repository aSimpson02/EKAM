'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
  const { data: session } = useSession();
  const { totalItems } = useCart();

  return (
    <nav className="bg-black text-white px-6 py-4 flex flex-wrap justify-between items-center">
      {/* Left nav */}
      <div className="flex gap-6 flex-wrap items-center">
        {/* Logo and brand name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="EKAM Logo"
            width={24}
            height={24}
          />
          <span className="font-bold text-white text-lg">EKAM</span>
        </Link>

        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/marketplace" className="hover:underline">Marketplace</Link>
        <Link href="/developers" className="hover:underline">For Developers</Link>
        <Link href="/business" className="hover:underline">For Businesses</Link>
        <Link href="/components" className="hover:underline">Components</Link>
      </div>

      {/* Right nav */}
      <div className="flex items-center gap-4">
        {/* Cart icon */}
        <Link href="/checkout" className="relative hover:underline">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-white text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Authentication */}
        {session ? (
          <>
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            <button
              onClick={() => signOut()}
              className="hover:underline text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:underline">Log in</Link>
            <Link href="/signup" className="hover:underline">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
