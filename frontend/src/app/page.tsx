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
  Play,
  Square,
  Sparkles,
  Command,
  Smartphone,
  Video,
  Layers,
  Zap,
  Globe,
  Gauge
} from "lucide-react";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-[#eaeee3] p-3 md:p-6 lg:p-8 flex items-center justify-center font-sans">
      {/* Main App Container */}
      <div className="w-full max-w-[1440px] bg-[#f8faf5] rounded-[36px] shadow-2xl border border-[#283618]/10 overflow-hidden flex flex-col lg:flex-row">
        
        {/* SIDEBAR */}
        <aside className="w-full lg:w-[260px] bg-[#fbfcf9] border-b lg:border-b-0 lg:border-r border-[#283618]/10 p-6 flex flex-col justify-between shrink-0">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 px-2 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#606c38] flex items-center justify-center text-[#fefae0] shadow-sm">
                {/* Custom donezo-like rounded target/spiral icon */}
                <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7a5 5 0 0 1 5 5c0 3-2 5-5 5s-5-2-5-5a3 3 0 0 1 3-3" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#283618]">Donezo</span>
            </div>

            {/* Menu Section */}
            <div className="space-y-6">
              <div>
                <p className="text-[11px] font-semibold text-[#606c38]/70 uppercase tracking-wider px-3 mb-3">Menu</p>
                <nav className="space-y-1.5">
                  <button
                    onClick={() => setActiveNav("Dashboard")}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                      activeNav === "Dashboard"
                        ? "bg-[#606c38] text-[#fefae0] shadow-sm"
                        : "text-[#283618]/80 hover:bg-[#283618]/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <LayoutDashboard className="w-4 h-4" />
                      <span>Dashboard</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveNav("Tasks")}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                      activeNav === "Tasks"
                        ? "bg-[#606c38] text-[#fefae0] shadow-sm"
                        : "text-[#283618]/80 hover:bg-[#283618]/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CheckSquare className="w-4 h-4" />
                      <span>Tasks</span>
                    </div>
                    <span className="text-[11px] font-bold bg-[#dda15e] text-[#283618] px-1.5 py-0.5 rounded-md leading-tight">
                      12+
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveNav("Calendar")}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                      activeNav === "Calendar"
                        ? "bg-[#606c38] text-[#fefae0] shadow-sm"
                        : "text-[#283618]/70 hover:bg-[#283618]/5 hover:text-[#283618]"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Calendar</span>
                  </button>

                  <button
                    onClick={() => setActiveNav("Analytics")}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                      activeNav === "Analytics"
                        ? "bg-[#606c38] text-[#fefae0] shadow-sm"
                        : "text-[#283618]/70 hover:bg-[#283618]/5 hover:text-[#283618]"
                    }`}
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>Analytics</span>
                  </button>

                  <button
                    onClick={() => setActiveNav("Team")}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                      activeNav === "Team"
                        ? "bg-[#606c38] text-[#fefae0] shadow-sm"
                        : "text-[#283618]/70 hover:bg-[#283618]/5 hover:text-[#283618]"
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>Team</span>
                  </button>
                </nav>
              </div>

              {/* General Section */}
              <div>
                <p className="text-[11px] font-semibold text-[#606c38]/70 uppercase tracking-wider px-3 mb-3">General</p>
                <nav className="space-y-1.5">
                  <button className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium text-[#283618]/70 hover:bg-[#283618]/5 hover:text-[#283618] transition-all">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium text-[#283618]/70 hover:bg-[#283618]/5 hover:text-[#283618] transition-all">
                    <HelpCircle className="w-4 h-4" />
                    <span>Help</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium text-[#283618]/70 hover:bg-[#283618]/5 hover:text-[#283618] transition-all">
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Download App Promo Card */}
          <div className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#283618] to-[#1a2310] p-4 text-[#fefae0] shadow-md">
            {/* Background decorative curved lines */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,20 50,50 T100,50" stroke="#fefae0" strokeWidth="2" fill="none" />
                <path d="M0,70 Q25,40 50,70 T100,70" stroke="#dda15e" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="w-7 h-7 rounded-full bg-[#fefae0]/10 flex items-center justify-center mb-3">
                <Smartphone className="w-3.5 h-3.5 text-[#dda15e]" />
              </div>
              <h4 className="text-sm font-bold leading-tight">Download our Mobile App</h4>
              <p className="text-[11px] text-[#fefae0]/70 mt-1 mb-3">Get easy in another way</p>
              <button className="w-full py-2 px-3 bg-[#606c38] hover:bg-[#606c38]/90 text-[#fefae0] text-xs font-semibold rounded-xl transition-all shadow-sm">
                Download
              </button>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 p-6 lg:p-8 flex flex-col gap-6 overflow-y-auto max-h-[100vh]">
          {/* Top Bar: Search, Notifications, Profile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#283618]/50" />
              <input
                type="text"
                placeholder="Search task"
                className="w-full bg-[#f1f4eb] border border-[#283618]/10 text-sm rounded-full pl-10 pr-12 py-2.5 text-[#283618] placeholder:text-[#283618]/45 focus:outline-none focus:ring-2 focus:ring-[#606c38]"
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-[11px] text-[#283618]/50 bg-[#e5eadb] px-1.5 py-0.5 rounded border border-[#283618]/10 font-mono">
                <Command className="w-3 h-3" />
                <span>F</span>
              </div>
            </div>

            {/* Right icons + User badge */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button className="w-10 h-10 rounded-full bg-[#f1f4eb] hover:bg-[#e6ecdc] flex items-center justify-center text-[#283618]/70 border border-[#283618]/10 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#f1f4eb] hover:bg-[#e6ecdc] flex items-center justify-center text-[#283618]/70 border border-[#283618]/10 transition-colors relative">
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 rounded-full bg-[#bc6c25] absolute top-2.5 right-2.5 ring-2 ring-[#f8faf5]" />
              </button>

              <div className="flex items-center gap-3 pl-2">
                <div className="w-10 h-10 rounded-full bg-[#dda15e] border-2 border-[#fefae0] overflow-hidden flex items-center justify-center text-sm font-bold text-[#283618] shadow-sm">
                  {/* Avatar thumbnail */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Totok Michael"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span>TM</span>
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-bold text-[#283618] leading-tight">Totok Michael</p>
                  <p className="text-xs text-[#283618]/60">tmichael20@mail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header Title & Action Buttons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
            <div>
              <h1 className="text-3xl font-extrabold text-[#283618] tracking-tight">Dashboard</h1>
              <p className="text-sm text-[#283618]/70 mt-1">
                Plan, prioritize, and accomplish your tasks with ease.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-[#283618] hover:bg-[#283618]/90 text-[#fefae0] px-4 py-2.5 rounded-full text-xs font-semibold shadow-sm transition-all">
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
              <button className="flex items-center gap-2 bg-[#f8faf5] hover:bg-[#eef2e6] text-[#283618] border border-[#283618]/20 px-4 py-2.5 rounded-full text-xs font-semibold transition-all">
                <span>Import Data</span>
              </button>
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Card 1: Highlighted (Total Projects) */}
            <div className="bg-[#283618] text-[#fefae0] rounded-3xl p-5 flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-[#fefae0]/80">Total Projects</span>
                <div className="w-8 h-8 rounded-full bg-[#fefae0]/15 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-[#fefae0]" />
                </div>
              </div>
              <div className="my-3">
                <span className="text-4xl font-extrabold tracking-tight">24</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#fefae0]/80">
                <span className="bg-[#606c38] text-[#fefae0] px-1.5 py-0.5 rounded font-medium">5+</span>
                <span>Increased from last month</span>
              </div>
            </div>

            {/* Card 2: Ended Projects */}
            <div className="bg-[#fbfcf9] border border-[#283618]/10 rounded-3xl p-5 flex flex-col justify-between shadow-sm">
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-[#283618]/70">Ended Projects</span>
                <div className="w-8 h-8 rounded-full border border-[#283618]/15 flex items-center justify-center text-[#283618]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="my-3">
                <span className="text-4xl font-extrabold text-[#283618] tracking-tight">10</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#283618]/60">
                <span className="border border-[#283618]/20 text-[#283618] px-1.5 py-0.5 rounded font-medium">0+</span>
                <span>Increased from last month</span>
              </div>
            </div>

            {/* Card 3: Running Projects */}
            <div className="bg-[#fbfcf9] border border-[#283618]/10 rounded-3xl p-5 flex flex-col justify-between shadow-sm">
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-[#283618]/70">Running Projects</span>
                <div className="w-8 h-8 rounded-full border border-[#283618]/15 flex items-center justify-center text-[#283618]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="my-3">
                <span className="text-4xl font-extrabold text-[#283618] tracking-tight">12</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#283618]/60">
                <span className="border border-[#283618]/20 text-[#283618] px-1.5 py-0.5 rounded font-medium">2+</span>
                <span>Increased from last month</span>
              </div>
            </div>

            {/* Card 4: Pending Project */}
            <div className="bg-[#fbfcf9] border border-[#283618]/10 rounded-3xl p-5 flex flex-col justify-between shadow-sm">
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-[#283618]/70">Pending Project</span>
                <div className="w-8 h-8 rounded-full border border-[#283618]/15 flex items-center justify-center text-[#283618]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="my-3">
                <span className="text-4xl font-extrabold text-[#283618] tracking-tight">2</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#283618]/60">
                <span>On Discuss</span>
              </div>
            </div>
          </div>

          {/* Grid Middle Row: Analytics + Reminders + Projects List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Project Analytics (4 cols) */}
            <div className="lg:col-span-4 bg-[#fbfcf9] border border-[#283618]/10 rounded-3xl p-5 flex flex-col justify-between shadow-sm">
              <h3 className="text-sm font-bold text-[#283618]">Project Analytics</h3>
              
              {/* Bar chart mockup */}
              <div className="h-44 flex items-end justify-between px-2 pt-6 pb-2 gap-2">
                {[
                  { day: "S", h: "45%", pattern: "hatched" },
                  { day: "M", h: "75%", pattern: "solid-olive" },
                  { day: "T", h: "60%", pattern: "solid-light", badge: "74%" },
                  { day: "W", h: "90%", pattern: "solid-forest" },
                  { day: "T", h: "65%", pattern: "hatched" },
                  { day: "F", h: "50%", pattern: "hatched" },
                  { day: "S", h: "55%", pattern: "hatched" },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 flex-1 h-full justify-end relative">
                    {bar.badge && (
                      <span className="absolute -top-1 bg-[#283618] text-[#fefae0] text-[9px] font-bold px-1 py-0.5 rounded shadow">
                        {bar.badge}
                      </span>
                    )}
                    <div
                      style={{ height: bar.h }}
                      className={`w-full max-w-[32px] rounded-full transition-all ${
                        bar.pattern === "solid-forest"
                          ? "bg-[#283618]"
                          : bar.pattern === "solid-olive"
                          ? "bg-[#606c38]"
                          : bar.pattern === "solid-light"
                          ? "bg-[#dda15e]"
                          : "bg-[#e5e9de] border-2 border-dashed border-[#606c38]/40"
                      }`}
                    />
                    <span className="text-[11px] font-medium text-[#283618]/50">{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminders Card (4 cols) */}
            <div className="lg:col-span-4 bg-[#fbfcf9] border border-[#283618]/10 rounded-3xl p-5 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-medium text-[#283618]/60">Reminders</span>
                <h3 className="text-lg font-bold text-[#283618] mt-2 leading-snug">
                  Meeting with Arc <br /> Company
                </h3>
                <p className="text-xs text-[#283618]/50 mt-1">Time : 02.00 pm - 04.00 pm</p>
              </div>

              <div className="pt-6">
                <button className="w-full flex items-center justify-center gap-2 bg-[#283618] hover:bg-[#283618]/90 text-[#fefae0] py-3 px-4 rounded-2xl text-xs font-semibold shadow-sm transition-all">
                  <Video className="w-4 h-4 fill-current" />
                  <span>Start Meeting</span>
                </button>
              </div>
            </div>

            {/* Project Quick List (4 cols) */}
            <div className="lg:col-span-4 bg-[#fbfcf9] border border-[#283618]/10 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-[#283618]">Project</h3>
                <button className="flex items-center gap-1 text-[11px] font-semibold text-[#283618] border border-[#283618]/20 px-2.5 py-1 rounded-full hover:bg-[#283618]/5">
                  <Plus className="w-3 h-3" />
                  <span>New</span>
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { title: "Develop API Endpoints", date: "Due date: Nov 26, 2024", color: "text-[#606c38]", icon: Layers },
                  { title: "Onboarding Flow", date: "Due date: Nov 28, 2024", color: "text-[#283618]", icon: Globe },
                  { title: "Build Dashboard", date: "Due date: Nov 30, 2024", color: "text-[#dda15e]", icon: Sparkles },
                  { title: "Optimize Page Load", date: "Due date: Dec 5, 2024", color: "text-[#bc6c25]", icon: Zap },
                  { title: "Cross-Browser Testing", date: "Due date: Dec 6, 2024", color: "text-[#606c38]", icon: Gauge },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl bg-[#eef2e6] flex items-center justify-center ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#283618] truncate">{item.title}</p>
                        <p className="text-[10px] text-[#283618]/50">{item.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Grid Bottom Row: Team Collaboration + Project Progress + Time Tracker */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Team Collaboration (5 cols) */}
            <div className="lg:col-span-5 bg-[#fbfcf9] border border-[#283618]/10 rounded-3xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-[#283618]">Team Collaboration</h3>
                <button className="flex items-center gap-1 text-[11px] font-semibold text-[#283618] border border-[#283618]/20 px-2.5 py-1 rounded-full hover:bg-[#283618]/5">
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
                    badgeColor: "text-[#bc6c25] bg-[#dda15e]/20 border-[#dda15e]/30",
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
                    badgeColor: "text-[#bc6c25] bg-[#dda15e]/20 border-[#dda15e]/30",
                    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
                    initials: "DO"
                  },
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-[#dda15e]/30 border border-[#283618]/10 flex items-center justify-center text-xs font-bold text-[#283618] shrink-0 overflow-hidden">
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
                        <p className="text-xs font-bold text-[#283618] truncate leading-tight">{member.name}</p>
                        <p className="text-[10px] text-[#283618]/60 truncate">{member.task}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${member.badgeColor}`}>
                      {member.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Progress Gauge (3 cols) */}
            <div className="lg:col-span-3 bg-[#fbfcf9] border border-[#283618]/10 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
              <h3 className="text-sm font-bold text-[#283618]">Project Progress</h3>

              {/* Semi-circular gauge */}
              <div className="relative flex flex-col items-center justify-center my-2">
                <svg className="w-44 h-24 overflow-visible" viewBox="0 0 100 50">
                  {/* Background Arc */}
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#e4e8dc"
                    strokeWidth="12"
                    strokeDasharray="2 2"
                    strokeLinecap="round"
                  />
                  {/* Completed Arc segment */}
                  <path
                    d="M 10 50 A 40 40 0 0 1 45 12"
                    fill="none"
                    stroke="#606c38"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  {/* In-Progress segment */}
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
                  <p className="text-[10px] text-[#283618]/60 font-medium">Project Ended</p>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-3 pt-2 text-[10px] text-[#283618]/70 font-medium">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#606c38]" />
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#283618]" />
                  <span>In Progress</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#dda15e]" />
                  <span>Pending</span>
                </div>
              </div>
            </div>

            {/* Time Tracker Widget (4 cols) */}
            <div className="lg:col-span-4 rounded-3xl p-5 shadow-md flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#1b2610] via-[#283618] to-[#121a0a] text-[#fefae0]">
              {/* Abstract 3D waves background */}
              <div className="absolute inset-0 opacity-25 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
                  <path d="M0,100 C40,40 60,160 100,100 C140,40 160,160 200,100 L200,200 L0,200 Z" fill="#606c38" />
                  <path d="M0,140 C50,80 70,180 120,130 C160,80 180,180 200,140 L200,200 L0,200 Z" fill="#dda15e" opacity="0.4" />
                </svg>
              </div>

              <div className="relative z-10">
                <span className="text-xs font-medium text-[#fefae0]/80">Time Tracker</span>
                <div className="my-5 text-center">
                  <span className="text-3xl sm:text-4xl font-mono font-bold tracking-wider text-[#fefae0]">
                    01:24:08
                  </span>
                </div>
              </div>

              {/* Pause & Stop controls */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                <button className="w-10 h-10 rounded-full bg-[#fefae0] text-[#283618] flex items-center justify-center hover:bg-[#dda15e] transition-colors shadow">
                  <div className="flex gap-1 items-center justify-center">
                    <span className="w-1 h-3.5 bg-[#283618] rounded-sm" />
                    <span className="w-1 h-3.5 bg-[#283618] rounded-sm" />
                  </div>
                </button>
                <button className="w-10 h-10 rounded-full bg-[#bc6c25] hover:bg-[#bc6c25]/90 text-[#fefae0] flex items-center justify-center transition-colors shadow">
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
