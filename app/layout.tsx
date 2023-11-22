import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'iManage ',
  description: 'Optimize your cleaning business with iManage, the cutting-edge cleaning job management system. Streamline operations, enhance efficiency, and boost productivity with our powerful cleaning management software. From scheduling to task tracking, iManage is your all-in-one solution for seamless cleaning job coordination. Elevate your cleaning services with our user-friendly platform designed for unparalleled efficiency. Discover the future of cleaning management – choose iManage today for a spotless and organized workflow. Keywords: cleaning job management, cleaning management software, task tracking, scheduling, cleaning services, efficient workflow, job coordination, iManage.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
