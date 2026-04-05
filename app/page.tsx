import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import ClubRules from './components/ClubRules';
import Merch from './components/Merch';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollAnimateInit from './components/ScrollAnimateInit';

export default function HomePage() {
  return (
    <>
      <ScrollAnimateInit />
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Schedule />
        <Pricing />
        <ClubRules />
        <Merch />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
