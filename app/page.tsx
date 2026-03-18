import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Programs from './components/Programs';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollAnimateInit from './components/ScrollAnimateInit';

export default function HomePage() {
  return (
    <>
      <ScrollAnimateInit />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <HowItWorks />
        <Programs />
        <Schedule />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
