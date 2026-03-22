import React, { useRef } from 'react'
import { Music, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const tracks = [
  {
    title: 'Song Title',
    artist: 'Artist Name',
    role: 'Producer',
    embedUrl: null,
    placeholder: true,
  },
  {
    title: 'Song Title',
    artist: 'Artist Name',
    role: 'Mixer',
    embedUrl: null,
    placeholder: true,
  },
  {
    title: 'Song Title',
    artist: 'Artist Name',
    role: 'Producer / Mixer',
    embedUrl: null,
    placeholder: true,
  },
  {
    title: 'Song Title',
    artist: 'Artist Name',
    role: 'Mastering',
    embedUrl: null,
    placeholder: true,
  },
  {
    title: 'Song Title',
    artist: 'Artist Name',
    role: 'Producer',
    embedUrl: null,
    placeholder: true,
  },
]

function TrackCard({ track, index }) {
  if (track.embedUrl) {
    return (
      <div className="shrink-0 w-72 rounded-2xl overflow-hidden border border-white/5 bg-[#111] flex flex-col">
        <iframe
          src={track.embedUrl}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={`${track.title} by ${track.artist}`}
          className="block"
        />
        <div className="p-4">
          <p className="text-white font-semibold text-sm truncate">{track.title}</p>
          <p className="text-gray-400 text-xs mt-0.5">{track.artist}</p>
          <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-blue-600/15 border border-blue-500/20 text-blue-400 text-xs font-medium">
            {track.role}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="shrink-0 w-72 rounded-2xl border border-white/5 bg-[#111] flex flex-col overflow-hidden group hover:border-blue-500/30 transition-colors duration-300">
      <div className="h-36 bg-gradient-to-br from-blue-950/40 to-black flex items-center justify-center border-b border-white/5">
        <div className="w-14 h-14 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
          <Music size={24} className="text-blue-400" />
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Coming Soon</p>
        <p className="text-white font-semibold text-sm">{track.title}</p>
        <p className="text-gray-500 text-xs mt-0.5">{track.artist}</p>
        <span className="inline-block mt-3 px-2 py-0.5 rounded-full bg-blue-600/10 border border-blue-500/15 text-blue-500 text-xs font-medium w-fit">
          {track.role}
        </span>
      </div>
    </div>
  )
}

export default function Discography() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
    }
  }

  return (
    <section id="work" className="py-28 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Discography</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Songs We've <span className="text-gradient">Worked On</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-lg text-base leading-relaxed">
              A growing catalog of records produced, mixed, and mastered at Promethex Productions.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tracks.map((track, i) => (
            <TrackCard key={i} track={track} index={i} />
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8 italic">
          More tracks coming soon — reach out to hear samples of our work.
        </p>
      </div>
    </section>
  )
}
