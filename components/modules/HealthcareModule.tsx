'use client';

import React, { useState } from 'react';
import { 
  HeartPulse, 
  Search, 
  Stethoscope, 
  Sparkles, 
  Heart, 
  Baby, 
  Activity, 
  ShieldCheck, 
  Calendar, 
  Star, 
  Clock, 
  MapPin, 
  CheckCircle,
  FileText,
  UserCheck
} from 'lucide-react';
import { HEALTHCARE_DATA } from '@/data/modulesData';

interface HealthcareModuleProps {
  onBackToHome: () => void;
}

export const HealthcareModule: React.FC<HealthcareModuleProps> = ({ onBackToHome }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [bookedDoctorId, setBookedDoctorId] = useState<string | null>(null);

  const getSpecialtyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-blue-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-600" />;
      case 'Baby': return <Baby className="w-5 h-5 text-amber-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-cyan-600" />;
      default: return <Stethoscope className="w-5 h-5 text-blue-600" />;
    }
  };

  const handleBookAppointment = (id: string) => {
    setBookedDoctorId(id);
    setTimeout(() => setBookedDoctorId(null), 3000);
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
                <span className="text-slate-900 font-semibold">Healthcare & Wellness</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniHealth</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700">
                  Certified Care Network
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold shadow-xs">
                Emergency 24/7 Hotline
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Healthcare Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-rose-700 bg-rose-50">
                <HeartPulse className="w-4 h-4 text-rose-600" />
                <span>Find Doctors</span>
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>Appointments (1)</span>
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Medical Records</span>
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <ShieldCheck className="w-4 h-4 text-slate-500" />
                <span>Health Insurance</span>
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <UserCheck className="w-4 h-4 text-slate-500" />
                <span>Tele-Health Video</span>
              </button>
            </div>

            {/* Quick Consultation Promo */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200/80 rounded-2xl p-4 text-xs space-y-2">
              <h4 className="font-bold text-rose-900">Virtual Clinic Available</h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Connect with an on-call physician within 5 minutes via encrypted HD video.
              </p>
              <button className="w-full py-1.5 bg-rose-600 text-white font-bold rounded-lg text-xs shadow-xs">
                Start Instant Video Consult
              </button>
            </div>
          </div>

          {/* Right Main Healthcare Content */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* Hero Promotional Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-rose-700 text-white p-6 sm:p-8 relative overflow-hidden shadow-md">
              <div className="max-w-md space-y-3 relative z-10">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-xs rounded-full text-xs font-semibold uppercase tracking-wider">
                  Accredited Medical Specialists
                </span>
                <h2 className="text-3xl font-black tracking-tight leading-tight">
                  Your Health. Our Priority.
                </h2>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Book verified appointments with renowned doctors, specialist surgeons, and diagnostic laboratories in your city or virtually.
                </p>
                <div className="pt-2">
                  <button className="px-5 py-2.5 bg-white text-rose-700 font-bold text-xs rounded-xl shadow-md hover:bg-rose-50 transition-colors">
                    Book an Appointment
                  </button>
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="hidden sm:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center justify-center p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <HeartPulse className="w-10 h-10 text-white mb-2 animate-pulse" />
                <span className="text-xs font-bold">100% HIPAA Compliant</span>
                <span className="text-[10px] text-blue-100">Encrypted Patient Records</span>
              </div>
            </div>

            {/* Popular Specialties */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-slate-900">Popular Medical Specialties</h3>
                <span className="text-xs text-rose-600 font-semibold cursor-pointer hover:underline">
                  View All Specialties →
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {HEALTHCARE_DATA.specialties.map((spec) => (
                  <button
                    key={spec.name}
                    onClick={() => setSelectedSpecialty(spec.name)}
                    className="p-3 bg-white rounded-xl border border-slate-200/80 hover:border-rose-300 hover:shadow-md transition-all flex flex-col items-center text-center group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-rose-50 flex items-center justify-center mb-2 transition-colors">
                      {getSpecialtyIcon(spec.icon)}
                    </div>
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">{spec.name}</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">{spec.doctors} Doctors</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Doctors Cards */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Top Rated Doctors</h3>
                  <p className="text-xs text-slate-500">Verified credentials and instant booking slots</p>
                </div>
                <span className="text-xs font-semibold text-rose-600">Showing 3 Available Today</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {HEALTHCARE_DATA.doctors.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-lg hover:border-rose-200 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Doctor Avatar & Status */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-600 text-white font-bold text-base flex items-center justify-center shadow-sm">
                          {doc.name.replace('Dr. ', '').substring(0, 2).toUpperCase()}
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-md border border-emerald-200">
                          Verified MD
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-sm">{doc.name}</h4>
                      <p className="text-xs text-rose-600 font-semibold">{doc.specialty}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{doc.qualification}</p>

                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[11px]">{doc.hospital}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[11px] text-slate-800 font-medium">{doc.available}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{doc.rating}</span>
                          <span className="text-slate-400 font-normal">({doc.reviews})</span>
                        </div>
                        <span className="text-[11px] text-slate-500">{doc.experience}</span>
                      </div>
                    </div>

                    {/* Booking Footer */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Consultation</div>
                        <div className="text-base font-black text-slate-900 tabular-nums">{doc.fee}</div>
                      </div>

                      <button
                        onClick={() => handleBookAppointment(doc.id)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          bookedDoctorId === doc.id
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 hover:bg-rose-700 text-white shadow-xs'
                        }`}
                      >
                        {bookedDoctorId === doc.id ? 'Appointment Booked!' : 'Book Visit'}
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
