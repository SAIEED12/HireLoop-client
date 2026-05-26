import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      title: "Smart Search",
      desc: "Find your ideal job with advanced filters.",
      icon: (
        <svg className="w-6 h-6 text-[#ebb4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      )
    },
    {
      title: "Salary Insights",
      desc: "Get real salary data to negotiate confidently.",
      icon: (
        <svg className="w-6 h-6 text-[#ebb4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l6-6 4.5 4.5 7.5-7.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 4.5h4.5v4.5M3 20.25h18" />
        </svg>
      )
    },
    {
      title: "Top Companies",
      desc: "Apply to vetted companies that are hiring.",
      icon: (
        <svg className="w-6 h-6 text-[#ebb4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      )
    },
    {
      title: "Saved Jobs",
      desc: "Manage apps & favorites on your dashboard.",
      icon: (
        <svg className="w-6 h-6 text-[#ebb4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      )
    },
    {
      title: "One-Click Apply",
      desc: "Simplify your job applications for an easier process!",
      icon: (
        <svg className="w-6 h-6 text-[#ebb4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
        </svg>
      )
    },
    {
      title: "Resume Builder",
      desc: "Create professional resumes with modern templates.",
      icon: (
        <svg className="w-6 h-6 text-[#ebb4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      title: "Skill-Based Matching",
      desc: "Discover jobs that match your skills and experience.",
      icon: (
        <svg className="w-6 h-6 text-[#ebb4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      title: "Career Growth Resources",
      desc: "Boost your career with quick interview tips.",
      icon: (
        <svg className="w-6 h-6 text-[#ebb4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 font-sans mt-50 mb-50">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          
          {/* Sub-badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-[#6042ff]"></div>
            <span className="text-zinc-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Features Job
            </span>
            <div className="w-1.5 h-1.5 bg-[#6042ff]"></div>
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
            Everything you need <br className="hidden md:block" /> to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-5 items-start">
              
              {/* Icon Box */}
              <div className="flex-shrink-0 w-[60px] h-[60px] rounded-2xl bg-gradient-to-b from-[#1c1c1f] to-[#121212] border border-zinc-800/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center relative overflow-hidden">
                {/* Subtle top glow inside the icon box */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#ebb4ff]/10 rounded-full blur-[10px]"></div>
                
                <div className="relative z-10">
                  {feature.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col pt-1">
                <h3 className="text-white text-base font-semibold mb-2 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed pr-2">
                  {feature.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}