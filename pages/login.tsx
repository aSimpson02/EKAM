export default function LoginPage() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-md p-8 shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-center">Welcome Back</h1>
        <p className="text-gray-400 mb-8 text-center">Log in to access your EKAM account.</p>
        
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
          />
          <button
            type="submit"
            className="bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Don't have an account?{' '}
          <a href="/signup" className="text-white underline hover:text-gray-300">Sign up</a>
        </p>
      </div>
    </div>
  );
}
