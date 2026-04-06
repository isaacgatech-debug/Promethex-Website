import React from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Isaac is one of the best producers I've had the pleasure of working with, he's hardworking, knows his craft and produces quality songs! I would highly highly recommend!",
    name: 'Aaron Marlowe',
    role: 'Recording Artist',
  },
  {
    quote:
      "It has been an absolute pleasure working with Isaac at Promethex Productions. He has fully embraced my madcap vision, no small feat, considering my artist persona is a psychedelic space pirate with a rock opera at the heart of my sound. Isaac not only makes room for that wild energy in co-production and mastering, but does so with remarkable ease. He listens deeply, stays in lockstep with the vision, and makes me feel truly heard and seen. My work requires scope to grasp, yet he honors it with respect and clarity. Isaac is wise far beyond his years, and working with him has been nothing short of inspiring.",
    name: 'Alan Hatcher',
    role: 'Ghostship Groggy',
  },
  {
    quote:
      "This industry is pertinent on building and maintaining close friendships while merging creativity. Isaac Middendorf has been living proof of this narrative for me both musically & personally. He is a man who stands on business & delivers top tier production & mixes at very reasonable prices. His vision for music & sonic pallet never falls short of how he sees life, and that's what I admire most about working with him on a consistent basis. Isaac has showed me that the possibilities with music at Promethex Studios are endless and that every sonic frequency, every small studio tweak has a major impact on how a song delivers and gets its message across. Working with him so closely is something I never expected in my music career, but I didn't know how much I needed him until we developed a close relationship and started working together. He has a long list of clients who can attest to his skill-level and his knack for close listening and sound shaping. Work with Isaac Middendorf, you won't regret it! I promise.",
    name: 'Grant Bentinganan',
    role: 'Studio & Touring Drummer',
  },
  {
    quote:
      "Isaac has a great ear for music and is super creative! He makes the whole production process easy and fun, and he always finds a way to bring my song ideas to life in the best way.",
    name: 'Emilly Surak',
    role: 'Recording Artist',
  },
  {
    quote:
      "He is supportive, a genuine soul, and works hard to reach for the stars in his music to help artists. I couldn't have asked for a better producer. I feel God blessed me with crossing paths with Isaac.",
    name: 'Gemma Madrid',
    role: 'Recording Artist',
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            What Artists <span className="text-gradient">Are Saying</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-5 rounded-xl border border-white/5 bg-[#0f0f0f] hover:border-blue-500/20 transition-colors duration-300"
            >
              <div className="absolute top-0 left-5 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent" />
              <Quote size={20} className="text-blue-600/40 mb-3 shrink-0" />
              <p className="text-gray-300 text-base leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-4 pt-3 border-t border-white/5">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs mt-0.5 uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
