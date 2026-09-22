import React, { useState } from 'react'
import {
  BarChart3, Bell, ChevronDown, FileText, Image, LayoutDashboard,
  Menu, MessageSquare, Music2, Plus, Search, Settings, Users, X,
} from 'lucide-react'
import SocialInbox from './components/SocialInbox'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Messages', icon: MessageSquare, count: 4 },
  { label: 'Social inbox', icon: MessageSquare, count: 3 },
  { label: 'Media library', icon: Image },
  { label: 'Discography', icon: Music2 },
  { label: 'Site content', icon: FileText },
]

const messages = [
  { name: 'Jordan Ellis', subject: 'Mixing inquiry for new EP', time: '12 min ago', initials: 'JE', color: 'bg-violet-500' },
  { name: 'Maya Thompson', subject: 'Studio booking — October 12', time: '1 hr ago', initials: 'MT', color: 'bg-cyan-500' },
  { name: 'Andre Wilson', subject: 'Vocal production availability', time: '3 hrs ago', initials: 'AW', color: 'bg-amber-500' },
]

function StatCard({ label, value, detail, icon: Icon, accent }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
    <div className="flex items-start justify-between"><span className="text-sm text-white/50">{label}</span><span className={`rounded-lg p-2 ${accent}`}><Icon size={17} /></span></div>
    <div className="mt-5 text-3xl font-semibold tracking-tight">{value}</div>
    <div className="mt-2 text-xs text-emerald-400">{detail}</div>
  </div>
}

