import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    // Give React a tick to paint
    const timer = setTimeout(() => {
      // Generic section reveal
      gsap.utils.toArray<HTMLElement>('.section-hidden').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Stagger card groups
      gsap.utils.toArray<HTMLElement>('.stagger-group').forEach((group) => {
        const cards = group.querySelectorAll<HTMLElement>('.stagger-card')
        gsap.fromTo(
          cards,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          },
        )
      })

      // Timeline alternating slide-in
      gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          },
        )
      })

      // Tool chips cascade
      const chips = document.querySelectorAll<HTMLElement>('.chip-cascade')
      if (chips.length) {
        gsap.fromTo(
          chips,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: chips[0],
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          },
        )
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}
