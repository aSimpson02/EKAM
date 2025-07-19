import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-xl w-full max-w-sm border border-gray-800 shadow-xl">
        <h1 className="text-3xl font-extrabold mb-6 text-center">Welcome Back</h1>
        <p className="text-gray-400 text-sm text-center mb-6">Log into your EKAM account</p>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 p-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-white text-black rounded hover:bg-gray-200 transition font-semibold"
        >
          Log In
        </button>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account?{' '}
          <a href="/signup" className="text-white underline hover:text-gray-300">Sign up</a>
        </p>
      </form>
    </div>
  );
}
