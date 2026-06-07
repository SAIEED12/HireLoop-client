"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Person, Envelope, Lock, Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { Description, Label, Radio, RadioGroup } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("seeker");
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const { data, error: authError } = await authClient.signUp.email({
        email: email,
        password: password,
        name: name,
        role,
      });

      if (authError) {
        setError(authError.message || "Something went wrong during sign up.");
      } else {
        setSuccess("Account created successfully!");
        setName("");
        setEmail("");
        setPassword("");
        router.push(redirectTo);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex font-sans relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[30%] left-[30%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="hidden lg:flex w-1/2 p-12 lg:p-20 flex-col justify-between relative z-10">
        {/* Logo (Top) */}
        <Link
          href="/"
          className="flex items-center gap-2.5 cursor-pointer w-max hover:opacity-90 transition-opacity"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#c928ff] to-[#6042ff] flex items-center justify-center shadow-lg shadow-purple-900/20">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white tracking-wide">
            HireLoop
          </span>
        </Link>

        {/* Center Content: Value Prop & Metrics */}
        <div className="w-full max-w-[520px] mx-auto flex flex-col mt-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6">
            Join thousands of professionals finding work they love.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12">
            Build your profile once, get matched with top tech companies
            globally, and track your applications in one unified dashboard.
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-1">50k+</div>
              <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">
                Active Jobs
              </div>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">
                Response Rate
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content: Trusted By */}
        <div className="mt-16">
          <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
            Trusted by innovative teams
          </p>
          <div className="flex items-center gap-8 opacity-60 grayscale">
            {/* Mock Company Logos (SVG text for demonstration) */}
            <div className="text-xl font-bold text-white tracking-tighter">
              Acme Corp
            </div>
            <div className="text-xl font-black text-white italic">
              GlobalTech
            </div>
            <div className="text-lg font-bold text-white uppercase tracking-widest">
              Nexus
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - The Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-10">
        {/* Card Container */}
        <div className="w-full max-w-[440px] bg-[#121212]/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-800 p-8 sm:p-12">
          <div className="flex lg:hidden justify-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c928ff] to-[#6042ff] flex items-center justify-center shadow-lg">
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="mb-10 lg:text-left text-center">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Create Account
            </h1>
            <p className="text-zinc-400 mt-2.5 text-sm">
              Join HireLoop to start browsing jobs.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* NAME INPUT */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">
                Full Name
              </label>
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all">
                <Person className="text-zinc-500 w-5 h-5 flex-shrink-0" />
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-zinc-600 outline-none text-sm"
                />
              </div>
            </div>

            {/* EMAIL INPUT */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">
                Email Address
              </label>
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all">
                <Envelope className="text-zinc-500 w-5 h-5 flex-shrink-0" />
                <input
                  required
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-zinc-600 outline-none text-sm"
                />
              </div>
            </div>

            {/* PASSWORD INPUT */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">
                Password
              </label>
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all">
                <Lock className="text-zinc-500 w-5 h-5 flex-shrink-0" />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-zinc-600 outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-zinc-500 hover:text-white transition-colors focus:outline-none flex-shrink-0"
                >
                  {showPassword ? (
                    <EyeSlash className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Role Selection */}
            <div className="flex flex-col gap-4">
              <Label>Select Role</Label>
              <RadioGroup
                defaultValue="seeker"
                name="role"
                orientation="horizontal"
                onChange={(value) => setRole(value)}
              >
                <Radio value="seeker">
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  <Radio.Content>
                    <Label>Job Seeker</Label>
                  </Radio.Content>
                </Radio>
                <Radio value="recruiter">
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  <Radio.Content>
                    <Label>Recruiter</Label>
                  </Radio.Content>
                </Radio>
              </RadioGroup>
            </div>

            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full bg-white text-black font-semibold text-base mt-2 rounded-xl py-6 hover:bg-zinc-200 transition-colors"
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              href={`/signin?redirect=${redirectTo}`}
              className="text-white font-medium hover:text-purple-400 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
