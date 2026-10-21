'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Star, 
  Clock, 
  CheckCircle, 
  Award, 
  ChevronRight, 
  ShieldCheck, 
  Filter,
  DollarSign
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/modulesData';

interface ServicesModuleProps {
  onBackToHome: () => void;
}

export const ServicesModule: React.FC<ServicesModuleProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [orderedServiceId, setOrderedServiceId] = useState<string | null>(null);

  const handleOrder = (id: string) => {
    setOrderedServiceId(id);
    setTimeout(() => setOrderedServiceId(null), 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Top Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <button onClick={onBackToHome} className="hover:text-blue-600 transition-colors">OmniHub</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">Services Marketplace</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniGigs</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-700">
                  Escrow Protected
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3.5 py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-xs font-bold shadow-xs">
                Become a Seller
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Search */}
      <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-xs rounded-full text-xs font-semibold uppercase tracking-wider">
              On-Demand Freelance Experts
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Find the Right Freelancer for Your Project
            </h2>
            <p className="text-xs sm:text-sm text-violet-200">
              Hire verified developers, creative designers, copywriters, and AI consultants with milestone escrow and guaranteed results.
            </p>

            {/* Service Search */}
            <div className="relative pt-2 max-w-xl">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Try 'React SaaS UI', 'Logo design', or 'SEO audit'..."
                className="w-full pl-10 pr-24 py-2.5 bg-white rounded-xl text-xs text-slate-900 focus:outline-none shadow-lg placeholder-slate-400"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Categories Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-500" />
                <span>Service Categories</span>
              </h3>
              <ul className="space-y-1">
                {SERVICES_DATA.categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        selectedCategory === cat
                          ? 'bg-violet-50 text-violet-700 font-bold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span>{cat}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Services Grid */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Featured Professional Services</h3>
                <p className="text-xs text-slate-500">Handpicked pros with 99%+ client satisfaction</p>
              </div>
              <span className="text-xs text-violet-600 font-semibold cursor-pointer">View All 1,400+ Services →</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SERVICES_DATA.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-lg hover:border-violet-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual representation */}
                    <div className="h-36 rounded-xl bg-gradient-to-tr from-violet-800 to-indigo-900 p-4 flex flex-col justify-between text-white relative overflow-hidden">
                      <div className="flex items-center justify-between z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-black/25 backdrop-blur-xs px-2 py-0.5 rounded">
                          {service.level}
                        </span>
                        <span className="text-[10px] font-bold bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full">
                          {service.badge}
                        </span>
                      </div>

                      <div className="z-10">
                        <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-xs">
                          {service.avatar}
                        </div>
                        <span className="text-xs font-medium text-violet-200 mt-1 block">
                          By {service.freelancer}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <h4 className="font-bold text-slate-900 text-sm line-clamp-2 group-hover:text-violet-600 transition-colors">
                        {service.title}
                      </h4>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{service.rating}</span>
                          <span className="text-slate-400 font-normal">({service.reviews})</span>
                        </div>

                        <span className="flex items-center gap-1 text-slate-400 text-[11px]">
                          <Clock className="w-3 h-3" />
                          {service.delivery}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Starting at</span>
                      <div className="text-base font-black text-slate-900 tabular-nums">{service.price}</div>
                    </div>

                    <button
                      onClick={() => handleOrder(service.id)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        orderedServiceId === service.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-violet-600 hover:bg-violet-700 text-white shadow-xs'
                      }`}
                    >
                      {orderedServiceId === service.id ? 'Order Started!' : 'Order Gig'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
