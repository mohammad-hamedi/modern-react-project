import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Companylogo from './components/Companylogo'
import PurposeSection from './components/Purposesection'
import FeaturesSection from './components/FeaturesSection'
import SecheduleSection from './components/SecheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/pricingSection'
import ServiesSection from './components/ServiesSection'
import TestmonialSection from './components/Testmonial.section'
import SubscribeNewsletter from './components/Subscribe newsletter'
import Footer from './components/Footer'
function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden' >
      <div className='absolute inset-0 -top-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] ' ></div>
      <div className='overflow-hidden' >
      <Navbar />
      <Hero />
      <Companylogo />
      <div id="about">
        <PurposeSection />
      </div>
      <FeaturesSection />
      <SecheduleSection />
      <MonitorSection />
      <PricingSection />
      <div id="services">
        <ServiesSection />
      </div>
      <TestmonialSection />
      <div id="contact">
        <SubscribeNewsletter />
      </div>
      <Footer />
      </div>
    </main>
  )
}

export default App
