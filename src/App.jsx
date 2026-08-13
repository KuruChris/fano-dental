import SmoothScroll from './components/SmoothScroll'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Transformations from './components/sections/Transformations'
import Team from './components/sections/Team'
import Location from './components/sections/Location'
import Contact from './components/sections/Contact'
import './App.css'

export default function App() {
  return (
    <SmoothScroll>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Transformations />
        <Team />
        <Location />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
