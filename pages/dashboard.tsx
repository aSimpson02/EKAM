import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { supabase } from '@/lib/supabaseClient';
import { supabase } from '../lib/supabaseClient';


export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login');
      } else {
        setUser(session.user);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen px-8 py-16">
      <h1 className="text-4xl font-extrabold mb-4">
        Welcome, {user?.email || 'User'}
      </h1>
      <p className="text-gray-400 mb-8">
        This is your dashboard. You can manage your purchases, submissions, or profile here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1: Recent Activity */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Recent Activity</h2>
          <p className="text-gray-400 text-sm">No recent activity yet.</p>
        </div>

        {/* Box 2: Your Purchases */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Your Purchases</h2>
          <p className="text-gray-400 text-sm">You haven't made any purchases yet.</p>
        </div>

        {/* Box 3: Profile Info */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Profile Info</h2>
          <p className="text-gray-400 text-sm">Email: {user?.email}</p>
          <p className="text-gray-400 text-sm mt-1">User ID: {user?.id}</p>
        </div>
      </div>
    </div>
  );
}

