'use client';

import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Send, 
  PenTool, 
  Image as ImageIcon, 
  FileText, 
  Code, 
  Zap, 
  Star, 
  Check, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { AI_TOOLS_DATA } from '@/data/modulesData';

interface AiToolsModuleProps {
  onBackToHome: () => void;
}

export const AiToolsModule: React.FC<AiToolsModuleProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState('All AI Tools');
  const [userPrompt, setUserPrompt] = useState('');
  const [chatLog, setChatLog] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    { 
      sender: 'ai', 
      text: "Hello! I'm Omni AI, your universal assistant across shopping, jobs, code, and daily productivity. How can I help you today?" 
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const handleSendPrompt = (promptText?: string) => {
    const textToSend = promptText || userPrompt;
    if (!textToSend.trim()) return;

    setChatLog(prev => [...prev, { sender: 'user', text: textToSend }]);
    setUserPrompt('');
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      setChatLog(prev => [
        ...prev, 
        { 
          sender: 'ai', 
          text: `OmniHub Intelligence synthesized: Based on your prompt "${textToSend.slice(0, 36)}...", here is the structured strategy and high-fidelity output tailored to your workflow!` 
        }
      ]);
    }, 1000);
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
                <span className="text-slate-900 font-semibold">AI Tools & Assistant</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>Omni AI Studio</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                  Multimodal 3.5 Engine
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                ● 25,000 Free Credits
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Categories Sidebar */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
                AI Toolkits
              </h3>

              {AI_TOOLS_DATA.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-indigo-50 text-indigo-700 font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="p-4 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold">Pro AI Copilot</span>
              </div>
              <p className="text-[11px] text-indigo-100 leading-relaxed">
                Connect your codebase, CRM, and files for unlimited cross-service synthesis.
              </p>
              <button className="w-full py-1.5 bg-white text-indigo-900 font-bold text-xs rounded-xl hover:bg-indigo-50 transition-colors">
                Upgrade to Pro
              </button>
            </div>
          </div>

          {/* Center Interactive AI Chat & Prompt Console */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Omni AI Assistant Chat Box */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                  <Bot className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Hello! I&apos;m Omni AI
                  </h2>
                  <p className="text-xs text-slate-500">
                    Your smart multimodal digital assistant, always ready to generate, summarize, or analyze.
                  </p>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {chatLog.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'ai' && (
                      <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`text-xs p-3.5 rounded-2xl max-w-lg leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-indigo-600 text-white rounded-tr-xs'
                          : 'bg-slate-100 text-slate-800 rounded-tl-xs'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isThinking && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 italic">
                    <Sparkles className="w-4 h-4 animate-spin text-indigo-500" />
                    <span>Omni AI is thinking...</span>
                  </div>
                )}
              </div>

              {/* Suggested Prompt Chips */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Suggested Prompts:
                </span>
                <div className="flex flex-wrap gap-2">
                  {AI_TOOLS_DATA.prompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendPrompt(prompt)}
                      className="text-left text-[11px] text-slate-600 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 px-3 py-1.5 rounded-xl transition-all"
                    >
                      &ldquo;{prompt}&rdquo;
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Box */}
              <div className="relative">
                <input
                  type="text"
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt()}
                  placeholder="Ask anything, describe an image, or request code..."
                  className="w-full pl-4 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 shadow-inner"
                />
                <button
                  onClick={() => handleSendPrompt()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Popular AI Tools Catalog Cards */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-slate-900">Popular Dedicated AI Tools</h3>
                <span className="text-xs text-indigo-600 font-semibold cursor-pointer">Browse 40+ Toolkits →</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {AI_TOOLS_DATA.tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-lg hover:border-indigo-300 transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                          {tool.category}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {tool.badge}
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                        {tool.name}
                      </h4>

                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-amber-500 font-bold">★ {tool.rating}</span>
                      <button className="text-indigo-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Launch <ArrowRight className="w-3.5 h-3.5" />
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
