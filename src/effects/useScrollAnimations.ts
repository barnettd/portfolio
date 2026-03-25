import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Generic section reveal — animate FROM offset state (elements start visible)
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: 'power3.out',
          immediateRender: false,
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
        gsap.from(cards, {
          opacity: 0,
          y: 28,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: group,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Timeline alternating slide-in
      gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: i % 2 === 0 ? -36 : 36,
          duration: 0.7,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Tool chips cascade
      const chips = document.querySelectorAll<HTMLElement>('.chip-cascade')
      if (chips.length) {
        gsap.from(chips, {
          opacity: 0,
          scale: 0.85,
          duration: 0.35,
          stagger: 0.03,
          ease: 'back.out(1.4)',
          immediateRender: false,
          scrollTrigger: {
            trigger: chips[0],
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, 150)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}
