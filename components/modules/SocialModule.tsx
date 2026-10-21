'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, 
  Heart, 
  Share2, 
  Bookmark, 
  Image as ImageIcon, 
  Smile, 
  Send, 
  Plus, 
  Check, 
  MoreHorizontal,
  TrendingUp,
  UserPlus,
  Home,
  Compass,
  Bell,
  User
} from 'lucide-react';
import { SOCIAL_DATA } from '@/data/modulesData';

interface SocialModuleProps {
  onBackToHome: () => void;
}

export const SocialModule: React.FC<SocialModuleProps> = ({ onBackToHome }) => {
  const [posts, setPosts] = useState(SOCIAL_DATA.posts);
  const [newPostText, setNewPostText] = useState('');
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<string, boolean>>({});
  const [followedUsers, setFollowedUsers] = useState<Record<string, boolean>>({});

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost = {
      id: `p-${Date.now()}`,
      author: 'Ashiq Islam',
      handle: '@ashiqdev',
      avatar: 'AI',
      timestamp: 'Just now',
      content: newPostText,
      tags: ['#OmniHub', '#SuperPlatform'],
      likes: 1,
      comments: 0,
      shares: 0,
      mediaLabel: 'OmniHub Live Post',
    };

    setPosts([newPost, ...posts]);
    setNewPostText('');
  };

  const toggleLike = (id: string) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFollow = (handle: string) => {
    setFollowedUsers(prev => ({ ...prev, [handle]: !prev[handle] }));
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
                <span className="text-slate-900 font-semibold">Social & Communication</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>OmniFeed</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
                  Global Social Network
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3.5 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-xs font-bold shadow-xs">
                + Create Story
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Social Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-purple-700 bg-purple-50">
                <Home className="w-4 h-4 text-purple-600" />
                <span>Home Feed</span>
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <Compass className="w-4 h-4 text-slate-500" />
                <span>Explore Topics</span>
              </button>

              <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-slate-500" />
                  <span>Direct Messages</span>
                </div>
                <span className="bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">3</span>
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <Bell className="w-4 h-4 text-slate-500" />
                <span>Notifications</span>
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <Bookmark className="w-4 h-4 text-slate-500" />
                <span>Saved Bookmarks</span>
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <User className="w-4 h-4 text-slate-500" />
                <span>My Profile</span>
              </button>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('post-composer');
                    el?.focus();
                  }}
                  className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Post</span>
                </button>
              </div>
            </div>
          </div>

          {/* Central Feed */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Stories Carousel */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs">
              <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                {SOCIAL_DATA.stories.map((story) => (
                  <div key={story.id} className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group">
                    <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 group-hover:scale-105 transition-transform">
                      <div className="w-full h-full rounded-full bg-white p-0.5 flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                          {story.avatar}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-700 truncate max-w-[64px]">
                      {story.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Post Composer */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  AI
                </div>
                <textarea
                  id="post-composer"
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                  placeholder="What's happening in your digital world today?"
                  rows={2}
                  className="w-full text-xs text-slate-900 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-500">
                  <button type="button" className="p-1.5 rounded-lg hover:bg-slate-100 text-purple-600">
                    <ImageIcon className="w-4 h-4" />
                  </button>
                  <button type="button" className="p-1.5 rounded-lg hover:bg-slate-100 text-amber-500">
                    <Smile className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleCreatePost}
                  disabled={!newPostText.trim()}
                  className="px-4 py-1.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publish Post</span>
                </button>
              </div>
            </div>

            {/* Feed Posts */}
            <div className="space-y-4">
              {posts.map((post) => {
                const isLiked = likedPosts[post.id];
                const isBookmarked = bookmarkedPosts[post.id];

                return (
                  <div key={post.id} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
                    
                    {/* Author header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                          {post.avatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-slate-900 text-xs">{post.author}</h4>
                            <span className="text-[10px] text-slate-400">{post.handle}</span>
                          </div>
                          <span className="text-[10px] text-slate-400">{post.timestamp}</span>
                        </div>
                      </div>

                      <button className="text-slate-400 hover:text-slate-600 p-1">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Content */}
                    <p className="text-xs text-slate-800 leading-relaxed">
                      {post.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-semibold text-purple-600 hover:underline cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Media Preview container */}
                    <div className="h-44 rounded-xl bg-gradient-to-tr from-purple-900 via-indigo-950 to-slate-900 p-4 flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-2 border border-white/20">
                        <MessageSquare className="w-6 h-6 text-purple-300" />
                      </div>
                      <span className="text-xs font-bold">{post.mediaLabel}</span>
                      <span className="text-[10px] text-slate-300">OmniHub Network Post Attachment</span>
                    </div>

                    {/* Interaction Buttons Bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors ${
                          isLiked ? 'text-rose-600 bg-rose-50 font-bold' : 'hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                        <span>{isLiked ? post.likes + 1 : post.likes}</span>
                      </button>

                      <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.comments} Comments</span>
                      </button>

                      <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>{post.shares} Shares</span>
                      </button>

                      <button
                        onClick={() => toggleBookmark(post.id)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isBookmarked ? 'text-purple-600 bg-purple-50' : 'hover:bg-slate-50'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-purple-600' : ''}`} />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Sidebar: Trending Topics & Suggested People */}
          <div className="lg:col-span-3 space-y-5">
            
            {/* Trending */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                <span>Trending Topics</span>
              </h3>

              <div className="space-y-2.5 pt-1">
                {SOCIAL_DATA.trending.map((trend) => (
                  <div key={trend.tag} className="flex flex-col cursor-pointer group">
                    <span className="font-bold text-xs text-slate-900 group-hover:text-purple-600 transition-colors">
                      {trend.tag}
                    </span>
                    <span className="text-[10px] text-slate-400">{trend.posts}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested People */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Suggested People
              </h3>

              <div className="space-y-3 pt-1">
                {SOCIAL_DATA.suggestedUsers.map((user) => {
                  const isFollowing = followedUsers[user.handle];

                  return (
                    <div key={user.handle} className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xs text-slate-900">{user.name}</div>
                        <div className="text-[10px] text-slate-400">{user.role}</div>
                      </div>

                      <button
                        onClick={() => toggleFollow(user.handle)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          isFollowing
                            ? 'bg-slate-100 text-slate-600'
                            : 'bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white'
                        }`}
                      >
                        {isFollowing ? 'Following' : 'Follow'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
