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
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Welcome Back</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-3 bg-gray-800 border border-gray-700 rounded text-white" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 p-3 bg-gray-800 border border-gray-700 rounded text-white" required />
        <button type="submit" className="w-full py-3 bg-white text-black rounded hover:bg-gray-200">Log In</button>
      </form>
    </div>
  );
}
