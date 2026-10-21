'use client';

import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  Layers, 
  Sparkles, 
  Smartphone, 
  Palette, 
  Menu, 
  X, 
  User, 
  ArrowRight,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  MessageSquare,
  BarChart3,
  HeartPulse,
  Compass,
  Home as HomeIcon,
  Bot,
  CreditCard,
  CalendarCheck
} from 'lucide-react';
import { MODULES } from '@/data/modulesData';

interface NavbarProps {
  currentView: string;
  onSelectView: (view: string) => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onSelectView,
  onOpenAuth,
}) => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingCart': return <ShoppingCart className="w-4 h-4 text-orange-600" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-emerald-600" />;
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-purple-600" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-cyan-600" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4 text-rose-600" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-violet-600" />;
      case 'Compass': return <Compass className="w-4 h-4 text-pink-600" />;
      case 'Home': return <HomeIcon className="w-4 h-4 text-amber-600" />;
      case 'Bot': return <Bot className="w-4 h-4 text-indigo-600" />;
      case 'CreditCard': return <CreditCard className="w-4 h-4 text-emerald-600" />;
      case 'CalendarCheck': return <CalendarCheck className="w-4 h-4 text-yellow-600" />;
      default: return <Layers className="w-4 h-4 text-blue-600" />;
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const match = MODULES.find(m => 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (match) {
      onSelectView(match.id);
    } else {
      onSelectView('home');
    }
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => onSelectView('home')} 
              className="flex items-center gap-2.5 group text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-xl tracking-tighter">Ω</span>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  OmniHub
                </span>
                <span className="hidden sm:block text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Super Platform
                </span>
              </div>
            </button>
          </div>

          {/* Search bar */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden md:flex flex-1 max-w-md mx-2 relative"
          >
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything on OmniHub..."
                className="w-full pl-10 pr-16 py-2 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-blue-500 rounded-full text-xs text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                ⌘K
              </span>
            </div>
          </form>

          {/* Navigation Links & Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600">
            <button
              onClick={() => onSelectView('home')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentView === 'home'
                  ? 'text-blue-600 bg-blue-50 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* Explore All Modules Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                onBlur={() => setTimeout(() => setIsExploreOpen(false), 200)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  currentView !== 'home' && currentView !== 'ui-kit' && currentView !== 'mobile'
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Explore</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExploreOpen ? 'rotate-180' : ''}`} />
              </button>

              {isExploreOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 grid grid-cols-2 gap-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="col-span-2 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    12 Platform Services
                  </div>
                  {MODULES.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        onSelectView(m.id);
                        setIsExploreOpen(false);
                      }}
                      className={`flex items-center gap-2 p-2 rounded-xl text-left text-xs font-medium transition-all ${
                        currentView === m.id
                          ? 'bg-blue-50 text-blue-700 font-semibold shadow-xs'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                        {getModuleIcon(m.icon)}
                      </div>
                      <span className="truncate">{m.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Shared UI Components Showcase */}
            <button
              onClick={() => onSelectView('ui-kit')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                currentView === 'ui-kit'
                  ? 'text-purple-600 bg-purple-50 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-purple-600" />
              <span>UI Kit</span>
            </button>

            {/* Mobile View Simulator */}
            <button
              onClick={() => onSelectView('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                currentView === 'mobile'
                  ? 'text-indigo-600 bg-indigo-50 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
              <span>Mobile View</span>
            </button>
          </nav>

          {/* Action Buttons: Login / Sign Up */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenAuth('login')}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors whitespace-nowrap"
            >
              Login
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg shadow-sm shadow-blue-500/25 transition-all whitespace-nowrap hover:shadow"
            >
              Sign Up
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anything on OmniHub..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
            />
          </form>

          <div className="flex gap-2 pt-1 border-t border-slate-100">
            <button
              onClick={() => { onSelectView('home'); setIsMobileMenuOpen(false); }}
              className={`flex-1 py-2 text-xs font-medium rounded-lg text-center ${
                currentView === 'home' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => { onSelectView('ui-kit'); setIsMobileMenuOpen(false); }}
              className={`flex-1 py-2 text-xs font-medium rounded-lg text-center ${
                currentView === 'ui-kit' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              UI Kit
            </button>
            <button
              onClick={() => { onSelectView('mobile'); setIsMobileMenuOpen(false); }}
              className={`flex-1 py-2 text-xs font-medium rounded-lg text-center ${
                currentView === 'mobile' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Mobile View
            </button>
          </div>

          <div className="pt-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Browse 12 Modules
            </div>
            <div className="grid grid-cols-2 gap-1.5 max-h-64 overflow-y-auto">
              {MODULES.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    onSelectView(m.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2 rounded-lg text-left text-xs ${
                    currentView === m.id
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {getModuleIcon(m.icon)}
                  <span className="truncate">{m.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
