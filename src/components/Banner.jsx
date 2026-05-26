"use client";

import React from 'react';

export default function Banner() {
  // Hardcoded positions for background stars to prevent Next.js hydration errors
  const stars = [
    { top: '15%', left: '10%', size: '2px' }, { top: '25%', left: '85%', size: '3px' },
    { top: '45%', left: '5%', size: '2px' }, { top: '65%', left: '90%', size: '2px' },
    { top: '20%', left: '30%', size: '1px' }, { top: '10%', left: '70%', size: '1px' },
    { top: '55%', left: '15%', size: '3px' }, { top: '85%', left: '80%', size: '2px' },
    { top: '75%', left: '25%', size: '2px' }, { top: '35%', left: '60%', size: '1px' },
  ];

  return (
    <section className="relative min-h-[90vh] bg-[#09090b] flex flex-col items-center pt-28 px-4 overflow-hidden font-sans">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Static Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-30 shadow-[0_0_5px_rgba(255,255,255,0.8)]"
            style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
          />
        ))}
      </div>

      {/* TOP PILL BADGE */}
      <div className="relative z-10 flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-800 bg-[#121212]/80 backdrop-blur-md mb-8 shadow-sm">
        <span className="text-sm">💼</span>
        <span className="text-[11px] sm:text-xs font-semibold text-white tracking-widest uppercase">
          50,000+ <span className="text-zinc-500 ml-1">New Jobs This Month</span>
        </span>
      </div>

      {/* HERO HEADINGS */}
      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Find Your Dream Job Today
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>
      </div>

      {/* SEARCH BAR CONTAINER */}
      <div className="relative z-20 w-full max-w-3xl mt-10">
        <form className="bg-[#121212]/90 backdrop-blur-xl border border-zinc-800 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center p-2 shadow-2xl focus-within:border-purple-500/50 transition-colors">
          
          {/* Job Search Input */}
          <div className="flex-1 flex items-center px-4 py-3 md:py-1 w-full">
            <svg className="w-5 h-5 text-zinc-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Job title, skill or company" 
              className="bg-transparent text-white w-full focus:outline-none ml-3 text-sm placeholder-zinc-500"
            />
          </div>

          {/* Desktop Divider */}
          <div className="hidden md:block w-px h-8 bg-zinc-800"></div>

          {/* Mobile Divider (Horizontal) */}
          <div className="block md:hidden w-full h-px bg-zinc-800 my-1"></div>

          {/* Location Input */}
          <div className="flex-1 flex items-center px-4 py-3 md:py-1 w-full">
            <svg className="w-5 h-5 text-zinc-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Location or Remote" 
              className="bg-transparent text-white w-full focus:outline-none ml-3 text-sm placeholder-zinc-500"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full md:w-auto mt-2 md:mt-0 bg-[#6042ff] hover:bg-[#5035e0] transition-colors rounded-xl md:rounded-full px-6 py-3.5 md:py-3 flex items-center justify-center shadow-lg shadow-purple-600/20"
          >
            <span className="md:hidden text-white font-medium text-sm">Search Jobs</span>
            <svg className="hidden md:block w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>

      {/* TRENDING POSITIONS */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-8">
        <span className="text-xs text-zinc-500 font-medium mr-1">Trending Position:</span>
        {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map((position, idx) => (
          <button 
            key={idx}
            className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
          >
            {position}
          </button>
        ))}
      </div>

    </section>
  );
}