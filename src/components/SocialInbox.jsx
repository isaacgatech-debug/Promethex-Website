import React, { useState } from 'react'
import { Check, Clock3, Facebook, Instagram, MessageCircle, Send, X } from 'lucide-react'

const initialItems = [
  { id: 1, channel: 'Instagram', type: 'Message', name: 'Jordan Ellis', text: 'Hey, are you available to mix our new EP next month?', time: '12 min ago', status: 'Needs reply' },
  { id: 2, channel: 'Facebook', type: 'Scheduled post', name: 'Promethex Productions', text: 'New studio sessions are now open for October bookings.', time: 'Today · 2:00 PM', status: 'Awaiting approval' },
  { id: 3, channel: 'Facebook', type: 'Group draft', name: 'Local Music Creators', text: 'Sharing a behind-the-scenes look at our vocal booth.', time: 'Yesterday', status: 'Draft' },
]

export default function SocialInbox() {
  const [items, setItems] = useState(initialItems)
  const [selected, setSelected] = useState(items[0])
  const [reply, setReply] = useState('')
  const updateStatus = (id, status) => setItems((current) => current.map((item) => item.id === id ? { ...item, status } : item))
  const icon = selected.channel === 'Instagram' ? <Instagram size={18} /> : <Facebook size={18} />

  return <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.04]">
    <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-semibold">Social inbox</h2><p className="mt-1 text-xs text-white/40">Review messages, drafts, and scheduled posts before they go live.</p></div><div className="flex gap-2 text-xs"><span className="rounded-full bg-amber-400/10 px-3 py-1.5 text-amber-300">{items.filter((item) => item.status !== 'Approved').length} needs attention</span><span className="rounded-full bg-white/5 px-3 py-1.5 text-white/50">Meta not connected</span></div></div>
    <div className="grid min-h-[420px] md:grid-cols-[minmax(250px,.8fr)_1.2fr]">
      <div className="border-b border-white/10 md:border-b-0 md:border-r">{items.map((item) => <button key={item.id} onClick={() => setSelected(item)} className={`w-full border-b border-white/5 p-4 text-left transition hover:bg-white/5 ${selected.id === item.id ? 'bg-blue-500/10' : ''}`}><div className="flex items-center gap-2 text-xs text-white/45">{item.channel === 'Instagram' ? <Instagram size={14} className="text-pink-300" /> : <Facebook size={14} className="text-blue-300" />} {item.channel} · {item.type}<span className="ml-auto">{item.time}</span></div><div className="mt-2 text-sm font-medium">{item.name}</div><div className="mt-1 truncate text-xs text-white/45">{item.text}</div><span className="mt-3 inline-block rounded-full bg-white/5 px-2 py-1 text-[10px] text-white/50">{item.status}</span></button>)}</div>
      <div className="p-5"><div className="flex items-center gap-2 text-sm text-white/60">{icon} {selected.channel} <span className="text-white/30">·</span> {selected.type}</div><h3 className="mt-5 text-xl font-semibold">{selected.name}</h3><div className="mt-4 rounded-2xl rounded-tl-sm bg-white/[.06] p-4 text-sm leading-6 text-white/75">{selected.text}</div>{selected.type === 'Message' ? <><textarea value={reply} onChange={(event) => setReply(event.target.value)} placeholder="Write a reply..." className="mt-5 min-h-24 w-full resize-none rounded-xl border border-white/10 bg-black/10 p-3 text-sm outline-none placeholder:text-white/30 focus:border-blue-400/50" /><div className="mt-3 flex justify-end gap-2"><button onClick={() => updateStatus(selected.id, 'Replied')} className="flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium hover:bg-blue-400"><Send size={15} /> Send reply</button></div></> : <div className="mt-6 flex flex-wrap gap-2"><button onClick={() => updateStatus(selected.id, 'Approved')} className="flex items-center gap-2 rounded-xl bg-emerald-500/15 px-4 py-2.5 text-sm text-emerald-300 hover:bg-emerald-500/25"><Check size={15} /> Approve</button><button onClick={() => updateStatus(selected.id, 'Rejected')} className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-2.5 text-sm text-red-300 hover:bg-red-500/20"><X size={15} /> Reject</button><button onClick={() => updateStatus(selected.id, 'Scheduled')} className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/60 hover:bg-white/5"><Clock3 size={15} /> Schedule</button></div>}
      </div>
    </div>
  </section>
}
