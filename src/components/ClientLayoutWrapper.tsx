'use client'

import { usePathname } from 'next/navigation'

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen bg-[url('/background.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden">
      {children}
    </div>
  )
} 