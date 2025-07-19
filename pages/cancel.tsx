export default function CancelPage() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center text-center px-4">
      <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Payment Canceled</h1>
        <p className="text-gray-400 mb-6">
          Your payment was not completed. Please try again or choose a different method.
        </p>
        <a
          href="/checkout"
          className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Return to Checkout
        </a>
      </div>
    </div>
  );
}
