import CursorSpotlight from './components/CursorSpotlight'
import ScrollProgress from './components/ScrollProgress'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Terminal from './components/Terminal'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-base text-ink-primary font-sans antialiased">
      <CursorSpotlight />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Terminal />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
