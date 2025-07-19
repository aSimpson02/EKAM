'use client';

import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ComponentsPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(formRef.current!);
    console.log("Submitted:", Object.fromEntries(data.entries()));
    // TODO: send to Supabase or backend
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-white px-4 py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">Ekam Components Hub</h1>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        Coming soon: reusable AI components to plug directly into your projects.
        For now, request a custom tool or hire expert developers below.
      </p>

      <div className="flex justify-center gap-4">
        <a href="#hire" className="bg-white text-black font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition">Hire AI Experts</a>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Request Custom Tool
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0b1120] text-white border border-white">
            <DialogHeader>
              <DialogTitle>Join the Waitlist</DialogTitle>
              <DialogDescription>
                Be first to know when our AI tools go live.
              </DialogDescription>
            </DialogHeader>

            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 py-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input name="name" placeholder="Your name" className="bg-white text-black" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="email" placeholder="you@email.com" className="bg-white text-black" required />
              </div>
              <div>
                <Label htmlFor="idea">What do you need?</Label>
                <Textarea name="idea" placeholder="Describe the AI tool you’re looking for" className="bg-white text-black" />
              </div>
              <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                Join Waitlist
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Optional scroll target */}
      <div id="hire" className="mt-32">
        {/* Your existing hire form section */}
        <h2 className="text-3xl font-bold mb-4">Hire Request Section</h2>
        {/* ...existing form here... */}
      </div>
    </div>
  );
}

