import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TrustBadgesRow from './components/TrustBadgesRow';
import FinalCTA from './components/FinalCTA';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <TrustBadgesRow />
      <Services />
      <Portfolio />
      <Benefits />
      <WhyChooseUs />
      <Process />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppButton phoneNumber='+919876543210' />
    </div>
  );
}

export default App;
