import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/router';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      setSuccessMsg('Account created! Please check your email to verify.');
      setTimeout(() => router.push('/login'), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#0b1120] via-[#111827] to-[#0f172a] text-white">
      <form
        onSubmit={handleSignup}
        className="bg-[#111827] bg-gradient-to-br from-[#111827]/70 to-[#1f2937]/80 p-8 rounded-2xl w-full max-w-sm border border-gray-700 shadow-lg backdrop-blur"
      >
        <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text">
          Sign Up
        </h1>
        <p className="text-gray-400 text-sm text-center mb-6">
          Create your EKAM account below.
        </p>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        {successMsg && <p className="text-green-400 text-sm mb-4 text-center">{successMsg}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-3 bg-transparent border border-white rounded-md text-white placeholder-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 p-3 bg-transparent border border-white rounded-md text-white placeholder-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:from-indigo-600 hover:to-pink-600 transition"
        >
          Create Account
        </button>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-white underline hover:text-gray-300">Log in</a>
        </p>
      </form>
    </div>
  );
}

