"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Search,
  Mail,
  Bell,
  ArrowUpRight,
  Plus,
  Square,
  Sparkles,
  Command,
  Smartphone,
  Video,
  Layers,
  Zap,
  Globe,
  Gauge,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Clock,
  MoreVertical
} from "lucide-react";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timerRunning, setTimerRunning] = useState(true);

  return (
    <div className="min-h-screen flex bg-[#f6f8f2] text-[#283618] font-sans antialiased">
      {/* MOBILE BACKDROP */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-[#283618]/30 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* FULL-HEIGHT EDGE-TO-EDGE SIDEBAR */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white/80 backdrop-blur-md border-r border-[#283618]/10 flex flex-col justify-between p-6 z-50 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo & Mobile Close */}
          <div className="flex items-center justify-between pb-6 border-b border-[#283618]/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#606c38] to-[#283618] flex items-center justify-center text-[#fefae0] shadow-md shadow-[#283618]/15">
                <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7a5 5 0 0 1 5 5c0 3-2 5-5 5s-5-2-5-5a3 3 0 0 1 3-3" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-[#283618]">Donezo</span>
                <span className="block text-[10px] font-semibold text-[#606c38] uppercase tracking-wider">Workspace</span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden p-2 rounded-xl text-[#283618]/70 hover:bg-[#283618]/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 space-y-6 flex-1">
            <div>
              <p className="text-[11px] font-bold text-[#606c38] uppercase tracking-wider px-3 mb-2.5">Menu</p>
              <nav className="space-y-1">
                <button
                  onClick={() => { setActiveNav("Dashboard"); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${activeNav === "Dashboard"
                      ? "bg-[#283618] text-[#fefae0] shadow-md shadow-[#283618]/20"
                      : "text-[#283618]/75 hover:bg-[#283618]/5 hover:text-[#283618]"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Dashboard</span>
                  </div>
                </button>

                <button
                  onClick={() => { setActiveNav("Tasks"); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${activeNav === "Tasks"
                      ? "bg-[#283618] text-[#fefae0] shadow-md shadow-[#283618]/20"
                      : "text-[#283618]/75 hover:bg-[#283618]/5 hover:text-[#283618]"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <CheckSquare className="w-4 h-4" />
                    <span>Tasks</span>
                  </div>
                  <span className="text-[11px] font-bold bg-[#dda15e] text-[#283618] px-2 py-0.5 rounded-md">
                    12+
                  </span>
                </button>

                <button
                  onClick={() => { setActiveNav("Calendar"); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all ${activeNav === "Calendar"
                      ? "bg-[#283618] text-[#fefae0] shadow-md shadow-[#283618]/20"
                      : "text-[#283618]/75 hover:bg-[#283618]/5 hover:text-[#283618]"
                    }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Calendar</span>
                </button>

                <button
                  onClick={() => { setActiveNav("Analytics"); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all ${activeNav === "Analytics"
                      ? "bg-[#283618] text-[#fefae0] shadow-md shadow-[#283618]/20"
                      : "text-[#283618]/75 hover:bg-[#283618]/5 hover:text-[#283618]"
                    }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Analytics</span>
                </button>

                <button
                  onClick={() => { setActiveNav("Team"); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all ${activeNav === "Team"
                      ? "bg-[#283618] text-[#fefae0] shadow-md shadow-[#283618]/20"
                      : "text-[#283618]/75 hover:bg-[#283618]/5 hover:text-[#283618]"
                    }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Team</span>
                </button>
              </nav>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#606c38] uppercase tracking-wider px-3 mb-2.5">General</p>
              <nav className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium text-[#283618]/75 hover:bg-[#283618]/5 hover:text-[#283618] transition-all">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium text-[#283618]/75 hover:bg-[#283618]/5 hover:text-[#283618] transition-all">
                  <HelpCircle className="w-4 h-4" />
                  <span>Help Center</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium text-[#bc6c25] hover:bg-[#bc6c25]/10 transition-all">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar Footer Widget */}
          <div className="pt-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#283618] to-[#16200d] p-4 text-[#fefae0] shadow-lg">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#606c38]/40 border border-[#fefae0]/15 flex items-center justify-center text-[#dda15e]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">Donezo Mobile</h4>
                  <p className="text-[10px] text-[#fefae0]/60">Sync in real-time</p>
                </div>
              </div>
              <button className="w-full mt-2 py-2 px-3 bg-[#606c38] hover:bg-[#606c38]/90 text-[#fefae0] text-xs font-semibold rounded-xl transition-all shadow-sm">
                Get App
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP NAVBAR (Sticky, edge-to-edge) */}
        <header className="sticky top-0 z-30 bg-[#f6f8f2]/90 backdrop-blur-md border-b border-[#283618]/10 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 max-w-xl">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-[#283618] hover:bg-[#283618]/10 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#283618]/40" />
              <input
                type="text"
                placeholder="Search tasks, projects, teammates..."
                className="w-full bg-white border border-[#283618]/10 text-sm rounded-2xl pl-10 pr-12 py-2 text-[#283618] placeholder:text-[#283618]/40 focus:outline-none focus:ring-2 focus:ring-[#606c38]/30 focus:border-[#606c38]"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 text-[10px] font-mono text-[#283618]/50 bg-[#f6f8f2] px-1.5 py-0.5 rounded border border-[#283618]/10">
                <Command className="w-3 h-3" />
                <span>F</span>
              </div>
            </div>
          </div>

          {/* Right Header Badges */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button className="w-10 h-10 rounded-2xl bg-white hover:bg-[#fbfbf8] flex items-center justify-center text-[#283618]/70 border border-[#283618]/10 transition-colors shadow-sm">
              <Mail className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-2xl bg-white hover:bg-[#fbfbf8] flex items-center justify-center text-[#283618]/70 border border-[#283618]/10 transition-colors shadow-sm relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-[#bc6c25] absolute top-2.5 right-2.5 ring-2 ring-white" />
            </button>

            <div className="h-7 w-[1px] bg-[#283618]/10 mx-1 hidden sm:block" />

            <div className="flex items-center gap-2.5 pl-1 cursor-pointer group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#dda15e] to-[#bc6c25] border-2 border-white overflow-hidden flex items-center justify-center font-bold text-sm text-[#283618] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                  alt="Totok Michael"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <span>TM</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-xs font-bold text-[#283618] leading-tight">Totok Michael</p>
                <p className="text-[11px] text-[#283618]/60">tmichael20@mail.com</p>
              </div>
              <ChevronDown className="w-4 h-4 text-[#283618]/40 group-hover:text-[#283618] transition-colors hidden md:block" />
            </div>
          </div>
        </header>

        {/* MAIN BODY CONTENT */}
        <main className="flex-1 px-4 sm:px-8 py-6 space-y-6 max-w-7xl w-full mx-auto">
          {/* Welcome & Primary Actions Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#283618] tracking-tight">Dashboard</h1>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#606c38]/15 text-[#606c38]">
                  Live Overview
                </span>
              </div>
              <p className="text-sm text-[#283618]/70">
                Plan, prioritize, and accomplish your tasks with ease.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button className="flex items-center gap-2 bg-white hover:bg-[#fbfbf8] text-[#283618] border border-[#283618]/15 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all shadow-sm">
                <span>Import Data</span>
              </button>
              <button className="flex items-center gap-2 bg-[#283618] hover:bg-[#34461f] text-[#fefae0] px-4 py-2.5 rounded-2xl text-xs font-semibold shadow-md shadow-[#283618]/20 transition-all">
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            </div>
          </div>

          {/* 4 Stat Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Card 1: Highlighted Active Status */}
            <div className="bg-[#283618] text-[#fefae0] rounded-3xl p-5 shadow-lg shadow-[#283618]/20 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-28 h-28 rounded-full bg-[#606c38]/30 blur-2xl group-hover:scale-125 transition-transform" />
              <div className="flex items-start justify-between relative z-10">
                <span className="text-xs font-semibold text-[#fefae0]/80">Total Projects</span>
                <div className="w-8 h-8 rounded-2xl bg-white/10 flex items-center justify-center text-[#fefae0]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="my-4 relative z-10">
                <span className="text-4xl font-extrabold tracking-tight">24</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#fefae0]/85 relative z-10">
                <span className="bg-[#606c38] text-[#fefae0] px-2 py-0.5 rounded-lg font-bold">5+</span>
                <span>Increased from last month</span>
              </div>
            </div>

            {/* Card 2: Ended Projects */}
            <div className="bg-white rounded-3xl p-5 border border-[#283618]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold text-[#283618]/70">Ended Projects</span>
                <div className="w-8 h-8 rounded-2xl bg-[#f6f8f2] border border-[#283618]/10 flex items-center justify-center text-[#283618]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="my-4">
                <span className="text-4xl font-extrabold text-[#283618] tracking-tight">10</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#283618]/60">
                <span className="border border-[#283618]/20 text-[#283618] px-2 py-0.5 rounded-lg font-bold">0+</span>
                <span>Increased from last month</span>
              </div>
            </div>

            {/* Card 3: Running Projects */}
            <div className="bg-white rounded-3xl p-5 border border-[#283618]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold text-[#283618]/70">Running Projects</span>
                <div className="w-8 h-8 rounded-2xl bg-[#f6f8f2] border border-[#283618]/10 flex items-center justify-center text-[#283618]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="my-4">
                <span className="text-4xl font-extrabold text-[#283618] tracking-tight">12</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#283618]/60">
                <span className="border border-[#283618]/20 text-[#283618] px-2 py-0.5 rounded-lg font-bold">2+</span>
                <span>Increased from last month</span>
              </div>
            </div>

            {/* Card 4: Pending Project */}
            <div className="bg-white rounded-3xl p-5 border border-[#283618]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold text-[#283618]/70">Pending Project</span>
                <div className="w-8 h-8 rounded-2xl bg-[#f6f8f2] border border-[#283618]/10 flex items-center justify-center text-[#283618]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="my-4">
                <span className="text-4xl font-extrabold text-[#283618] tracking-tight">2</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#bc6c25] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#dda15e] animate-pulse" />
                <span>On Discuss</span>
              </div>
            </div>
          </div>

          {/* Section 2: Analytics, Reminders, Project List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Project Analytics Graph (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-[#283618]/10 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-[#283618]">Project Analytics</h3>
                  <p className="text-[11px] text-[#283618]/50">Weekly team throughput</p>
                </div>
                <span className="text-xs font-semibold text-[#606c38] bg-[#606c38]/10 px-2 py-1 rounded-xl flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +14.8%
                </span>
              </div>

              {/* Bar Visualization */}
              <div className="h-44 flex items-end justify-between px-2 pt-6 pb-2 gap-2">
                {[
                  { day: "S", h: "45%", type: "hatched" },
                  { day: "M", h: "78%", type: "olive" },
                  { day: "T", h: "64%", type: "clay", badge: "74%" },
                  { day: "W", h: "92%", type: "forest" },
                  { day: "T", h: "65%", type: "hatched" },
                  { day: "F", h: "52%", type: "hatched" },
                  { day: "S", h: "58%", type: "hatched" },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 flex-1 h-full justify-end relative">
                    {bar.badge && (
                      <span className="absolute -top-2 bg-[#283618] text-[#fefae0] text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                        {bar.badge}
                      </span>
                    )}
                    <div
                      style={{ height: bar.h }}
                      className={`w-full max-w-[36px] rounded-2xl transition-all ${bar.type === "forest"
                          ? "bg-[#283618]"
                          : bar.type === "olive"
                            ? "bg-[#606c38]"
                            : bar.type === "clay"
                              ? "bg-[#dda15e]"
                              : "bg-[#eaf0e2] border-2 border-dashed border-[#606c38]/30"
                        }`}
                    />
                    <span className="text-xs font-semibold text-[#283618]/50">{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminders Card (3 cols) */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-[#283618]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#606c38]">Reminders</span>
                  <span className="w-2 h-2 rounded-full bg-[#dda15e]" />
                </div>
                <h3 className="text-lg font-bold text-[#283618] mt-3 leading-snug">
                  Meeting with Arc <br /> Company
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#283618]/60 mt-2">
                  <Clock className="w-3.5 h-3.5 text-[#606c38]" />
                  <span>02:00 pm - 04:00 pm</span>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full flex items-center justify-center gap-2 bg-[#283618] hover:bg-[#34461f] text-[#fefae0] py-3 px-4 rounded-2xl text-xs font-semibold shadow-md shadow-[#283618]/20 transition-all">
                  <Video className="w-4 h-4 fill-current" />
                  <span>Start Meeting</span>
                </button>
              </div>
            </div>

            {/* Quick Projects List (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#283618]/10 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-[#283618]">Active Projects</h3>
                <button className="flex items-center gap-1 text-[11px] font-bold text-[#283618] border border-[#283618]/15 px-2.5 py-1 rounded-xl hover:bg-[#283618]/5 transition-colors">
                  <Plus className="w-3 h-3" />
                  <span>New</span>
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { title: "Develop API Endpoints", date: "Due: Nov 26, 2024", color: "text-[#606c38] bg-[#606c38]/10", icon: Layers },
                  { title: "Onboarding Flow", date: "Due: Nov 28, 2024", color: "text-[#283618] bg-[#283618]/10", icon: Globe },
                  { title: "Build Dashboard", date: "Due: Nov 30, 2024", color: "text-[#dda15e] bg-[#dda15e]/20", icon: Sparkles },
                  { title: "Optimize Page Load", date: "Due: Dec 5, 2024", color: "text-[#bc6c25] bg-[#bc6c25]/10", icon: Zap },
                  { title: "Cross-Browser Testing", date: "Due: Dec 6, 2024", color: "text-[#606c38] bg-[#606c38]/10", icon: Gauge },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between gap-3 group">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <p className="text-xs font-bold text-[#283618] truncate group-hover:text-[#606c38] transition-colors">{item.title}</p>
                          <p className="text-[10px] text-[#283618]/50">{item.date}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#283618]/30 group-hover:text-[#283618] transition-colors shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 3: Team Collaboration, Project Progress, Time Tracker */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Team Collaboration (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-[#283618]/10 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-[#283618]">Team Collaboration</h3>
                  <p className="text-[11px] text-[#283618]/50">Active assignees & task state</p>
                </div>
                <button className="flex items-center gap-1 text-[11px] font-bold text-[#283618] border border-[#283618]/15 px-2.5 py-1 rounded-xl hover:bg-[#283618]/5 transition-colors">
                  <Plus className="w-3 h-3" />
                  <span>Add Member</span>
                </button>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    name: "Alexandra Deff",
                    task: "Working on Github Project Repository",
                    status: "Completed",
                    badgeColor: "text-[#606c38] bg-[#606c38]/10 border-[#606c38]/20",
                    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
                    initials: "AD"
                  },
                  {
                    name: "Edwin Adenike",
                    task: "Working on Integrate User Authentication System",
                    status: "In Progress",
                    badgeColor: "text-[#bc6c25] bg-[#dda15e]/25 border-[#dda15e]/40",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                    initials: "EA"
                  },
                  {
                    name: "Isaac Oluwatemilorun",
                    task: "Working on Develop Search and Filter Functionality",
                    status: "Pending",
                    badgeColor: "text-[#bc6c25] bg-[#bc6c25]/10 border-[#bc6c25]/20",
                    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
                    initials: "IO"
                  },
                  {
                    name: "David Oshodi",
                    task: "Working on Responsive Layout for Homepage",
                    status: "In Progress",
                    badgeColor: "text-[#bc6c25] bg-[#dda15e]/25 border-[#dda15e]/40",
                    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
                    initials: "DO"
                  },
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 p-1.5 rounded-2xl hover:bg-[#f6f8f2] transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-2xl bg-[#dda15e]/30 border border-[#283618]/10 flex items-center justify-center text-xs font-bold text-[#283618] shrink-0 overflow-hidden shadow-sm">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLElement).style.display = 'none';
                          }}
                        />
                        <span>{member.initials}</span>
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-bold text-[#283618] truncate">{member.name}</p>
                        <p className="text-[10px] text-[#283618]/60 truncate">{member.task}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${member.badgeColor}`}>
                      {member.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Progress Gauge (3 cols) */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-[#283618]/10 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#283618]">Project Progress</h3>
                <p className="text-[11px] text-[#283618]/50">Sprint completion metrics</p>
              </div>

              {/* Semi-circular gauge */}
              <div className="relative flex flex-col items-center justify-center my-4">
                <svg className="w-48 h-24 overflow-visible" viewBox="0 0 100 50">
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#edf2e4"
                    strokeWidth="12"
                    strokeDasharray="2 2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 50 A 40 40 0 0 1 45 12"
                    fill="none"
                    stroke="#606c38"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 45 12 A 40 40 0 0 1 65 17"
                    fill="none"
                    stroke="#283618"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="text-center -mt-6">
                  <span className="text-3xl font-extrabold text-[#283618]">41%</span>
                  <p className="text-[10px] text-[#283618]/60 font-semibold">Project Ended</p>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-3 pt-2 text-[10px] text-[#283618]/70 font-semibold">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#606c38]" />
                  <span>Done</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#283618]" />
                  <span>Running</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#dda15e]" />
                  <span>Pending</span>
                </div>
              </div>
            </div>

            {/* Time Tracker Card (4 cols) */}
            <div className="lg:col-span-4 rounded-3xl p-6 shadow-xl shadow-[#283618]/25 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#1c2712] via-[#283618] to-[#121b0a] text-[#fefae0]">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
                  <path d="M0,80 C50,20 80,180 130,90 C170,30 180,170 200,100 L200,200 L0,200 Z" fill="#606c38" />
                  <path d="M0,130 C60,60 80,190 140,120 C180,70 190,190 200,150 L200,200 L0,200 Z" fill="#dda15e" opacity="0.3" />
                </svg>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#fefae0]/80">Time Tracker</span>
                  <p className="text-[10px] text-[#fefae0]/50">Active sprint session</p>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-[#dda15e] border border-white/10 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dda15e] animate-ping" />
                  Recording
                </div>
              </div>

              <div className="my-6 text-center relative z-10">
                <span className="text-4xl font-mono font-extrabold tracking-wider text-[#fefae0] drop-shadow">
                  01:24:08
                </span>
              </div>

              {/* Controls */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className="w-11 h-11 rounded-2xl bg-[#fefae0] text-[#283618] flex items-center justify-center hover:bg-[#dda15e] transition-colors shadow-md"
                >
                  {timerRunning ? (
                    <div className="flex gap-1 items-center justify-center">
                      <span className="w-1 h-3.5 bg-[#283618] rounded-sm" />
                      <span className="w-1 h-3.5 bg-[#283618] rounded-sm" />
                    </div>
                  ) : (
                    <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-[#283618] ml-0.5" />
                  )}
                </button>
                <button className="w-11 h-11 rounded-2xl bg-[#bc6c25] hover:bg-[#a65d1d] text-[#fefae0] flex items-center justify-center transition-colors shadow-md">
                  <Square className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
