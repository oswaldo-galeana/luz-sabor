import Button from './components/Button'
import Navbar from './components/Navbar'
import logo from './assets/logo.jpeg'
import Hero from './sections/Hero'
import Catalog from './sections/Catalog'
import Footer from './sections/Footer'
import Benefits from './sections/Benefits'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import FormFAB from './components/FormFAB'

function App() {
  return (
    <div className="bg-cream-base min-h-screen pt-18">
      <Navbar />
      <Hero />
      <Catalog />
      <Benefits />
      <Testimonials /> 
      <FAQ />
      <CTA />
      <FormFAB />
      <Footer />
    </div>
  )
}

export default App
