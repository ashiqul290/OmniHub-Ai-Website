'use client';

import React, { useState } from 'react';
import { 
  Headphones, 
  Code2, 
  GraduationCap, 
  Palette, 
  Building2, 
  TrendingUp, 
  Star, 
  MapPin, 
  ArrowRight,
  ExternalLink,
  Tag,
  Clock
} from 'lucide-react';
import { FEATURED_CONTENT } from '@/data/modulesData';

interface FeaturedContentSectionProps {
  onSelectModule: (moduleId: string) => void;
}

export const FeaturedContentSection: React.FC<FeaturedContentSectionProps> = ({ onSelectModule }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'jobs' | 'education' | 'services' | 'property'>('all');

  const filteredItems = activeTab === 'all' 
    ? FEATURED_CONTENT 
    : FEATURED_CONTENT.filter(item => {
        if (activeTab === 'products') return item.type === 'product';
        if (activeTab === 'jobs') return item.type === 'job';
        if (activeTab === 'education') return item.type === 'course';
        if (activeTab === 'services') return item.type === 'service';
        if (activeTab === 'property') return item.type === 'property';
        return true;
      });

  const getTargetModule = (type: string) => {
    switch (type) {
      case 'product': return 'ecommerce';
      case 'job': return 'jobs';
      case 'course': return 'education';
      case 'service': return 'services';
      case 'property': return 'property';
      case 'business': return 'business';
      default: return 'home';
    }
  };

  const getItemIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones': return <Headphones className="w-5 h-5 text-white" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-white" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-white" />;
      case 'Palette': return <Palette className="w-5 h-5 text-white" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-white" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-white" />;
      default: return <Tag className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold tracking-wide mb-2">
              Cross-Platform Highlights
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Content
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Live highlights across trending products, verified jobs, top courses, and properties.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-200/70 p-1.5 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Highlights
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'products' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'jobs' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Jobs
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'education' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'services' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('property')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'property' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Real Estate
            </button>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectModule(getTargetModule(item.type))}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-200 overflow-hidden group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Visual Header Banner */}
                <div className={`h-36 bg-gradient-to-tr ${item.imageBg} p-5 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-semibold text-white/90 uppercase tracking-wider bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-end justify-between z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      {getItemIcon(item.icon)}
                    </div>
                    {item.discount && (
                      <span className="text-xs font-black bg-rose-500 text-white px-2 py-0.5 rounded-md">
                        {item.discount}
                      </span>
                    )}
                  </div>

                  {/* Decorative backdrop shapes */}
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-white/5 blur-xl pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {item.subtitle}
                  </p>

                  {/* Meta items */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    {item.price && (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base font-extrabold text-slate-900 tabular-nums">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-slate-400 line-through tabular-nums">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                    )}

                    {item.salary && (
                      <span className="text-sm font-bold text-blue-600 tabular-nums">
                        {item.salary}
                      </span>
                    )}

                    {item.metric && (
                      <span className="text-xs font-bold text-emerald-600">
                        {item.metric}
                      </span>
                    )}

                    {item.rating && (
                      <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{item.rating}</span>
                        {item.reviews && (
                          <span className="text-slate-400 font-normal">({item.reviews})</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-blue-600">
                <span>View in {item.category}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
