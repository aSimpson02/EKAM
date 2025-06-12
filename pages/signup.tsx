export default function SignupPage() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-md p-8 shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-center">Create an Account</h1>
        <p className="text-gray-400 mb-8 text-center">Join EKAM to list, discover, and collaborate on AI solutions.</p>
        
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
          />
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
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-white underline hover:text-gray-300">Log in</a>
        </p>
      </div>
    </div>
  );
}
