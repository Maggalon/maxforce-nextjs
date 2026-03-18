import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MaxForce CrossFit | Сила. Скорость. Комьюнити.',
  description:
    'MaxForce — это CrossFit-зал для тех, кто ценит время. Силовые тренировки, жиросжигание и живое комьюнити в 1 часе в день.',
  keywords: 'CrossFit, Максфорс, MaxForce, тренировки, зал, кроссфит',
  openGraph: {
    title: 'MaxForce CrossFit | Сила. Скорость. Комьюнити.',
    description: 'CrossFit-зал для тех, кто ценит время. 1 час — максимальная отдача.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
