'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  BookOpen, 
  Clock, 
  Star, 
  Users, 
  CheckCircle, 
  Play, 
  Award,
  ChevronRight
} from 'lucide-react';
import { EDUCATION_DATA } from '@/data/modulesData';

interface EducationModuleProps {
  onBackToHome: () => void;
}

export const EducationModule: React.FC<EducationModuleProps> = ({ onBackToHome }) => {
  const [enrolledCourseId, setEnrolledCourseId] = useState<string | null>(null);

  const handleEnroll = (id: string) => {
    setEnrolledCourseId(id);
    setTimeout(() => setEnrolledCourseId(null), 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <button onClick={onBackToHome} className="hover:text-blue-600 transition-colors">OmniHub</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">Education & Learning</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniLearn</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                  Accredited Academy
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3.5 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs">
                My Learning (3)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-xs rounded-full text-xs font-semibold uppercase tracking-wider">
              Career Certifications & Bootcamps
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Learn New Skills. Build a Better Future.
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Explore 2,800+ industry-reviewed courses in full-stack engineering, AI & machine learning, visual design, and financial analysis.
            </p>

            {/* Course Search Bar */}
            <div className="relative pt-2 max-w-xl">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses, instructors, topics..."
                className="w-full pl-10 pr-24 py-2.5 bg-white rounded-xl text-xs text-slate-900 focus:outline-none shadow-lg placeholder-slate-400"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Stats Strip */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-black text-slate-900 tabular-nums">{EDUCATION_DATA.stats.activeLearners}</div>
            <div className="text-[11px] text-slate-500">Active Global Learners</div>
          </div>
          <div>
            <div className="text-xl font-black text-emerald-600 tabular-nums">{EDUCATION_DATA.stats.totalCourses}</div>
            <div className="text-[11px] text-slate-500">Interactive Courses</div>
          </div>
          <div>
            <div className="text-xl font-black text-teal-600 tabular-nums">{EDUCATION_DATA.stats.completionRate}</div>
            <div className="text-[11px] text-slate-500">Student Completion Rate</div>
          </div>
          <div>
            <div className="text-xl font-black text-slate-900 tabular-nums">{EDUCATION_DATA.stats.certifiedTutors}</div>
            <div className="text-[11px] text-slate-500">Verified Instructors</div>
          </div>
        </div>
      </div>

      {/* Featured Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Featured Courses</h3>
            <p className="text-xs text-slate-500">Top-rated curriculum with hands-on projects & certificates</p>
          </div>
          <button className="text-xs font-semibold text-emerald-600 hover:underline">
            View All Courses →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATION_DATA.courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Course Thumbnail Graphic */}
                <div className={`h-36 bg-gradient-to-tr ${course.accent} p-4 flex flex-col justify-between text-white relative`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-black/25 backdrop-blur-xs px-2 py-0.5 rounded">
                      {course.level}
                    </span>
                    <span className="text-[10px] font-bold bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full">
                      {course.badge}
                    </span>
                  </div>

                  <div className="flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] z-10 text-white/90">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {course.lessons} Lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-4 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {course.title}
                  </h4>

                  <div className="text-xs text-slate-500">
                    By <span className="font-semibold text-slate-700">{course.instructor}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 font-normal">({course.reviews})</span>
                    </div>

                    <span className="text-slate-400 text-[11px]">
                      {course.students} students
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & Enroll */}
              <div className="p-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-base font-black text-slate-900 tabular-nums">
                  {course.price}
                </span>

                <button
                  onClick={() => handleEnroll(course.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    enrolledCourseId === course.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white'
                  }`}
                >
                  {enrolledCourseId === course.id ? 'Enrolled!' : 'Enroll Course'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
