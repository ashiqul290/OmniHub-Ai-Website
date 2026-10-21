'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar, 
  Filter, 
  Download, 
  Package, 
  Clock, 
  CreditCard,
  LayoutDashboard,
  Layers,
  Settings,
  FileText
} from 'lucide-react';
import { BUSINESS_DATA } from '@/data/modulesData';

interface BusinessModuleProps {
  onBackToHome: () => void;
}

export const BusinessModule: React.FC<BusinessModuleProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sales' | 'inventory'>('overview');

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
                <span className="text-slate-900 font-semibold">Business Management</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniBusiness ERP</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
                  Operations Console
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2.5">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-bold transition-colors">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Last 30 Days</span>
              </button>
              <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors">
                <Download className="w-3.5 h-3.5" />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {BUSINESS_DATA.kpis.map((kpi, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>{kpi.label}</span>
                <span className="flex items-center gap-0.5 text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                  <ArrowUpRight className="w-3 h-3" />
                  {kpi.change}
                </span>
              </div>
              <div className="text-2xl font-black text-slate-900 tabular-nums">
                {kpi.value}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                {kpi.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Visual Analytics Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Sales Overview Area Chart */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Sales & Revenue Overview</h3>
                <p className="text-xs text-slate-500">Gross revenue vs monthly order processing</p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1.5 text-cyan-600 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-600"></span>
                  Revenue ($)
                </span>
                <span className="flex items-center gap-1.5 text-purple-600 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                  Orders Count
                </span>
              </div>
            </div>

            {/* Simulated Clean Chart Bars */}
            <div className="h-64 flex items-end justify-between gap-4 pt-4 border-b border-slate-100">
              {BUSINESS_DATA.salesTrend.map((point) => {
                const heightPercent = Math.round((point.revenue / 26000) * 100);
                const orderHeight = Math.round((point.orders / 1400) * 100);

                return (
                  <div key={point.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="w-full flex items-end justify-center gap-1 h-48">
                      {/* Revenue Bar */}
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className="w-1/2 bg-gradient-to-t from-cyan-600 to-blue-500 rounded-t-md transition-all group-hover:brightness-110 relative"
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-20">
                          ${point.revenue.toLocaleString()}
                        </div>
                      </div>

                      {/* Orders Bar */}
                      <div
                        style={{ height: `${orderHeight}%` }}
                        className="w-1/2 bg-gradient-to-t from-purple-500 to-indigo-400 rounded-t-md transition-all group-hover:brightness-110 relative"
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-20">
                          {point.orders} orders
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-slate-500">
                      {point.month}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-500">
              <span>Avg. Daily Sales: <strong className="text-slate-900 tabular-nums">$826.00</strong></span>
              <span>Conversion Rate: <strong className="text-emerald-600 tabular-nums">3.82%</strong></span>
            </div>
          </div>

          {/* Recent Ledger Transactions */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-slate-900">Recent Transactions</h3>
                <span className="text-xs text-cyan-600 font-semibold cursor-pointer hover:underline">View All</span>
              </div>

              <div className="space-y-3.5">
                {BUSINESS_DATA.transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/60 transition-colors">
                    <div className="space-y-0.5">
                      <h5 className="font-bold text-xs text-slate-900">{tx.user}</h5>
                      <span className="text-[10px] text-slate-400">{tx.type} · {tx.time}</span>
                    </div>

                    <div className="text-right">
                      <div className={`text-xs font-bold tabular-nums ${
                        tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-slate-700'
                      }`}>
                        {tx.amount}
                      </div>
                      <span className="text-[10px] text-slate-400">{tx.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>Connected Stripe & Wire</span>
              <span className="text-emerald-600 font-medium">● Gateway Active</span>
            </div>
          </div>

        </div>

        {/* Top Selling Products Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Top Selling Products</h3>
              <p className="text-xs text-slate-500">Inventory levels, unit sales, and margins</p>
            </div>
            <button className="text-xs font-semibold text-cyan-600 hover:underline">
              Manage Inventory →
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-100 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Product Name</th>
                  <th className="py-3 px-4">Unit Price</th>
                  <th className="py-3 px-4">Units Sold</th>
                  <th className="py-3 px-4">Total Revenue</th>
                  <th className="py-3 px-4">Stock Status</th>
                  <th className="py-3 px-4">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {BUSINESS_DATA.topProducts.map((prod, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">{prod.name}</td>
                    <td className="py-3 px-4 tabular-nums">{prod.price}</td>
                    <td className="py-3 px-4 tabular-nums">{prod.sold} units</td>
                    <td className="py-3 px-4 font-bold text-slate-900 tabular-nums">{prod.revenue}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {prod.stock}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-amber-500 font-bold">★ {prod.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
};
