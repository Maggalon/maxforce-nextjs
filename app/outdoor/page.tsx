import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import OutdoorTimeline from '../components/OutdoorTimeline';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollAnimateInit from '../components/ScrollAnimateInit';

export const metadata: Metadata = {
  title: 'Outdoor Events | MaxForce CrossFit — Тренировки на открытом воздухе',
  description:
    'Расписание outdoor-событий MaxForce CrossFit: тренировки, забеги, турниры и хайкинг на свежем воздухе в Новосибирске.',
  openGraph: {
    title: 'Outdoor Events | MaxForce CrossFit',
    description: 'Тренировки, забеги и турниры за стенами зала.',
    type: 'website',
  },
};

export default function OutdoorPage() {
  return (
    <>
      <ScrollAnimateInit />
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <OutdoorTimeline />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
