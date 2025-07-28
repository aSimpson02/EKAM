'use client';

import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ComponentsPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const hireFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(formRef.current!);
    console.log("Waitlist Submitted:", Object.fromEntries(data.entries()));
    // TODO: Send to Supabase or backend
  };

  const handleHireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(hireFormRef.current!);
    console.log("Hire Request Submitted:", Object.fromEntries(data.entries()));
    // TODO: Send to Supabase or backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] via-[#111827] to-[#0f172a] text-white px-4 py-20 text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
        Ekam Components Hub
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        Coming soon: reusable AI components to plug directly into your projects.
        For now, request a custom tool or hire expert developers below.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="#hire"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-indigo-600 hover:to-pink-600 transition"
        >
          Hire AI Experts
        </a>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black transition"
            >
              Request Custom Tool
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0b1120] text-white border border-white rounded-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-2">Join the Waitlist</DialogTitle>
              <DialogDescription className="text-gray-400 mb-4">
                Be first to know when our AI tools go live.
              </DialogDescription>
            </DialogHeader>

            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5 py-4">
              {[
                { id: "name", placeholder: "Your name", type: "text" },
                { id: "email", placeholder: "you@email.com", type: "email" },
              ].map(({ id, placeholder, type }) => (
                <div key={id}>
                  <Label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</Label>
                  <Input
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    className="bg-transparent border border-white text-white placeholder-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    required
                  />
                </div>
              ))}

              <div>
                <Label htmlFor="idea">What do you need?</Label>
                <Textarea
                  name="idea"
                  placeholder="Describe the AI tool you’re looking for"
                  className="bg-transparent border border-white text-white placeholder-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                />
              </div>

              <Button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-full shadow-md hover:from-indigo-600 hover:to-pink-600 transition"
              >
                Join Waitlist
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* HIRE REQUEST FORM SECTION */}
      <div id="hire" className="mt-32">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Hire Request Section
        </h2>

        <form ref={hireFormRef} onSubmit={handleHireSubmit} className="max-w-xl mx-auto space-y-6">
          {[
            { id: "hireName", label: "Your Name", placeholder: "e.g. Annie Simpson", type: "text" },
            { id: "hireEmail", label: "Email", placeholder: "e.g. annie@ekam.ai", type: "email" },
            { id: "project", label: "Project Idea", placeholder: "e.g. Sentiment Classifier API", type: "text" },
            {
              id: "description",
              label: "What does your tool do?",
              component: "textarea",
              placeholder: "Explain what the AI tool should do...",
            },
            {
              id: "repo",
              label: "GitHub Repo (optional)",
              placeholder: "https://github.com/your-repo",
              type: "url",
            },
          ].map(({ id, label, placeholder, type = "text", component }) => (
            <div key={id}>
              <Label htmlFor={id}>{label}</Label>
              {component === "textarea" ? (
                <Textarea
                  name={id}
                  placeholder={placeholder}
                  rows={5}
                  className="bg-transparent border border-white text-white placeholder-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                />
              ) : (
                <Input
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  className="bg-transparent border border-white text-white placeholder-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                />
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:from-indigo-600 hover:to-pink-600 transition"
          >
            Submit Listing
          </Button>
        </form>
      </div>
    </div>
  );
}
