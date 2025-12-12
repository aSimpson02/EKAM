'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useCart } from '@/contexts/CartContext';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/business', label: 'Solutions' },
  { href: '/developers', label: 'Developers' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const { data: session } = useSession();
  const { totalItems } = useCart();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="bg-[#1C2B41] text-white border-b border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 gap-6">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-8 flex-1">
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

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 text-sm tracking-wide md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:underline ${
                  isActive(item.href) ? 'font-semibold' : 'font-normal'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Cart + Auth (desktop) */}
        <div className="hidden items-center gap-6 md:flex">
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
              <Link
                href="/dashboard"
                className="hover:underline text-sm tracking-wide"
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="hover:underline text-sm tracking-wide"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hover:underline text-sm tracking-wide"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="hover:underline text-sm tracking-wide"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center rounded-md border border-white/40 px-3 py-1 text-sm md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-800 px-6 py-3 md:hidden">
          <div className="flex flex-col gap-2 text-sm tracking-wide">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-2 hover:bg-white/5 ${
                  isActive(item.href) ? 'font-semibold' : 'font-normal'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 flex items-center justify-between">
              {/* Cart */}
              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="relative text-lg"
              >
                🛒
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-3 bg-white text-black text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Auth */}
              <div className="flex gap-3">
                {session ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setOpen(false)}
                      className="hover:underline"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        setOpen(false);
                        signOut();
                      }}
                      className="hover:underline"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="hover:underline"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setOpen(false)}
                      className="hover:underline"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
