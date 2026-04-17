import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="border-[#1e2d45]" />
        <Skills />
        <hr className="border-[#1e2d45]" />
        <Experience />
        <hr className="border-[#1e2d45]" />
        <Education />
        <hr className="border-[#1e2d45]" />
        <Certifications />
        <hr className="border-[#1e2d45]" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
