import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { Cursor } from '@/components/ui/Cursor'
import { Hero } from '@/components/sections/Hero'
import { Highlights } from '@/components/sections/Highlights'
import { About } from '@/components/sections/About'
import { Work } from '@/components/sections/Work'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { useScrollAnimations } from '@/effects/useScrollAnimations'

export default function App() {
  useScrollAnimations()

  return (
    <div className="min-h-screen bg-[#08111d] text-white selection:bg-[#3dd9f5] selection:text-slate-900">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
