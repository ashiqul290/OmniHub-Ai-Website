'use client';

import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  Star, 
  Plane, 
  Hotel, 
  Car, 
  Sparkles, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { TRAVEL_DATA } from '@/data/modulesData';

interface TravelModuleProps {
  onBackToHome: () => void;
}

export const TravelModule: React.FC<TravelModuleProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState('Tour Packages');
  const [bookedTour, setBookedTour] = useState<string | null>(null);

  const handleBook = (id: string) => {
    setBookedTour(id);
    setTimeout(() => setBookedTour(null), 3000);
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
                <span className="text-slate-900 font-semibold">Travel & Tourism</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniTravel</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700">
                  Global Flight & Hotel Best Rates
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3.5 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold shadow-xs">
                My Bookings (0)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Search Section */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-8">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-xs rounded-full text-xs font-semibold uppercase tracking-wider">
              Exclusive International Escapes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Explore the World. Make Unforgettable Memories.
            </h2>
            <p className="text-xs sm:text-sm text-pink-100">
              Discover curated flight itineraries, all-inclusive luxury villas, and guided tours with 24/7 concierge assistance.
            </p>
          </div>

          {/* Travel Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {TRAVEL_DATA.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === cat
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Booking Inputs Box */}
          <div className="bg-white p-3 rounded-2xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-slate-800">
            <div className="relative flex items-center">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3" />
              <input
                type="text"
                placeholder="Where to? (e.g. Dubai, Bali)"
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-pink-500"
              />
            </div>

            <div className="relative flex items-center">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3" />
              <input
                type="text"
                placeholder="Dates (e.g. Nov 10 - Nov 18)"
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-pink-500"
              />
            </div>

            <div className="relative flex items-center">
              <Users className="w-4 h-4 text-slate-400 absolute left-3" />
              <input
                type="text"
                placeholder="Guests (e.g. 2 Adults, 1 Room)"
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-pink-500"
              />
            </div>

            <div>
              <button className="w-full py-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5">
                <Search className="w-4 h-4" />
                <span>Find Deals</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">Popular Destinations & Tour Packages</h3>
            <p className="text-xs text-slate-500">Handcrafted travel itineraries with 5-star verified accommodations</p>
          </div>
          <span className="text-xs font-semibold text-pink-600 cursor-pointer">View All 60+ Countries →</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAVEL_DATA.destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-pink-200 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Destination Visual */}
                <div className="h-44 bg-gradient-to-tr from-pink-900 via-indigo-950 to-slate-900 p-4 flex flex-col justify-between text-white relative">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-black/30 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                      {dest.tag}
                    </span>
                    <span className="text-xs font-black bg-pink-500 text-white px-2 py-0.5 rounded-md">
                      {dest.price}
                    </span>
                  </div>

                  <div className="z-10">
                    <h4 className="font-extrabold text-lg text-white group-hover:translate-x-0.5 transition-transform">
                      {dest.city}
                    </h4>
                    <span className="text-xs text-pink-200">{dest.country}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {dest.duration}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{dest.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                    {dest.highlights}
                  </p>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="p-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Free cancellation
                </span>

                <button
                  onClick={() => handleBook(dest.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    bookedTour === dest.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-pink-600 hover:bg-pink-700 text-white shadow-xs'
                  }`}
                >
                  {bookedTour === dest.id ? 'Reserved!' : 'Book Package'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
