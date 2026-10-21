'use client';

import React from 'react';
import { ShieldCheck, UserCheck, Zap, Layers, RefreshCw } from 'lucide-react';

interface EcosystemBannerProps {
  onExplore: () => void;
}

export const EcosystemBanner: React.FC<EcosystemBannerProps> = ({ onExplore }) => {
  const roles = [
    { role: 'Online Shopper', desc: 'Secure checkout, tracked orders, verified reviews' },
    { role: 'Career Seeker', desc: '1-click resume apply, verified salary ranges' },
    { role: 'Continuous Learner', desc: 'Sync bootcamps, certificates, instructor chats' },
    { role: 'Business Owner', desc: 'Monitor revenue, orders, inventory in real-time' },
    { role: 'Healthcare Patient', desc: 'Book verified doctors, digital prescriptions' },
    { role: 'Freelance Pro', desc: 'Manage gigs, deliver assets, receive prompt payouts' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-semibold text-blue-300">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Universal Unified Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            One Account. Multiple Roles. One Connected Platform.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Eliminate password fatigue and separate subscriptions. Your OmniHub passport gives you instant access to buy, work, study, consult, and build across all 12 service ecosystems.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 group-hover:scale-105 transition-transform">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">{item.role}</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-11">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onExplore}
            className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs rounded-xl shadow-lg transition-all"
          >
            Experience OmniHub Unified Ecosystem
          </button>
        </div>
      </div>
    </section>
  );
};
