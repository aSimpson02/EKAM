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
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSignup}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-sm border border-gray-800 shadow-xl"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center">Sign Up</h1>
        <p className="text-gray-400 mb-6 text-center">Create your EKAM account below.</p>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        {successMsg && <p className="text-green-500 text-sm mb-4 text-center">{successMsg}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-3 bg-gray-800 border border-gray-700 rounded text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 p-3 bg-gray-800 border border-gray-700 rounded text-white"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-white text-black rounded hover:bg-gray-200 transition font-semibold"
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


