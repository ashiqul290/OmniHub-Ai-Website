'use client';

import React, { useState } from 'react';
import { 
  Send, 
  Check, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github, 
  ArrowUpRight,
  ShieldCheck,
  Heart
} from 'lucide-react';

interface FooterProps {
  onSelectView: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-black text-lg">Ω</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                OmniHub
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              OmniHub is an all-in-one super platform that connects people, businesses, and essential online services in one place. One account. Multiple roles. Endless possibilities.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#facebook" 
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#twitter" 
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-sky-500 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#linkedin" 
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-blue-700 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#instagram" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-pink-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#github" 
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-purple-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onSelectView('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView('ecommerce')} className="hover:text-white transition-colors">
                  Explore Marketplace
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView('ui-kit')} className="hover:text-white transition-colors">
                  Shared UI Components
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView('mobile')} className="hover:text-white transition-colors">
                  Mobile Preview
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About OmniHub
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Support & Trust</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#help" className="hover:text-white transition-colors">
                  Help Center & FAQs
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Security & Encryption
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Subscribe</h4>
            <p className="text-xs text-slate-400">
              Get the latest updates, deals, and platform releases directly to your inbox.
            </p>
            
            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-700/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are subscribed to updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-xs rounded-lg transition-all shadow-sm shadow-blue-500/20"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 OmniHub. All rights reserved. Designed for Google AI Studio.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Bank-Grade Encryption</span>
            </span>
            <span>One Account. 12 Services.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
