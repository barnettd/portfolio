import { useEffect, useRef } from 'react'
import { ParticleField } from '@/effects/ParticleField'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const field = new ParticleField({ canvas: canvasRef.current, count: 80 })
    return () => field.destroy()
  }, [])

  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-[-6%] h-[36rem] w-[36rem] rounded-full bg-[#3dd9f5]/8 blur-[120px]" />
        <div className="absolute right-[-8%] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-sky-400/6 blur-[100px]" />
      </div>

      {/* Three.js canvas — full right side on desktop, full bg on mobile */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-80 lg:left-1/2 lg:w-1/2"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-6 py-24 lg:min-h-[92vh] lg:px-10">
        <div className="max-w-2xl">
          {/* Status pill */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#3dd9f5]/20 bg-[#3dd9f5]/8 px-4 py-2 text-sm text-[#3dd9f5]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3dd9f5]" />
            Open to leadership, consulting, and strategic collaboration
          </div>

          {/* Name */}
          <p className="mb-3 text-sm uppercase tracking-[0.38em] text-slate-400">Daniel Barnett</p>

          {/* Headline */}
          <h1 className="text-6xl font-semibold leading-[1.02] tracking-tight text-white lg:text-7xl">
            Building products,<br />
            teams, and momentum.
          </h1>

          {/* Sub */}
          <p className="mt-6 text-xl text-slate-200 lg:text-2xl">
            IT Delivery Leader across videogames, AI, and blockchain.
          </p>

          {/* Bio */}
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
            Senior operator with deep roots in game production. A track record spanning product delivery,
            remote team leadership, metrics-driven iteration, and emerging technology — helping teams
            turn ambitious ideas into real, launchable products.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-[#3dd9f5] px-7 py-3 text-sm font-medium text-slate-950 transition hover:bg-[#7ae8f8]"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Let's connect
            </a>
          </div>

          <p className="mt-7 text-sm text-slate-500">Product thinking · people alignment · execution clarity.</p>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <p className="text-xs uppercase tracking-[0.3em]">Scroll</p>
        <div className="h-10 w-px bg-gradient-to-b from-[#3dd9f5]/40 to-transparent" />
      </div>
    </section>
  )
}
