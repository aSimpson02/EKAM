export default function CheckoutPage() {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-12 min-h-screen">
      {/* Page Header */}
      <h1 className="text-5xl font-extrabold mb-4">Checkout</h1>
      <p className="text-gray-400 mb-10">Secure payment processing for your selected AI tools.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Order Summary */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex justify-between border-b border-gray-800 pb-4">
              <div>
                <h3 className="font-semibold">SentimentAnalyzer Pro</h3>
                <p className="text-gray-400 text-sm">AI Model • NLP</p>
              </div>
              <p className="text-white font-medium">$299</p>
            </div>

            {/* Item 2 */}
            <div className="flex justify-between border-b border-gray-800 pb-4">
              <div>
                <h3 className="font-semibold">MedicalVision API</h3>
                <p className="text-gray-400 text-sm">API • Healthcare</p>
              </div>
              <p className="text-white font-medium">$499</p>
            </div>

            {/* Total */}
            <div className="flex justify-between pt-4 border-t border-gray-700 font-semibold text-lg">
              <span>Total</span>
              <span>$798</span>
            </div>
          </div>
        </div>

        {/* Right: Payment Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-1/2 p-3 rounded-md bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <button className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition">
              Confirm and Pay $798
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
