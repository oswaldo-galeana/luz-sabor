import Button from './components/Button'
import Navbar from './components/Navbar'
import logo from './assets/logo.jpeg'
import Hero from './sections/Hero'
import Catalog from './sections/Catalog'
import OrderCTA from './sections/OrderCTA'
import Footer from './sections/Footer'
import Benefits from './sections/Benefits'
import Testimonials from './sections/Testimonials'

function App() {
  return (
    <div className="bg-cream-base min-h-screen pt-18">
      <Navbar />
      <Hero />
      <Catalog />
      <OrderCTA />
      <Benefits />
      <Testimonials /> 
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
