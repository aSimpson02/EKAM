import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="bg-black text-white px-6 py-4 flex flex-wrap gap-6 items-center justify-between">
      <div className="flex gap-6 flex-wrap items-center">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/marketplace" className="hover:underline">Marketplace</Link>
        <Link href="/developers" className="hover:underline">For Developers</Link>
        <Link href="/businesses" className="hover:underline">For Businesses</Link>
        <Link href="/components" className="hover:underline">Components</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/checkout" className="relative">
          <span className="hover:underline">🛒</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-white text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
        <Link href="/login" className="hover:underline">Log in</Link>
        <Link href="/signup" className="hover:underline">Sign up</Link>
      </div>
    </nav>
  );
}

