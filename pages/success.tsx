export default function SuccessPage() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">Payment Successful</h1>
        <p className="text-gray-400 mb-6">Thank you for your purchase. Your AI tools will be available shortly.</p>
        <a href="/" className="bg-white text-black px-6 py-3 rounded-md">Go Home</a>
      </div>
    </div>
  );
}
