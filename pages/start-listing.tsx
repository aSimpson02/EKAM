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
    // TODO:-- send to Supabase or backend
  };

  return (
    <div className="min-h-screen px-4 py-20 bg-white text-black max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Start Listing Your AI Tool</h1>
      <p className="text-lg text-center mb-8">
        Submit your AI model, API, or tool to the Ekam marketplace and get discovered by businesses and researchers.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" name="name" placeholder="e.g. Annie Simpson" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="e.g. annie@ekam.ai" required />
        </div>
        <div>
          <Label htmlFor="toolName">Tool Name</Label>
          <Input id="toolName" name="toolName" placeholder="e.g. Sentiment Classifier API" required />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" placeholder="What does your tool do?" required />
        </div>
        <div>
          <Label htmlFor="link">Website or GitHub Link</Label>
          <Input id="link" name="link" type="url" placeholder="https://github.com/your-repo" required />
        </div>

        <Button type="submit" className="w-full mt-4">
          Submit Listing
        </Button>
      </form>
    </div>
  );
}
