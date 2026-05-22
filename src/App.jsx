import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills';
import SoftSkills from './sections/SoftSkills'
import Contact from './sections/Contact'
import './styles/main.css'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-wrapper">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <SoftSkills />
      </main>
      <Contact />
    </div>
  )
}

export default App
