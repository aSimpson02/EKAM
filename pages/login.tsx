import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-md p-8 shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-center">Welcome Back</h1>
        <p className="text-gray-400 mb-8 text-center">Log in to access your EKAM account.</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
            required
          />
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}
          <button
            type="submit"
            className="bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-white underline hover:text-gray-300">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
