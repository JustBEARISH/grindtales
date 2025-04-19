import './globals.css'
import UserNav from '@/components/UserNav'
import { Satisfy } from 'next/font/google'
import GrindHamster from '@/components/GrindHamster'
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper'
import MockDataLoader from '@/components/MockDataLoader'

const satisfy = Satisfy({ subsets: ['latin'], weight: '400' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${satisfy.className} overflow-hidden`}>
        <MockDataLoader />
        <UserNav />
        <ClientLayoutWrapper>
          <div className="min-h-screen pt-[6rem] bg-[url('/images/storybook-bg.png')] bg-cover bg-no-repeat bg-bottom bg-fixed">
            <main className="h-screen overflow-hidden flex flex-col items-center justify-center px-4 bg-[url('/images/storybook-bg.png')] bg-cover bg-bottom bg-no-repeat bg-fixed">
              {children}
            </main>
            <footer className="bg-transparent text-sm text-white py-4 text-center z-50 relative">
              Made with 💜 by Grindrick. Built on $GRIND.
            </footer>
          </div>
        </ClientLayoutWrapper>
        <GrindHamster />
      </body>
    </html>
  )
}
