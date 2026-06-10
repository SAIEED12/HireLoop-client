"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();
  const user = session?.user;
  
  const handleSignOut = async () => {
    await signOut();
  };

  const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "Pricing", href: "/plans" },
  ];

  const dashboardLinks = {
    seeker: '/dashboard/seeker',
    recruiter: '/dashboard/recruiter',
    admin: '/dashboard/admin'
  }

  if(user?.email){
    navLinks.push({
      name: "Dashboard",
      href: dashboardLinks[user?.role || 'seeker']
    })
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-[#09090b]/70 backdrop-blur-xl">
      {/* 1. Added sticky top-0, transparent background, and backdrop-blur */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* BRAND / LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#c928ff] to-[#6042ff] flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-white font-bold leading-[1.1] tracking-wide">
                <span className="text-[15px]">Hire</span>
                <span className="text-[15px]">Loop</span>
              </div>
            </Link>
          </div>

          {/* DESKTOP CONTENT */}
          <div className="hidden md:flex items-center gap-5">
            
            {/* 2. Nav Links Pill - Made slightly glassy to match */}
            <div className="flex items-center bg-zinc-900/40 rounded-full px-6 py-2.5 border border-zinc-800/60 backdrop-blur-md shadow-sm">
              <ul className="flex items-center gap-7 m-0 p-0 list-none">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                
                {/* Vertical Divider */}
                <li className="w-px h-4 bg-zinc-700 mx-1" aria-hidden="true"></li>
                
                {/* Sign In / User State */}
                <li>
                  {user ? (
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <span>Hi, {user.name}!</span>
                      <Button 
                        onClick={handleSignOut} 
                        variant="light" 
                        size="sm"
                        className="text-gray-400 hover:text-white min-w-0 px-2"
                      >
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <Link 
                      href="/signin" 
                      className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                    >
                      Sign In
                    </Link>
                  )}
                </li>
              </ul>
            </div>

            {/* Get Started Button */}
            <Link 
              href="/signup" 
              className="bg-white text-black text-sm font-medium rounded-xl px-6 py-2.5 shadow-sm hover:bg-gray-100 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800/50 transition-colors focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU CONTENT */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-t border-zinc-800/60 shadow-xl absolute w-full" id="mobile-menu">
          {/* 3. Mobile Dropdown - Added frosted glass effect */}
          <ul className="px-4 pt-3 pb-6 space-y-1 sm:px-3 list-none m-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-zinc-800/50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              {user ? (
                 <div className="flex items-center justify-between px-3 py-3">
                   <span className="text-gray-300">Hi, {user.name}</span>
                   <Button onClick={handleSignOut} size="sm" variant="flat" color="danger">Sign Out</Button>
                 </div>
              ) : (
                <Link
                  href="/signin"
                  className="block px-3 py-3 rounded-md text-base font-medium text-indigo-400 hover:bg-zinc-800/50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </li>
            <li className="pt-4 pb-2">
              <Link 
                href="/signup" 
                className="block text-center bg-white text-black font-medium rounded-xl w-full py-3 shadow-sm hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}