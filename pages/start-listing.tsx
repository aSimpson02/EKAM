'use client';

import { useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function StartListingPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(formRef.current!);
    console.log("Listing Submitted:", Object.fromEntries(data.entries()));
    // TODO: send to Supabase or backend
  };

  return (
    <div className="min-h-screen px-4 py-20 bg-gradient-to-br from-[#0b1120] via-[#111827] to-[#0f172a] text-white max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
        Start Listing Your AI Tool
      </h1>
      <p className="text-lg text-center text-gray-400 mb-10">
        Submit your AI model, API, or tool to the Ekam marketplace and get discovered by businesses and researchers.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {[
          { id: "name", label: "Your Name", placeholder: "e.g. Annie Simpson" },
          { id: "email", label: "Email", placeholder: "e.g. annie@ekam.ai", type: "email" },
          { id: "toolName", label: "Tool Name", placeholder: "e.g. Sentiment Classifier API" },
          { id: "link", label: "Website or GitHub Link", placeholder: "https://github.com/your-repo", type: "url" },
        ].map(({ id, label, placeholder, type = "text" }) => (
          <div key={id}>
            <Label htmlFor={id}>{label}</Label>
            <Input
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              className="bg-transparent border border-white text-white placeholder-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            />
          </div>
        ))}

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="What does your tool do?"
            rows={5}
            className="bg-transparent border border-white text-white placeholder-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-full shadow-lg hover:from-indigo-600 hover:to-pink-600 transition"
        >
          Submit Listing
        </Button>
      </form>
    </div>
  );
}

