'use client';

import React from 'react';
import { 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  MessageSquare, 
  BarChart3, 
  HeartPulse, 
  Sparkles, 
  Compass, 
  Home as HomeIcon, 
  Bot, 
  CreditCard, 
  CalendarCheck,
  ArrowRight
} from 'lucide-react';
import { MODULES, ModuleMeta } from '@/data/modulesData';

interface CoreFeaturesGridProps {
  onSelectModule: (moduleId: string) => void;
}

export const CoreFeaturesGrid: React.FC<CoreFeaturesGridProps> = ({ onSelectModule }) => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingCart': return <ShoppingCart className="w-6 h-6 text-orange-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-600" />;
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-purple-600" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-cyan-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-violet-600" />;
      case 'Compass': return <Compass className="w-6 h-6 text-pink-600" />;
      case 'Home': return <HomeIcon className="w-6 h-6 text-amber-600" />;
      case 'Bot': return <Bot className="w-6 h-6 text-indigo-600" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-emerald-600" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-yellow-600" />;
      default: return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="core-features" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold tracking-wide">
            12 Essential Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Features
          </h2>
          <p className="text-base text-slate-600">
            Everything you need, all in one platform. Click any feature to explore its dedicated interface.
          </p>
        </div>

        {/* 12 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((module, index) => (
            <div
              key={module.id}
              onClick={() => onSelectModule(module.id)}
              className="group relative bg-white hover:bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Icon box with subtle background */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${module.bgLight} border ${module.borderColor}`}>
                  {getFeatureIcon(module.icon)}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {module.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {module.shortDesc}
                </p>
              </div>

              {/* Action link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-indigo-600">
                <span>Launch Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
