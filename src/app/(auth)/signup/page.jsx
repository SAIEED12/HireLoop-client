"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
// 1. Added Eye and EyeSlash icons
import { Person, Envelope, Lock, Eye, EyeSlash } from "@gravity-ui/icons";

import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // 2. Added state for password visibility
  const [showPassword, setShowPassword] = useState(false);
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      });

      if (authError) {
        setError(authError.message || "Something went wrong during sign up.");
      } else {
        setSuccess("Account created successfully!");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      {/* Container */}
      <div className="w-full max-w-md bg-[#1e1e1e] rounded-2xl shadow-xl border border-zinc-800/80 p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Create Account</h1>
          <p className="text-sm text-gray-400 mt-2">
            Join HireLoop to start browsing jobs.
          </p>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-6 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
            {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {/* Native HTML/Tailwind Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-700 bg-transparent hover:border-zinc-500 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all">
              <Person className="text-gray-400 w-5 h-5 flex-shrink-0" />
              <input
                required
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-500 outline-none text-sm"
              />
            </div>
          </div>

          {/* Native HTML/Tailwind Email Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-700 bg-transparent hover:border-zinc-500 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all">
              <Envelope className="text-gray-400 w-5 h-5 flex-shrink-0" />
              <input
                required
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-500 outline-none text-sm"
              />
            </div>
          </div>

          {/* Native HTML/Tailwind Password Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-700 bg-transparent hover:border-zinc-500 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all">
              <Lock className="text-gray-400 w-5 h-5 flex-shrink-0" />
              <input
                required
                // 3. Toggle type based on state
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-500 outline-none text-sm"
              />
              {/* 4. Added toggle button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-white transition-colors focus:outline-none flex-shrink-0"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeSlash className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <Button 
            type="submit" 
            isLoading={isLoading}
            className="w-full bg-white text-black font-medium text-md mt-2 rounded-xl py-6 hover:bg-gray-100 transition-colors"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </Button>
        </form>

        {/* Toggle / Navigate to Sign In */}
        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link 
            href="/signin" 
            className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
}