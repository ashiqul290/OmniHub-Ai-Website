'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  DollarSign, 
  Clock, 
  Building2, 
  CheckCircle, 
  ChevronRight,
  Filter,
  Bookmark,
  Share2,
  ExternalLink
} from 'lucide-react';
import { JOBS_DATA } from '@/data/modulesData';

interface JobsModuleProps {
  onBackToHome: () => void;
}

export const JobsModule: React.FC<JobsModuleProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Roles');
  const [searchRole, setSearchRole] = useState('');
  const [appliedJobId, setAppliedJobId] = useState<string | null>(null);

  const filteredJobs = JOBS_DATA.listings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchRole.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchRole.toLowerCase());
    return matchesSearch;
  });

  const handleApply = (id: string) => {
    setAppliedJobId(id);
    setTimeout(() => setAppliedJobId(null), 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <button onClick={onBackToHome} className="hover:text-blue-600 transition-colors">OmniHub</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">Jobs & Careers</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniCareers</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                  Verified Global Talent
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Looking to hire?</span>
              <button className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs">
                Post a Job Free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Search Box */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-6">
            <h2 className="text-3xl font-black tracking-tight">
              Find Your Next Career Move
            </h2>
            <p className="text-xs sm:text-sm text-blue-100">
              Thousands of high-impact engineering, design, marketing, and leadership opportunities with transparent compensation.
            </p>
          </div>

          {/* Search Inputs Card */}
          <div className="bg-white p-3 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-12 gap-2 text-slate-800">
            <div className="md:col-span-5 relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                value={searchRole}
                onChange={(e) => setSearchRole(e.target.value)}
                placeholder="Job title, keywords, or company..."
                className="w-full pl-10 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-4 relative flex items-center">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                placeholder="Location (e.g. Remote, USA, London)"
                className="w-full pl-10 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-3">
              <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                <span>Search Jobs</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Category Filter */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-500" />
                <span>Job Categories</span>
              </h3>
              <ul className="space-y-1">
                {JOBS_DATA.categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        selectedCategory === cat
                          ? 'bg-blue-50 text-blue-700 font-bold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span>{cat}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Experience Level */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                <h4 className="text-xs font-bold text-slate-900">Experience Level</h4>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                    <span>Senior Level (5+ yrs)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                    <span>Mid Level (2–4 yrs)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Entry Level / Graduate</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Center Job Listings */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">
                {filteredJobs.length} Positions Available
              </span>
              <span className="text-xs text-slate-400">
                Sorted by most recent
              </span>
            </div>

            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:border-blue-300 transition-all space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-black text-slate-700 text-sm shrink-0">
                      {job.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm hover:text-blue-600 transition-colors cursor-pointer">
                        {job.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <span className="font-semibold text-slate-700">{job.company}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg tabular-nums whitespace-nowrap">
                    {job.salary}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.tags.map((tag, idx) => (
                    <span key={idx} className="text-[11px] text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium">
                    {job.type}
                  </span>
                </div>

                {/* Footer of card */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{job.posted}</span>
                  </span>

                  <button
                    onClick={() => handleApply(job.id)}
                    className={`px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${
                      appliedJobId === job.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                    }`}
                  >
                    {appliedJobId === job.id ? 'Applied!' : 'Apply Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Featured Employers */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Featured Employers
              </h3>

              <div className="space-y-3">
                {JOBS_DATA.featuredEmployers.map((emp) => (
                  <div key={emp.name} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <div>
                      <h5 className="font-bold text-slate-900 text-xs">{emp.name}</h5>
                      <span className="text-[11px] text-slate-500">{emp.openPositions} open roles</span>
                    </div>
                    <span className="text-xs font-bold text-amber-600">★ {emp.rating}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 text-center">
                <button className="text-xs font-semibold text-blue-600 hover:underline">
                  View All Verified Companies →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
