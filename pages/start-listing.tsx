'use client';

import { useRef } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function StartListingPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(formRef.current!);
    console.log("Listing Submitted:", Object.fromEntries(data.entries()));
    // TODO: send to Supabase or backend
  };

  return (
    <div className="min-h-screen px-4 py-20 w-full bg-gradient-to-br from-[#09142a] via-[#132348] to-[#1e3361] text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#111827]/60 backdrop-blur-md p-8 rounded-2xl w-full max-w-2xl border border-white/10 shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-center text-white"
        >
          Start Listing Your AI Tool
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-center text-gray-300 mb-10"
        >
          Submit your AI model, API, or tool to the EKAM marketplace and get discovered by businesses and researchers.
        </motion.p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {[
            { id: "name", label: "Your Name", placeholder: "e.g. Annie Simpson" },
            { id: "email", label: "Email", type: "email", placeholder: "e.g. annie@ekam.ai" },
            { id: "toolName", label: "Tool Name", placeholder: "e.g. Sentiment Classifier API" },
            { id: "link", label: "Website or GitHub Link", type: "url", placeholder: "https://github.com/your-repo" },
          ].map(({ id, label, placeholder, type = "text" }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Label htmlFor={id}>{label}</Label>
              <Input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                className="bg-transparent border border-white text-white placeholder-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                required
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="What does your tool do?"
              rows={5}
              className="bg-transparent border border-white text-white placeholder-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-200 w-full mt-4 font-semibold py-3 rounded-md transition"
            >
              Submit Listing
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

