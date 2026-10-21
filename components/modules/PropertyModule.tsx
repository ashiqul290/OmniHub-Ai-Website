'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Search, 
  SlidersHorizontal, 
  Check, 
  Heart, 
  Phone, 
  Calendar,
  Home
} from 'lucide-react';
import { PROPERTY_DATA } from '@/data/modulesData';

interface PropertyModuleProps {
  onBackToHome: () => void;
}

export const PropertyModule: React.FC<PropertyModuleProps> = ({ onBackToHome }) => {
  const [purposeFilter, setPurposeFilter] = useState<'All' | 'For Sale' | 'For Rent'>('All');
  const [selectedType, setSelectedType] = useState('All Types');
  const [scheduledId, setScheduledId] = useState<string | null>(null);

  const filteredProperties = PROPERTY_DATA.properties.filter(p => {
    const matchesPurpose = purposeFilter === 'All' || p.purpose === purposeFilter;
    const matchesType = selectedType === 'All Types' || p.type === selectedType;
    return matchesPurpose && matchesType;
  });

  const handleScheduleTour = (id: string) => {
    setScheduledId(id);
    setTimeout(() => setScheduledId(null), 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Top Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <button onClick={onBackToHome} className="hover:text-blue-600 transition-colors">OmniHub</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">Property & Real Estate</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniEstates</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  Verified Titles & Deeds
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold shadow-xs">
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-6">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Discover Premier Real Estate & Commercial Spaces
            </h2>
            <p className="text-xs sm:text-sm text-amber-100">
              Browse thoroughly vetted luxury penthouses, suburban estates, and prime commercial developments with virtual tours.
            </p>
          </div>

          {/* Quick Purpose Segment */}
          <div className="flex items-center gap-2 mb-4">
            {(['All', 'For Sale', 'For Rent'] as const).map((purpose) => (
              <button
                key={purpose}
                onClick={() => setPurposeFilter(purpose)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  purposeFilter === purpose
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {purpose}
              </button>
            ))}
          </div>

          {/* Filters Bar */}
          <div className="bg-white p-3 rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-slate-800">
            <div className="relative flex items-center">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3" />
              <input
                type="text"
                placeholder="City, neighborhood, or zip..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="relative flex items-center">
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500"
              >
                {PROPERTY_DATA.types.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="relative flex items-center">
              <SlidersHorizontal className="w-4 h-4 text-slate-400 absolute left-3" />
              <input
                type="text"
                placeholder="Max Price (e.g. $1,000,000)"
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <button className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5">
                <Search className="w-4 h-4" />
                <span>Search Properties</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">Featured Real Estate Listings</h3>
            <p className="text-xs text-slate-500">Showing {filteredProperties.length} verified available properties</p>
          </div>
          <span className="text-xs font-semibold text-amber-600 cursor-pointer">Explore City Map →</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-amber-300 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Placeholder */}
                <div className="h-44 bg-gradient-to-tr from-amber-900 via-stone-900 to-slate-950 p-4 flex flex-col justify-between text-white relative">
                  <div className="flex items-center justify-between z-10">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      prop.purpose === 'For Sale' ? 'bg-amber-500 text-white' : 'bg-blue-600 text-white'
                    }`}>
                      {prop.purpose}
                    </span>
                    <button className="p-1.5 rounded-full bg-black/30 hover:bg-white text-white hover:text-rose-500 transition-colors">
                      <Heart className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="z-10">
                    <span className="text-lg font-black text-white tabular-nums">
                      {prop.price}
                    </span>
                    <div className="text-[11px] text-amber-200">{prop.type}</div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-2.5">
                  <h4 className="font-bold text-slate-900 text-sm line-clamp-1 group-hover:text-amber-600 transition-colors">
                    {prop.title}
                  </h4>

                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{prop.address}</span>
                  </div>

                  {/* Spec Strip */}
                  <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-100 text-center text-xs text-slate-600">
                    {prop.beds > 0 ? (
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-slate-900">{prop.beds}</span>
                        <span className="text-[10px] text-slate-400">Beds</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-slate-900">Commercial</span>
                        <span className="text-[10px] text-slate-400">Type</span>
                      </div>
                    )}

                    <div className="flex flex-col items-center">
                      <span className="font-bold text-slate-900">{prop.baths}</span>
                      <span className="text-[10px] text-slate-400">Baths</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="font-bold text-slate-900">{prop.area}</span>
                      <span className="text-[10px] text-slate-400">Area</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <div className="p-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  {prop.tag}
                </span>

                <button
                  onClick={() => handleScheduleTour(prop.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    scheduledId === prop.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 hover:bg-amber-600 text-white shadow-xs'
                  }`}
                >
                  {scheduledId === prop.id ? 'Tour Scheduled!' : 'Book Tour'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
