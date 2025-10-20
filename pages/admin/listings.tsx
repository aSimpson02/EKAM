'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Listing = {
  id: string;
  submitter_name: string;
  submitter_email: string;
  tool_name: string;
  link: string | null;
  description: string;
  status: 'new' | 'review' | 'approved' | 'rejected';
  created_at: string;
};

export default function ListingsAdmin() {
  const [rows, setRows] = useState<Listing[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('tool_listings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) setError(error.message);
      else setRows((data as Listing[]) || []);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Tool Listings</h1>
      {error && <p className="text-red-400 mb-4">Error: {error}</p>}

      <div className="grid gap-4">
        {rows.map(r => (
          <div key={r.id} className="bg-[#111827]/60 border border-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">{r.tool_name}</div>
              <span className="text-xs px-2 py-1 rounded border border-white/20">{r.status}</span>
            </div>
            <div className="text-sm opacity-80 mt-1">
              {r.submitter_name} — {r.submitter_email}
            </div>
            <p className="mt-3 opacity-90">{r.description}</p>
            {r.link && (
              <a className="mt-2 inline-block underline" href={r.link} target="_blank" rel="noreferrer">
                {r.link}
              </a>
            )}
            <div className="text-xs opacity-60 mt-2">Submitted: {new Date(r.created_at).toLocaleString()}</div>
          </div>
        ))}
        {rows.length === 0 && (
          <div className="opacity-70">No listings yet. Submit one at <code>/start-listing</code>.</div>
        )}
      </div>
    </div>
  );
}
