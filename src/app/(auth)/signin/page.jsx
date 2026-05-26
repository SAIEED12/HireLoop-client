"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Envelope, Lock, Eye, EyeSlash } from "@gravity-ui/icons";

import { authClient } from "@/lib/auth-client";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      const { data, error: authError } = await authClient.signIn.email({
        email: email,
        password: password,
      });

      if (authError) {
        setError(authError.message || "Invalid email or password.");
      } else {
        setSuccess("Signed in successfully! Redirecting...");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // 1. Moved overflow-hidden here and made it relative to hold global glows
    <div className="min-h-screen bg-[#09090b] flex font-sans relative overflow-hidden">
      
      {/* GLOBAL BACKGROUND GLOWS - Now spanning the entire page */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* LEFT PANEL - Removed border-r, bg color, and overflow-hidden */}
      <div className="hidden lg:flex w-1/2 p-12 lg:p-20 flex-col justify-center relative z-10">
        
        {/* Content Wrapper */}
        <div className="w-full max-w-[520px] mx-auto flex flex-col gap-12">
          
          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-2.5 cursor-pointer w-max hover:opacity-90 transition-opacity">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#c928ff] to-[#6042ff] flex items-center justify-center shadow-lg shadow-purple-900/20">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">HireLoop</span>
          </Link> */}

          {/* Hero Copy & Features */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8">
              Your next great career move starts here.
            </h2>
            
            <ul className="space-y-5">
              {[
                "Access thousands of exclusive job postings.",
                "Connect directly with verified tech recruiters.",
                "Track your applications with our smart dashboard."
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-zinc-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          <div className="mt-4 p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800/50 backdrop-blur-md">
            <div className="flex text-yellow-500 mb-4 gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-zinc-300 italic mb-5 leading-relaxed text-sm lg:text-base">
              &quot;HireLoop made finding my new role incredibly seamless. The platform is beautiful, intuitive, and the recruiters reply incredibly fast.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-white font-medium text-sm border border-zinc-700">
                SJ
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Sarah Jenkins</p>
                <p className="text-zinc-500 text-xs">Senior Frontend Engineer</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT PANEL - Seamlessly inheriting the global background */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-10">
        
        {/* Card Container */}
        <div className="w-full max-w-[440px] bg-[#121212]/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-800 p-8 sm:p-12">
          
          <div className="flex lg:hidden justify-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c928ff] to-[#6042ff] flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="mb-10 lg:text-left text-center">
            <h1 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h1>
            <p className="text-zinc-400 mt-2.5 text-sm">
              Sign in to your account to continue.
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
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">Email Address</label>
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

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-300">Password</label>
                <Link href="#" className="text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
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
                  {showPassword ? <EyeSlash className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              isLoading={isLoading}
              className="w-full bg-white text-black font-semibold text-base mt-2 rounded-xl py-6 hover:bg-zinc-200 transition-colors"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-white font-medium hover:text-purple-400 transition-colors">
              Sign up
            </Link>
          </div>

        </div>
      </div>
      
    </div>
  );
}