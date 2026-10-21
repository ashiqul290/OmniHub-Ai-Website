'use client';

import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Plus, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Calendar, 
  Check, 
  Flame, 
  Tag, 
  Sparkles,
  Edit3,
  Trash2
} from 'lucide-react';
import { PRODUCTIVITY_DATA } from '@/data/modulesData';

interface ProductivityModuleProps {
  onBackToHome: () => void;
}

export const ProductivityModule: React.FC<ProductivityModuleProps> = ({ onBackToHome }) => {
  const [tasks, setTasks] = useState(PRODUCTIVITY_DATA.tasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<'High' | 'Medium' | 'Normal'>('Medium');

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: `t-${Date.now()}`,
      title: newTaskTitle,
      priority: newTaskPriority,
      due: 'Today',
      completed: false,
      tag: 'General',
    };

    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
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
                <span className="text-slate-900 font-semibold">Personal Productivity</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniFocus</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  Focus Cockpit
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold border border-amber-200">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>12 Day Focus Streak!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Productivity Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 uppercase">Tasks Completed</span>
            <div className="text-2xl font-black text-slate-900 mt-1 tabular-nums">{PRODUCTIVITY_DATA.stats.tasksCompleted}</div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-amber-500 h-full w-3/4 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 uppercase">Deep Work Hours</span>
            <div className="text-2xl font-black text-slate-900 mt-1 tabular-nums">{PRODUCTIVITY_DATA.stats.focusHours}</div>
            <span className="text-[11px] text-emerald-600 font-medium">Top 5% efficiency</span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 uppercase">Current Streak</span>
            <div className="text-2xl font-black text-amber-600 mt-1 tabular-nums">{PRODUCTIVITY_DATA.stats.streak}</div>
            <span className="text-[11px] text-slate-400">Personal best record</span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 uppercase">Weekly Velocity</span>
            <div className="text-2xl font-black text-blue-600 mt-1 tabular-nums">{PRODUCTIVITY_DATA.stats.efficiency}</div>
            <span className="text-[11px] text-slate-400">Goals fulfilled on time</span>
          </div>
        </div>

        {/* Tasks and Schedule Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Tasks List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Today&apos;s Priority Tasks</h3>
                  <p className="text-xs text-slate-500">Track milestones and check off items as you proceed</p>
                </div>
                <span className="text-xs font-bold text-slate-400">{tasks.filter(t => t.completed).length} / {tasks.length} Done</span>
              </div>

              {/* Add New Task Form */}
              <form onSubmit={handleAddTask} className="flex gap-2">
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="+ Add a new task..."
                  className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-amber-500"
                />
                <select
                  value={newTaskPriority}
                  onChange={(e) => setNewTaskPriority(e.target.value as any)}
                  className="px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Normal">Normal</option>
                </select>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
                >
                  Add
                </button>
              </form>

              {/* Tasks List */}
              <div className="space-y-2 pt-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                      task.completed
                        ? 'bg-slate-50/60 border-slate-200 text-slate-400'
                        : 'bg-white border-slate-200/80 hover:border-amber-300 shadow-2xs text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <button className="text-amber-500 shrink-0">
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300" />
                        )}
                      </button>

                      <span className={`text-xs font-medium ${task.completed ? 'line-through text-slate-400' : ''}`}>
                        {task.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        task.priority === 'High' 
                          ? 'bg-rose-50 text-rose-700' 
                          : task.priority === 'Medium'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {task.priority}
                      </span>
                      <span className="text-[11px] text-slate-400 tabular-nums">{task.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Schedule & Notes */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Today Schedule Timeline */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Today&apos;s Timeline</span>
                </h3>
                <span className="text-xs text-slate-400">Oct 20, 2026</span>
              </div>

              <div className="space-y-3 pt-2">
                {PRODUCTIVITY_DATA.schedule.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <span className="font-mono text-slate-400 text-[11px] w-16 shrink-0 pt-0.5">
                      {item.time}
                    </span>
                    <div className="flex-1 p-2.5 rounded-xl bg-slate-50 border border-slate-100 font-medium text-slate-800">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Scratchpad Notes */}
            <div className="bg-amber-50/50 rounded-2xl border border-amber-200/60 p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xs text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5 text-amber-700" />
                  <span>Unified Notes</span>
                </h4>
                <button className="text-[11px] text-amber-800 font-bold hover:underline">+ New Note</button>
              </div>

              {PRODUCTIVITY_DATA.notes.map((note, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-amber-200/50 text-xs space-y-1">
                  <div className="font-bold text-slate-900">{note.title}</div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{note.content}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
