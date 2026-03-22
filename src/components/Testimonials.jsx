import React from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "He is supportive, a genuine soul, and works hard to reach for the stars in his music to help artists. I couldn't have asked for a better producer. I feel God blessed me with crossing paths with Isaac.",
    name: 'Client',
    role: 'Recording Artist',
  },
  {
    quote:
      "Promethex Productions has been one of the best studios I have ever been to. This company is top tier — the quality of the work speaks for itself.",
    name: 'Client',
    role: 'Recording Artist',
  },
  {
    quote:
      "Isaac has an incredible ear and a passion for the craft that you can feel in every session. He pushes you to be your best while making the whole process feel effortless.",
    name: 'Client',
    role: 'Singer-Songwriter',
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

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl border border-white/5 bg-[#0f0f0f] hover:border-blue-500/20 transition-colors duration-300 flex flex-col"
            >
              <div className="absolute top-0 left-8 w-0.5 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
              <Quote size={28} className="text-blue-600/40 mb-5 shrink-0" />
              <p className="text-gray-300 text-base leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-white/5">
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
