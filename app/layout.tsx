import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['400'],
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Almazroa Intellectual Property',
  description: 'Professional IP services for patents, trademarks, and copyrights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibmPlexSansArabic.variable}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pt-16">
            <div className="container mx-auto px-4 text-center">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}

