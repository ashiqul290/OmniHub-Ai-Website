'use client';

import React, { useState } from 'react';
import { 
  CreditCard, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Send, 
  Plus, 
  FileText, 
  PieChart, 
  Wallet, 
  ShieldCheck, 
  Clock, 
  Check,
  ChevronRight
} from 'lucide-react';
import { FINANCE_DATA } from '@/data/modulesData';

interface FinanceModuleProps {
  onBackToHome: () => void;
}

export const FinanceModule: React.FC<FinanceModuleProps> = ({ onBackToHome }) => {
  const [transfers, setTransfers] = useState(FINANCE_DATA.recentTransactions);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [transferSuccess, setTransferSuccess] = useState(false);

  const handleSendMoney = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !amount) return;

    const newTx = {
      id: `f-${Date.now()}`,
      title: `Transfer to ${recipient}`,
      date: 'Just now',
      category: 'Transfer',
      amount: `-$${parseFloat(amount).toFixed(2)}`,
      isCredit: false,
    };

    setTransfers([newTx, ...transfers]);
    setTransferSuccess(true);
    setTimeout(() => {
      setTransferSuccess(false);
      setIsTransferOpen(false);
      setRecipient('');
      setAmount('');
    }, 1500);
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
                <span className="text-slate-900 font-semibold">Finance & Payments</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniPay & Wallet</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Global Multi-Currency
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsTransferOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/20 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Money</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Balances Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Total Net Balance</span>
            <div className="text-3xl font-black text-slate-900 mt-2 tabular-nums">
              {FINANCE_DATA.balances.totalBalance}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold mt-2">
              <ArrowUpRight className="w-4 h-4" />
              <span>Available for withdrawal or instant spend</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Monthly Inflow (Income)</span>
            <div className="text-3xl font-black text-emerald-600 mt-2 tabular-nums">
              {FINANCE_DATA.balances.monthlyIncome}
            </div>
            <div className="text-xs text-slate-400 mt-2">
              From salary, marketplace sales, and gigs
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Monthly Outflow (Expenses)</span>
            <div className="text-3xl font-black text-slate-700 mt-2 tabular-nums">
              {FINANCE_DATA.balances.monthlyExpenses}
            </div>
            <div className="text-xs text-slate-400 mt-2">
              Shopping, subscriptions, and travel bookings
            </div>
          </div>
        </div>

        {/* Charts & Cards Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Income vs Expenses Bar Chart */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Income vs. Expenses Flow</h3>
                <p className="text-xs text-slate-500">Monthly cash balance analytics</p>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Income
                </span>
                <span className="flex items-center gap-1 text-slate-400 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                  Expenses
                </span>
              </div>
            </div>

            {/* Simulated Clean Chart Bars */}
            <div className="h-60 flex items-end justify-between gap-4 pt-4 border-b border-slate-100">
              {FINANCE_DATA.monthlyFlow.map((flow) => {
                const incHeight = Math.round((flow.income / 3600) * 100);
                const expHeight = Math.round((flow.expenses / 3600) * 100);

                return (
                  <div key={flow.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <div className="w-full flex items-end justify-center gap-1.5 h-44">
                      {/* Income */}
                      <div
                        style={{ height: `${incHeight}%` }}
                        className="w-1/2 bg-emerald-500 rounded-t-md hover:bg-emerald-600 transition-colors"
                      />
                      {/* Expenses */}
                      <div
                        style={{ height: `${expHeight}%` }}
                        className="w-1/2 bg-slate-300 rounded-t-md hover:bg-slate-400 transition-colors"
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-500">{flow.month}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-500">
              <span>Savings Rate: <strong className="text-emerald-600">{FINANCE_DATA.balances.savingsRate}</strong></span>
              <span>Primary Currency: <strong>USD ($)</strong></span>
            </div>
          </div>

          {/* Payment Cards Stack */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold text-slate-900">Virtual & Physical Cards</h3>
            
            {FINANCE_DATA.cards.map((card, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl text-white shadow-lg space-y-4 relative overflow-hidden ${
                  idx === 0 
                    ? 'bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900' 
                    : 'bg-gradient-to-tr from-emerald-800 via-teal-900 to-slate-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/80">
                    {card.type}
                  </span>
                  <CreditCard className="w-5 h-5 text-white/80" />
                </div>

                <div className="py-2">
                  <div className="text-lg font-mono tracking-wider">{card.number}</div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/80">
                  <div>
                    <span className="text-[10px] uppercase text-white/60 block">Cardholder</span>
                    <span className="font-semibold text-white">{card.holder}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/60 block">Expires</span>
                    <span className="font-semibold text-white">{card.expiry}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Recent Transactions List */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Recent Transactions</h3>
              <p className="text-xs text-slate-500">Real-time ledger updates across all OmniHub activities</p>
            </div>
            <button className="text-xs font-semibold text-emerald-600 hover:underline">
              Download Statement (.CSV)
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {transfers.map((tx) => (
              <div key={tx.id} className="py-3 flex items-center justify-between hover:bg-slate-50/60 px-2 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    tx.isCredit ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {tx.isCredit ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">{tx.title}</h5>
                    <span className="text-[10px] text-slate-400">{tx.category} · {tx.date}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`text-xs font-bold tabular-nums ${
                    tx.isCredit ? 'text-emerald-600' : 'text-slate-900'
                  }`}>
                    {tx.amount}
                  </div>
                  <span className="text-[10px] text-slate-400">Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Send Money Modal */}
      {isTransferOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-base">Send Instant Money</h4>
              <button onClick={() => setIsTransferOpen(false)} className="text-slate-400 hover:text-slate-600 text-xs">Cancel</button>
            </div>

            {transferSuccess ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-sm text-slate-900">Transfer Completed!</h5>
                <p className="text-xs text-slate-500">Funds transferred instantly with zero network fees.</p>
              </div>
            ) : (
              <form onSubmit={handleSendMoney} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Recipient Email or @handle</label>
                  <input
                    type="text"
                    required
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Amount ($ USD)</label>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="150.00"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors"
                >
                  Confirm Transfer
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
