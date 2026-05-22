import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-wrapper">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </div>
  )
}

export default App