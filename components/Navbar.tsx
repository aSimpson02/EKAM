import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex flex-wrap gap-6 items-center">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/marketplace" className="hover:underline">Marketplace</Link>
      <Link href="/developers" className="hover:underline">For Developers</Link>
      <Link href="/businesses" className="hover:underline">For Businesses</Link>
      <Link href="/components" className="hover:underline">Components</Link>
      <Link href="/checkout" className="hover:underline">Checkout</Link>
      <Link href="/login" className="ml-auto hover:underline">Log in</Link>
      <Link href="/signup" className="hover:underline">Sign up</Link>
    </nav>
  );
}
