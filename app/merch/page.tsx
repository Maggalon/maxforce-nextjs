import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Merch from '../components/Merch';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollAnimateInit from '../components/ScrollAnimateInit';

export const metadata: Metadata = {
  title: 'Мерч MaxForce | Официальная атрибутика клуба',
  description:
    'Официальный мерч MaxForce CrossFit — футболки, худи, шорты, скакалки и аксессуары. Покупай на ресепшене или бронируй через менеджера.',
  openGraph: {
    title: 'Мерч MaxForce | Официальная атрибутика клуба',
    description: 'Футболки, худи, шорты и аксессуары MaxForce CrossFit.',
    type: 'website',
  },
};

export default function MerchPage() {
  return (
    <>
      <ScrollAnimateInit />
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <Merch />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
