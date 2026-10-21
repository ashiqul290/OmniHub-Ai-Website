'use client';

import React, { useState } from 'react';
import { 
  Palette, 
  Search, 
  ChevronDown, 
  Bell, 
  User, 
  Check, 
  AlertCircle, 
  Package, 
  Heart, 
  Star, 
  ArrowRight, 
  SlidersHorizontal, 
  FileText, 
  Trash2, 
  Edit2, 
  Sparkles,
  Inbox
} from 'lucide-react';

interface SharedUiComponentsProps {
  onBackToHome: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export const SharedUiComponents: React.FC<SharedUiComponentsProps> = ({
  onBackToHome,
  onOpenAuth,
}) => {
  const [btnState, setBtnState] = useState('Idle');
  const [inputVal, setInputVal] = useState('ashique@example.com');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* Top Breadcrumb & Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <button onClick={onBackToHome} className="hover:text-blue-600 transition-colors">OmniHub</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Design System</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <span>OmniHub Shared UI Components</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
              Living Design System
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Standardized atomic UI building blocks powering all 12 modules across desktop and mobile.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        
        {/* 1. Buttons & Controls */}
        <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900">1. Button Hierarchy</h2>
            <p className="text-xs text-slate-500">Accessible touch targets with primary, secondary, and subtle variants</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-500/25 transition-all">
              Primary Button
            </button>

            <button className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 hover:border-slate-300 transition-all shadow-2xs">
              Secondary Button
            </button>

            <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors">
              Dark Action
            </button>

            <button className="px-5 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl transition-colors">
              Destructive / Danger
            </button>

            <button className="px-5 py-2.5 bg-slate-100 text-slate-400 text-xs font-bold rounded-xl cursor-not-allowed">
              Disabled State
            </button>

            <button className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors">
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* 2. Form Fields & Inputs */}
        <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900">2. Form Fields & Search Inputs</h2>
            <p className="text-xs text-slate-500">Consistent typography, clear focus states, and input feedback</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                defaultValue="secretpassword123"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Search with Icon
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search OmniHub..."
                  className="w-full pl-9 pr-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Cards & Data Table */}
        <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900">3. Cards & Data Tables</h2>
            <p className="text-xs text-slate-500">Tabular numerals and single-elevation card surfaces</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Sample Card */}
            <div className="md:col-span-4 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
              <div className="h-32 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white">
                <Package className="w-10 h-10 text-white/80" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">Wireless Headphones</span>
                <span className="font-black text-blue-600 tabular-nums">$59.99</span>
              </div>
              <p className="text-[11px] text-slate-500">Sample product card mockup with active rating and stock badge.</p>
              <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.8 (1.4k reviews)</span>
              </div>
            </div>

            {/* Sample Data Table */}
            <div className="md:col-span-8 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-2.5 px-3">Product</th>
                    <th className="py-2.5 px-3">Price</th>
                    <th className="py-2.5 px-3">Stock</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-slate-900">Headphones ANC</td>
                    <td className="py-2.5 px-3 tabular-nums">$59.99</td>
                    <td className="py-2.5 px-3 tabular-nums">124</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">● In Stock</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-slate-900">Smart Watch Pro</td>
                    <td className="py-2.5 px-3 tabular-nums">$89.99</td>
                    <td className="py-2.5 px-3 tabular-nums">98</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">● In Stock</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-slate-900">Commuter Backpack</td>
                    <td className="py-2.5 px-3 tabular-nums">$38.99</td>
                    <td className="py-2.5 px-3 tabular-nums">0</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700">● Out of Stock</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* 4. Profile Avatar, Notifications & Empty States */}
        <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900">4. Avatars, Notifications & Empty States</h2>
            <p className="text-xs text-slate-500">Reusable system status components</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Profile Avatar Card */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase">Profile Avatar & Menu</h4>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  AI
                </div>
                <div>
                  <h5 className="font-bold text-xs text-slate-900">Ashiq Islam</h5>
                  <span className="text-[11px] text-slate-400">@ashiqdev20</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200/80 space-y-1 text-xs text-slate-600">
                <div className="p-1.5 hover:bg-white rounded-lg cursor-pointer">My Profile</div>
                <div className="p-1.5 hover:bg-white rounded-lg cursor-pointer">Account Settings</div>
                <div className="p-1.5 hover:bg-white rounded-lg text-rose-600 cursor-pointer">Log Out</div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase">Live Notifications</h4>
              <div className="space-y-2">
                <div className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-2xs text-xs space-y-0.5">
                  <div className="font-bold text-slate-900">New message from Sarah</div>
                  <div className="text-[10px] text-slate-400">2m ago · Social Feed</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-2xs text-xs space-y-0.5">
                  <div className="font-bold text-slate-900">Your order has shipped</div>
                  <div className="text-[10px] text-slate-400">10m ago · E-commerce</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-2xs text-xs space-y-0.5">
                  <div className="font-bold text-slate-900">New job matches available</div>
                  <div className="text-[10px] text-slate-400">30m ago · Careers</div>
                </div>
              </div>
            </div>

            {/* Empty State */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-slate-200/70 flex items-center justify-center text-slate-400">
                <Inbox className="w-6 h-6" />
              </div>
              <h5 className="font-bold text-xs text-slate-900">No Data Found</h5>
              <p className="text-[11px] text-slate-400 max-w-[200px]">
                Try adjusting your search criteria or resetting filters.
              </p>
              <button className="px-3 py-1 bg-white border border-slate-200 text-xs font-bold rounded-lg hover:bg-slate-100 text-slate-700 transition-colors">
                Reset Filters
              </button>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
};
