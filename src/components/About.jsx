import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
          <img
            src="/assets/exterior.png"
            alt="Promethex Productions Studio — Nashville, TN"
            className="relative rounded-2xl w-full h-[500px] object-cover border border-white/5"
          />
          <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Est. Nashville, TN</p>
            <p className="text-white text-sm font-medium mt-0.5">931 Twin Elms Ct</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Built on Passion,<br />
            <span className="text-gradient">Driven by Sound</span>
          </h2>
          <div className="space-y-5 text-gray-400 leading-relaxed text-base">
            <p>
              Promethex Productions was born from a deep love of music and an obsession with sonic excellence. Based in Nashville — the heartbeat of American music — we've built a studio environment where artists can create freely and sound their absolute best.
            </p>
            <p>
              From intimate singer-songwriter sessions to full-band recordings and electronic production, we bring the same level of care and craftsmanship to every project. Our hybrid analog-digital signal chain gives your music warmth, depth, and clarity that stands out.
            </p>
            <p>
              We believe every artist deserves a genuine collaborator — someone who listens, understands your vision, and works tirelessly to bring it to life.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { value: '100+', label: 'Songs Produced' },
              { value: '50+', label: 'Artists Worked With' },
              { value: '5★', label: 'Client Rating' },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/8 rounded-xl p-4 text-center bg-white/2">
                <p className="text-2xl font-black text-gradient">{stat.value}</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
