export default function CancelPage() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">Payment Canceled</h1>
        <p className="text-gray-400 mb-6">Your payment was not completed. Please try again or choose a different method.</p>
        <a href="/checkout" className="bg-white text-black px-6 py-3 rounded-md">Return to Checkout</a>
      </div>
    </div>
  );
}

