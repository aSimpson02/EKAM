import { useCart } from '@/contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { FormEvent } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async (event: FormEvent) => {
    event.preventDefault();

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems }),
    });

    const data = await res.json();
    const stripe = await stripePromise;

    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: data.id });
    }
  };

  return (
    <div className="bg-[#0b1120] text-white px-6 md:px-20 py-12 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-4">Checkout</h1>
      <p className="text-gray-400 mb-10">Secure payment processing for your selected AI tools.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Order Summary */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your bag is empty.</p>
          ) : (
            cartItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-800 pb-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ))
          )}

          <div className="flex justify-between pt-4 border-t border-gray-700 font-semibold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
          <form onSubmit={handleCheckout} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
              required
            />
            <button
              type="submit"
              disabled={cartItems.length === 0}
              className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition disabled:opacity-50"
            >
              Confirm and Pay ${total}
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              All transactions are secure and encrypted.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
