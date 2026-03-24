import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // quickTo for performance
    const moveDotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'none' })
    const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'none' })
    const moveRingX = gsap.quickTo(ring, 'x', { duration: 0.22, ease: 'power2.out' })
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.22, ease: 'power2.out' })

    const onMove = (e: MouseEvent) => {
      moveDotX(e.clientX - 4)
      moveDotY(e.clientY - 4)
      moveRingX(e.clientX - 20)
      moveRingY(e.clientY - 20)
    }

    const onEnterLink = () => {
      gsap.to(ring, { scale: 1.7, opacity: 0.5, duration: 0.2 })
      gsap.to(dot, { scale: 0, duration: 0.15 })
    }
    const onLeaveLink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2 })
      gsap.to(dot, { scale: 1, duration: 0.15 })
    }

    window.addEventListener('mousemove', onMove)

    // Add hover to interactive elements
    const bindHovers = () => {
      const els = document.querySelectorAll<HTMLElement>('a, button, [data-cursor]')
      els.forEach((el) => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
      return els
    }
    const els = bindHovers()

    return () => {
      window.removeEventListener('mousemove', onMove)
      els.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink)
        el.removeEventListener('mouseleave', onLeaveLink)
      })
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-[#3dd9f5]"
        style={{ top: 0, left: 0 }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] h-10 w-10 rounded-full border border-[#3dd9f5]"
        style={{ top: 0, left: 0 }}
      />
    </>
  )
}
