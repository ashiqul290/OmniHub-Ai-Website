'use client';

import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  HeartPulse, 
  CreditCard, 
  Bot, 
  Building2, 
  Compass, 
  CalendarCheck, 
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { MODULES } from '@/data/modulesData';

interface HeroSectionProps {
  onExploreClick: () => void;
  onSelectModule: (moduleId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onSelectModule,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-400/10 via-indigo-400/15 to-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-200/80 rounded-full shadow-xs text-xs font-semibold text-blue-700">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>All-in-One Super Platform</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-normal">Unified Digital Living</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              One Platform.{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Endless Possibilities.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Shop, work, learn, connect, grow and more — all in one place. OmniHub brings together the services you need for a smarter and easier life.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById('core-features');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-colors shadow-xs cursor-pointer"
              >
                Discover Features
              </button>
            </div>

            {/* Trust & Stats metrics */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums">12</div>
                <div className="text-xs text-slate-500">Essential Modules</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-blue-600 tabular-nums">1 Account</div>
                <div className="text-xs text-slate-500">Universal Access</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-purple-600 tabular-nums">99.9%</div>
                <div className="text-xs text-slate-500">High Availability</div>
              </div>
            </div>

          </div>

          {/* Right Hero Connected Digital Ecosystem Illustration */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              
              {/* Outer decorative dashed orbital rings */}
              <div className="absolute inset-0 border-2 border-dashed border-blue-200/60 rounded-full animate-[spin_120s_linear_infinite]" />
              <div className="absolute inset-8 border border-purple-200/40 rounded-full" />
              <div className="absolute inset-20 border border-indigo-200/50 rounded-full" />

              {/* Center Core Hub Card */}
              <div className="relative z-20 w-44 h-44 sm:w-52 sm:h-52 bg-white rounded-3xl p-5 shadow-2xl shadow-indigo-500/15 border border-slate-100 flex flex-col items-center justify-center text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-3xl sm:text-4xl shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
                  Ω
                </div>
                <div className="mt-3 font-bold text-slate-900 text-sm sm:text-base">
                  OmniHub Core
                </div>
                <div className="text-[11px] text-blue-600 font-medium">
                  Connected Digital Ecosystem
                </div>
              </div>

              {/* Orbiting Satellite Badges for the modules */}
              {/* 1. Shopping (Top Left) */}
              <button
                onClick={() => onSelectModule('ecommerce')}
                className="absolute top-2 left-10 z-20 bg-white hover:bg-orange-50 border border-orange-200/80 shadow-md rounded-2xl p-2.5 flex items-center gap-2 hover:scale-105 transition-all text-xs font-semibold text-slate-800"
              >
                <div className="w-7 h-7 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <span className="hidden sm:inline">E-commerce</span>
              </button>

              {/* 2. Jobs (Top Right) */}
              <button
                onClick={() => onSelectModule('jobs')}
                className="absolute top-2 right-10 z-20 bg-white hover:bg-blue-50 border border-blue-200/80 shadow-md rounded-2xl p-2.5 flex items-center gap-2 hover:scale-105 transition-all text-xs font-semibold text-slate-800"
              >
                <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <span className="hidden sm:inline">Jobs & Careers</span>
              </button>

              {/* 3. AI Assistant (Far Right) */}
              <button
                onClick={() => onSelectModule('ai-tools')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-indigo-50 border border-indigo-200/80 shadow-md rounded-2xl p-2.5 flex items-center gap-2 hover:scale-105 transition-all text-xs font-semibold text-slate-800"
              >
                <div className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="hidden sm:inline">AI Tools</span>
              </button>

              {/* 4. Finance (Bottom Right) */}
              <button
                onClick={() => onSelectModule('finance')}
                className="absolute bottom-4 right-10 z-20 bg-white hover:bg-emerald-50 border border-emerald-200/80 shadow-md rounded-2xl p-2.5 flex items-center gap-2 hover:scale-105 transition-all text-xs font-semibold text-slate-800"
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <span className="hidden sm:inline">Finance</span>
              </button>

              {/* 5. Healthcare (Bottom Left) */}
              <button
                onClick={() => onSelectModule('healthcare')}
                className="absolute bottom-4 left-10 z-20 bg-white hover:bg-rose-50 border border-rose-200/80 shadow-md rounded-2xl p-2.5 flex items-center gap-2 hover:scale-105 transition-all text-xs font-semibold text-slate-800"
              >
                <div className="w-7 h-7 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <span className="hidden sm:inline">Healthcare</span>
              </button>

              {/* 6. Education (Far Left) */}
              <button
                onClick={() => onSelectModule('education')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-teal-50 border border-teal-200/80 shadow-md rounded-2xl p-2.5 flex items-center gap-2 hover:scale-105 transition-all text-xs font-semibold text-slate-800"
              >
                <div className="w-7 h-7 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="hidden sm:inline">Education</span>
              </button>

              {/* Floating micro-chips */}
              <div className="absolute top-1/4 right-8 z-10 px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold shadow-xs">
                Real-Time Sync
              </div>
              <div className="absolute bottom-1/4 left-8 z-10 px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold shadow-xs">
                Single Sign-On
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
