'use client';

import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Star, 
  Heart, 
  Check, 
  ChevronRight, 
  Tag, 
  Sparkles,
  SlidersHorizontal,
  Package,
  ShieldCheck
} from 'lucide-react';
import { ECOMMERCE_DATA } from '@/data/modulesData';

interface EcommerceModuleProps {
  onBackToHome: () => void;
}

export const EcommerceModule: React.FC<EcommerceModuleProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [cartCount, setCartCount] = useState(2);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = ECOMMERCE_DATA.products.filter(p => {
    const matchesCategory = selectedCategory === 'All Categories' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (id: string) => {
    setCartCount(prev => prev + 1);
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Top Module Subheader */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Breadcrumb & Title */}
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <button onClick={onBackToHome} className="hover:text-blue-600 transition-colors">OmniHub</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">E-commerce Marketplace</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniShop</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700">
                  Direct Verified Stores
                </span>
              </h1>
            </div>

            {/* In-module Search & Cart */}
            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, brands..."
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Cart Button */}
              <button className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart ({cartCount})</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Category Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-slate-500" />
                  <span>Categories</span>
                </h3>
              </div>

              <ul className="space-y-1">
                {ECOMMERCE_DATA.categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        selectedCategory === cat
                          ? 'bg-orange-50 text-orange-700 font-bold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span>{cat}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Price Filter info */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-900">Price Range</h4>
                <div className="flex items-center gap-2 text-xs">
                  <input type="text" placeholder="$10" className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-center" />
                  <span className="text-slate-400">-</span>
                  <input type="text" placeholder="$500" className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-center" />
                </div>
              </div>

              {/* Customer Guarantee */}
              <div className="mt-6 p-3.5 bg-orange-50/60 border border-orange-200/50 rounded-xl space-y-1 text-slate-700">
                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-800">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                  <span>OmniBuyer Protection</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-tight">
                  30-day money-back guarantee with free doorstep returns.
                </p>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Promotional Banner */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white p-6 sm:p-8 shadow-md">
              <div className="max-w-md space-y-3 relative z-10">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-xs rounded-full text-xs font-semibold tracking-wide uppercase">
                  {ECOMMERCE_DATA.banner.title}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  {ECOMMERCE_DATA.banner.headline}
                </h2>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  {ECOMMERCE_DATA.banner.sub}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button className="px-5 py-2.5 bg-white text-slate-900 font-bold text-xs rounded-xl shadow-md hover:bg-blue-50 transition-colors">
                    Shop Now
                  </button>
                  <span className="text-xs font-mono bg-black/25 px-3 py-2 rounded-xl border border-white/20">
                    CODE: {ECOMMERCE_DATA.banner.code}
                  </span>
                </div>
              </div>

              {/* Decorative side illustration representation */}
              <div className="hidden sm:flex absolute right-6 bottom-4 items-center justify-center opacity-90">
                <div className="w-44 h-44 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 flex flex-col items-center justify-center text-center shadow-2xl">
                  <Package className="w-16 h-16 text-white mb-2" />
                  <span className="text-xs font-bold">Express Air Shipping</span>
                  <span className="text-[10px] text-blue-200">Delivered within 48h</span>
                </div>
              </div>
            </div>

            {/* Products Header Bar */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Featured Products</h3>
                <p className="text-xs text-slate-500">Showing {filteredProducts.length} verified products in {selectedCategory}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Sort by:</span>
                <select className="bg-white border border-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500">
                  <option>Featured & Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Customer Rating</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-orange-200 transition-all p-4 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Container */}
                    <div className="h-44 rounded-xl bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-100 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-orange-600 text-white font-bold text-[10px] rounded-md shadow-xs">
                        {product.discount}
                      </span>
                      <button className="absolute top-2.5 right-2.5 p-1.5 bg-white/80 hover:bg-white rounded-full text-slate-400 hover:text-rose-500 transition-colors shadow-xs">
                        <Heart className="w-3.5 h-3.5" />
                      </button>

                      {/* Product Graphic Placeholder */}
                      <div className="flex flex-col items-center justify-center text-slate-400 space-y-2">
                        <Package className="w-12 h-12 text-slate-300" />
                        <span className="text-[11px] font-mono text-slate-400">{product.color}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="pt-3.5 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>{product.category}</span>
                        <span className="text-emerald-600 font-medium">{product.stock}</span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-sm line-clamp-1 group-hover:text-orange-600 transition-colors">
                        {product.name}
                      </h4>

                      <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-slate-400 font-normal">({product.sales} sold)</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Add to Cart button */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-base font-black text-slate-900 tabular-nums">
                        ${product.price.toFixed(2)}
                      </div>
                      <div className="text-xs text-slate-400 line-through tabular-nums">
                        ${product.originalPrice.toFixed(2)}
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        addedItem === product.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-900 hover:bg-orange-600 text-white shadow-xs'
                      }`}
                    >
                      {addedItem === product.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
