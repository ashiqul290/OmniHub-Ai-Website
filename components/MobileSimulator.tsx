'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  MessageSquare, 
  BarChart3, 
  HeartPulse, 
  Compass, 
  Home, 
  Bot, 
  CreditCard, 
  CalendarCheck,
  Star,
  Package,
  Layers,
  ChevronRight,
  Battery,
  Wifi,
  Signal
} from 'lucide-react';
import { MODULES, FEATURED_CONTENT } from '@/data/modulesData';

interface MobileSimulatorProps {
  onBackToHome: () => void;
  onSelectModule: (id: string) => void;
}

export const MobileSimulator: React.FC<MobileSimulatorProps> = ({
  onBackToHome,
  onSelectModule,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'ecommerce' | 'jobs'>('home');

  return (
    <div className="bg-slate-900 text-white min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <button
              onClick={onBackToHome}
              className="text-xs text-blue-400 hover:underline flex items-center gap-1.5 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Desktop View
            </button>
            <h1 className="text-2xl font-black text-white flex items-center gap-2">
              <span>OmniHub Responsive Mobile Simulation</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-600/30 text-blue-300 border border-blue-500/30">
                iOS & Android Viewport
              </span>
            </h1>
            <p className="text-xs text-slate-400">
              Interactive dual-device preview of OmniHub running on mobile screens.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-xl self-start">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'home' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Mobile Homepage
            </button>
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'ecommerce' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Mobile E-commerce
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'jobs' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Mobile Careers
            </button>
          </div>
        </div>

        {/* Dual Phone Frames Layout */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-6">
          
          {/* Phone Frame 1: Mobile Homepage */}
          <div className="w-[340px] h-[680px] bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-700/80 relative flex flex-col overflow-hidden">
            
            {/* Status Bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] text-slate-300">
              <span className="font-semibold">9:41</span>
              {/* Notch */}
              <div className="w-24 h-4 bg-black rounded-full" />
              <div className="flex items-center gap-1.5">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <Battery className="w-4 h-4" />
              </div>
            </div>

            {/* Scrollable Phone Screen Content */}
            <div className="flex-1 bg-white text-slate-900 rounded-[32px] overflow-y-auto p-4 space-y-4">
              
              {/* Mobile Top Navbar */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 text-white font-black text-xs flex items-center justify-center">
                    Ω
                  </div>
                  <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    OmniHub
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700">
                  AI
                </div>
              </div>

              {/* Mobile Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search OmniHub..."
                  className="w-full pl-8 pr-3 py-2 bg-slate-100 rounded-xl text-[11px] text-slate-900 focus:outline-none"
                />
              </div>

              {/* Mobile Hero */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
                  Super Platform
                </span>
                <h3 className="text-lg font-black leading-tight">
                  One Platform. Endless Possibilities.
                </h3>
                <p className="text-[11px] text-blue-100">
                  All 12 essential services in one unified pocket experience.
                </p>
                <button
                  onClick={() => onSelectModule('ecommerce')}
                  className="px-3.5 py-1.5 bg-white text-blue-700 text-xs font-bold rounded-lg shadow"
                >
                  Explore Now
                </button>
              </div>

              {/* 12 Core Features Grid (Mobile 2-columns) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Core Services</span>
                  <span className="text-[10px] text-blue-600 font-semibold">12 Available</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {MODULES.slice(0, 6).map((m) => (
                    <div
                      key={m.id}
                      onClick={() => onSelectModule(m.id)}
                      className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1 cursor-pointer hover:bg-blue-50 transition-colors"
                    >
                      <div className="text-xs font-bold text-slate-900 truncate">{m.name}</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">{m.shortDesc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Item Preview */}
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Trending Deal</span>
                  <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">-33%</span>
                </div>
                <div className="font-bold text-xs text-slate-900">Wireless Noise-Canceling Headphones</div>
                <div className="flex items-center justify-between">
                  <span className="font-black text-sm text-slate-900">$59.99</span>
                  <span className="text-[10px] text-amber-500 font-bold">★ 4.8</span>
                </div>
              </div>

            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="pt-2 pb-1 flex justify-center">
              <div className="w-32 h-1 bg-slate-600 rounded-full" />
            </div>

          </div>

          {/* Phone Frame 2: Mobile E-commerce or Selected Service */}
          <div className="w-[340px] h-[680px] bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-700/80 relative flex flex-col overflow-hidden">
            
            {/* Status Bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] text-slate-300">
              <span className="font-semibold">9:41</span>
              <div className="w-24 h-4 bg-black rounded-full" />
              <div className="flex items-center gap-1.5">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <Battery className="w-4 h-4" />
              </div>
            </div>

            {/* Mobile Module Screen */}
            <div className="flex-1 bg-white text-slate-900 rounded-[32px] overflow-y-auto p-4 space-y-4">
              
              {/* Header */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-black text-slate-900">OmniShop</span>
                  <span className="text-[9px] bg-orange-100 text-orange-700 font-bold px-1.5 py-0.5 rounded-full">
                    Hot Deals
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShoppingCart className="w-4 h-4 text-slate-700" />
                  <span className="text-[11px] font-bold text-slate-900">2</span>
                </div>
              </div>

              {/* Promo Card */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider">Flash Sale</span>
                <h4 className="text-base font-extrabold">Up to 50% Off Electronics</h4>
                <p className="text-[10px] text-orange-100">Free shipping on orders over $35</p>
              </div>

              {/* Product Cards */}
              <div className="space-y-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-600">In Stock</span>
                    <h5 className="font-bold text-xs text-slate-900">Omni Watch Ultra 4</h5>
                    <div className="font-black text-xs text-slate-900">$189.99</div>
                  </div>
                  <button className="px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-lg shadow-xs">
                    Buy Now
                  </button>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-600">In Stock</span>
                    <h5 className="font-bold text-xs text-slate-900">Aero Running Shoes</h5>
                    <div className="font-black text-xs text-slate-900">$74.50</div>
                  </div>
                  <button className="px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-lg shadow-xs">
                    Buy Now
                  </button>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-orange-600">25% OFF</span>
                    <h5 className="font-bold text-xs text-slate-900">Mechanical Keyboard</h5>
                    <div className="font-black text-xs text-slate-900">$68.00</div>
                  </div>
                  <button className="px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-lg shadow-xs">
                    Buy Now
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="pt-2 pb-1 flex justify-center">
              <div className="w-32 h-1 bg-slate-600 rounded-full" />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