export default function Admin() {
  const [active, setActive] = useState('Overview')
  const [mobileOpen, setMobileOpen] = useState(false)

  return <div className="min-h-screen bg-[#0b0d11] pb-20 text-white lg:flex lg:pb-0">
    <aside className={`${mobileOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-30 w-72 border-r border-white/10 bg-[#101319] p-5 transition-transform lg:static lg:translate-x-0`}>
      <div className="flex items-center justify-between px-2"><a href="/" className="flex items-center gap-3"><img src="/assets/logo-transparent.png" alt="Promethex" className="h-9 w-9 object-contain" /><span className="text-sm font-semibold tracking-[.18em]">PROMETHEX</span></a><button className="lg:hidden" onClick={() => setMobileOpen(false)}><X size={20} /></button></div>
      <div className="mt-12 px-3 text-[10px] font-semibold uppercase tracking-[.2em] text-white/30">Workspace</div>
      <nav className="mt-3 space-y-1">{navItems.map(({ label, icon: Icon, count }) => <button key={label} onClick={() => { setActive(label); setMobileOpen(false) }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${active === label ? 'bg-blue-500/15 text-blue-300' : 'text-white/55 hover:bg-white/5 hover:text-white'}`}><Icon size={18} /> <span>{label}</span>{count && <span className="ml-auto rounded-full bg-blue-500 px-2 py-0.5 text-[10px] font-bold text-white">{count}</span>}</button>)}</nav>
      <div className="mt-10 px-3 text-[10px] font-semibold uppercase tracking-[.2em] text-white/30">System</div>
      <button className="mt-3 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/55 hover:bg-white/5 hover:text-white"><Settings size={18} /> Settings</button>
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4"><div className="text-xs font-medium text-blue-200">Your site is live</div><div className="mt-1 text-xs text-white/45">promethexproductions.com</div><a href="/" className="mt-3 inline-block text-xs text-blue-300 hover:text-blue-200">View website →</a></div>
    </aside>
    {mobileOpen && <button aria-label="Close menu" className="fixed inset-0 z-20 bg-black/60 lg:hidden" onClick={() => setMobileOpen(false)} />}
    <main className="min-w-0 flex-1">
      <header className="flex h-20 items-center justify-between border-b border-white/10 px-5 sm:px-8"><div className="flex items-center gap-3 lg:hidden"><button onClick={() => setMobileOpen(true)}><Menu size={22} /></button><img src="/assets/logo-transparent.png" alt="Promethex sound wave logo" className="h-9 w-auto max-w-[124px] object-contain object-left" /></div><div className="relative hidden max-w-sm flex-1 sm:block"><Search className="absolute left-3 top-2.5 text-white/30" size={17} /><input placeholder="Search your site..." className="w-full rounded-xl border border-white/10 bg-white/[.04] py-2.5 pl-10 pr-4 text-sm outline-none placeholder:text-white/30 focus:border-blue-400/50" /></div><div className="ml-auto flex items-center gap-4"><button className="relative text-white/55 hover:text-white"><Bell size={19} /><span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-blue-400" /></button><div className="h-8 w-px bg-white/10" /><button className="flex items-center gap-3 text-sm"><span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-blue-400 to-violet-500 font-semibold">P</span><span className="hidden text-white/70 sm:block">Promethex Admin</span><ChevronDown size={15} className="text-white/40" /></button></div></header>
      <div className="mx-auto max-w-7xl p-5 sm:p-8"><div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm text-white/45">Monday, September 21, 2026</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">Good morning, Promethex</h1><p className="mt-2 text-sm text-white/45">Here’s what’s happening with your studio today.</p></div><button className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-400"><Plus size={17} /> New content</button></div>
        {active === 'Social inbox' ? <SocialInbox /> : active !== 'Overview' ? <div className="rounded-2xl border border-white/10 bg-white/[.04] p-10 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-500/15 text-blue-300"><FileText /></div><h2 className="mt-5 text-xl font-semibold">{active}</h2><p className="mx-auto mt-2 max-w-md text-sm text-white/45">This section is ready for your content management tools. The dashboard navigation is connected and ready to expand.</p></div> : <><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Site visits" value="2,847" detail="↑ 18.2% from last month" icon={BarChart3} accent="bg-blue-500/15 text-blue-300" /><StatCard label="New inquiries" value="24" detail="↑ 12.5% from last month" icon={MessageSquare} accent="bg-violet-500/15 text-violet-300" /><StatCard label="Media assets" value="138" detail="8 added this week" icon={Image} accent="bg-amber-500/15 text-amber-300" /><StatCard label="Published tracks" value="12" detail="2 drafts in progress" icon={Music2} accent="bg-emerald-500/15 text-emerald-300" /></div><div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]"><section className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><div className="flex items-center justify-between"><div><h2 className="font-semibold">Recent inquiries</h2><p className="mt-1 text-xs text-white/40">Messages from your contact form</p></div><button onClick={() => setActive('Messages')} className="text-xs text-blue-300 hover:text-blue-200">View all</button></div><div className="mt-5 space-y-1">{messages.map((message) => <div key={message.name} className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/5"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-semibold ${message.color}`}>{message.initials}</span><div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><span className="text-sm font-medium">{message.name}</span><span className="shrink-0 text-xs text-white/35">{message.time}</span></div><div className="mt-1 truncate text-xs text-white/45">{message.subject}</div></div></div>)}</div></section><section className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><h2 className="font-semibold">Quick actions</h2><p className="mt-1 text-xs text-white/40">Manage your website</p><div className="mt-5 grid grid-cols-2 gap-3"><button onClick={() => setActive('Media library')} className="rounded-xl border border-white/10 p-4 text-left hover:border-blue-400/40 hover:bg-blue-500/5"><Image size={19} className="text-blue-300" /><span className="mt-3 block text-sm">Upload media</span></button><button onClick={() => setActive('Discography')} className="rounded-xl border border-white/10 p-4 text-left hover:border-blue-400/40 hover:bg-blue-500/5"><Music2 size={19} className="text-violet-300" /><span className="mt-3 block text-sm">Add a track</span></button><button onClick={() => setActive('Site content')} className="rounded-xl border border-white/10 p-4 text-left hover:border-blue-400/40 hover:bg-blue-500/5"><FileText size={19} className="text-amber-300" /><span className="mt-3 block text-sm">Edit content</span></button><button onClick={() => setActive('Messages')} className="rounded-xl border border-white/10 p-4 text-left hover:border-blue-400/40 hover:bg-blue-500/5"><Users size={19} className="text-emerald-300" /><span className="mt-3 block text-sm">View inquiries</span></button></div></section></div></>}
      </div>
    </main>
    <nav className="fixed bottom-0 left-0 right-0 z-20 grid grid-cols-5 border-t border-white/10 bg-[#101319]/95 px-1 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      {navItems.map(({ label, icon: Icon, count }) => <button key={label} onClick={() => setActive(label)} className={`relative flex min-h-16 flex-col items-center justify-center gap-1 text-[10px] ${active === label ? 'text-blue-300' : 'text-white/40'}`}><Icon size={19} />{label === 'Media library' ? 'Media' : label === 'Site content' ? 'Content' : label}{count && <span className="absolute right-3 top-2 rounded-full bg-blue-500 px-1.5 text-[9px] font-bold text-white">{count}</span>}</button>)}
    </nav>
  </div>
}
