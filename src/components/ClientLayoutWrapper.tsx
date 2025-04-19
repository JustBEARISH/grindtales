'use client'

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[url('/background.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden">
      {children}
    </div>
  )
} 