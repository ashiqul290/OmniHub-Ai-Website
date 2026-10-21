'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import { HeroSection } from '@/components/home/HeroSection';
import { CoreFeaturesGrid } from '@/components/home/CoreFeaturesGrid';
import { FeaturedContentSection } from '@/components/home/FeaturedContentSection';
import { EcosystemBanner } from '@/components/home/EcosystemBanner';

// 12 Modules
import { EcommerceModule } from '@/components/modules/EcommerceModule';
import { JobsModule } from '@/components/modules/JobsModule';
import { EducationModule } from '@/components/modules/EducationModule';
import { SocialModule } from '@/components/modules/SocialModule';
import { BusinessModule } from '@/components/modules/BusinessModule';
import { HealthcareModule } from '@/components/modules/HealthcareModule';
import { ServicesModule } from '@/components/modules/ServicesModule';
import { TravelModule } from '@/components/modules/TravelModule';
import { PropertyModule } from '@/components/modules/PropertyModule';
import { AiToolsModule } from '@/components/modules/AiToolsModule';
import { FinanceModule } from '@/components/modules/FinanceModule';
import { ProductivityModule } from '@/components/modules/ProductivityModule';

// Shared Components & Mobile Simulator
import { SharedUiComponents } from '@/components/shared/SharedUiComponents';
import { MobileSimulator } from '@/components/MobileSimulator';
import { MODULES } from '@/data/modulesData';
import { 
  Home, 
  Layers, 
  Palette, 
  Smartphone, 
  ChevronUp,
  X,
  Sparkles
} from 'lucide-react';

export default function OmniHubApp() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showQuickDock, setShowQuickDock] = useState(true);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <main>
            <HeroSection
              onExploreClick={() => {
                const element = document.getElementById('core-features');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              onSelectModule={(id) => setCurrentView(id)}
            />
            <CoreFeaturesGrid onSelectModule={(id) => setCurrentView(id)} />
            <FeaturedContentSection onSelectModule={(id) => setCurrentView(id)} />
            <EcosystemBanner onExplore={() => setCurrentView('ecommerce')} />
          </main>
        );

      case 'ecommerce':
        return <EcommerceModule onBackToHome={() => setCurrentView('home')} />;

      case 'jobs':
        return <JobsModule onBackToHome={() => setCurrentView('home')} />;

      case 'education':
        return <EducationModule onBackToHome={() => setCurrentView('home')} />;

      case 'social':
        return <SocialModule onBackToHome={() => setCurrentView('home')} />;

      case 'business':
        return <BusinessModule onBackToHome={() => setCurrentView('home')} />;

      case 'healthcare':
        return <HealthcareModule onBackToHome={() => setCurrentView('home')} />;

      case 'services':
        return <ServicesModule onBackToHome={() => setCurrentView('home')} />;

      case 'travel':
        return <TravelModule onBackToHome={() => setCurrentView('home')} />;

      case 'property':
        return <PropertyModule onBackToHome={() => setCurrentView('home')} />;

      case 'ai-tools':
        return <AiToolsModule onBackToHome={() => setCurrentView('home')} />;

      case 'finance':
        return <FinanceModule onBackToHome={() => setCurrentView('home')} />;

      case 'productivity':
        return <ProductivityModule onBackToHome={() => setCurrentView('home')} />;

      case 'ui-kit':
        return (
          <SharedUiComponents
            onBackToHome={() => setCurrentView('home')}
            onOpenAuth={handleOpenAuth}
          />
        );

      case 'mobile':
        return (
          <MobileSimulator
            onBackToHome={() => setCurrentView('home')}
            onSelectModule={(id) => setCurrentView(id)}
          />
        );

      default:
        return null;
    }
  };

  const getCurrentModuleName = () => {
    if (currentView === 'home') return 'Homepage';
    if (currentView === 'ui-kit') return 'Shared UI Components';
    if (currentView === 'mobile') return 'Mobile Simulator';
    const found = MODULES.find(m => m.id === currentView);
    return found ? found.name : 'Homepage';
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Global Navbar */}
      <Navbar
        currentView={currentView}
        onSelectView={(view) => setCurrentView(view)}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {renderCurrentView()}
      </div>

      {/* Global Footer (shown on all pages except mobile simulator which has its own dark atmosphere) */}
      {currentView !== 'mobile' && (
        <Footer onSelectView={(view) => setCurrentView(view)} />
      )}

      {/* Interactive Floating Quick Navigator Dock */}
      {showQuickDock && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-950/90 hover:bg-slate-950 text-white backdrop-blur-md px-3 py-2 rounded-2xl shadow-2xl border border-slate-800/80 flex items-center gap-2 text-xs transition-all animate-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center gap-1.5 px-2 py-0.5 border-r border-slate-800 text-[11px] text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="hidden sm:inline">Active:</span>
            <strong className="text-white truncate max-w-[110px]">{getCurrentModuleName()}</strong>
          </div>

          <button
            onClick={() => setCurrentView('home')}
            className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'home'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Home
          </button>

          {/* Quick Select Module Dropdown */}
          <select
            value={currentView}
            onChange={(e) => setCurrentView(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-2.5 py-1 focus:outline-none focus:border-blue-500 font-medium cursor-pointer"
          >
            <option value="home">All 12 Modules...</option>
            {MODULES.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
            <option value="ui-kit">Shared UI Kit</option>
            <option value="mobile">Mobile Simulator</option>
          </select>

          <button
            onClick={() => setCurrentView('ui-kit')}
            className={`hidden md:flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'ui-kit'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Palette className="w-3 h-3 text-purple-400" />
            <span>UI Kit</span>
          </button>

          <button
            onClick={() => setCurrentView('mobile')}
            className={`hidden md:flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'mobile'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Smartphone className="w-3 h-3 text-indigo-400" />
            <span>Mobile</span>
          </button>

          <button
            onClick={() => setShowQuickDock(false)}
            className="text-slate-500 hover:text-slate-300 p-1 rounded-lg hover:bg-slate-800 transition-colors"
            title="Hide Navigator Dock"
            aria-label="Hide Navigator Dock"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Global Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />

    </div>
  );
}
