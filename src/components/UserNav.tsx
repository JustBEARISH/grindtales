'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type User = {
  username: string
  balance: number
  profilePic?: string
  profileImage?: string
}

export default function UserNav() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('grindtales_user')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  const handleProfilePicChange = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = () => {
      const file = input.files?.[0]
      if (!file) return

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result?.toString()
        if (!base64) return

        if (!user) return;

        const updated: User = { username: user.username, balance: user.balance, profilePic: base64, profileImage: base64 }
        localStorage.setItem('grindtales_user', JSON.stringify(updated))
        setUser(updated)
      }
      reader.readAsDataURL(file)
    }
    input.click()
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-2">
      <div className="w-full max-w-6xl">
        <nav className="w-full px-6 py-4 bg-zinc-900/80 backdrop-blur-lg border border-purple-400 rounded-2xl shadow-lg ring-1 ring-purple-500/30 flex items-center justify-between text-sm">
          {/* Left - Links */}
          <div className="flex items-center gap-5 text-purple-100 font-semibold">
            <Link href="/" className="hover:text-yellow-300">🏠 Home</Link>
            <Link href="/write" className="hover:text-yellow-300">✍️ Write</Link>
            <Link href="/stories" className="hover:text-yellow-300">📖 Stories</Link>
            <Link href="/leaderboard" className="hover:text-yellow-300">�� Leaderboard</Link>
            <Link href="/profile" className="hover:text-yellow-300">🧑 Profile</Link>
          </div>

          {/* Right - User */}
          {user && (
            <div className="flex items-center gap-4 text-zinc-300">
              <div className="flex items-center gap-2">
                <img
                  src={user.profileImage || '/default-pfp.png'}
                  alt="pfp"
                  className="w-8 h-8 rounded-full border-2 border-white cursor-pointer"
                  onClick={handleProfilePicChange}
                  title="Click to change your picture"
                />
                <span className="text-white font-medium">{user.username}</span>
                <span className="text-green-400 font-mono">💰 {user.balance} $GRIND</span>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem('grindtales_user')
                  window.location.href = '/login'
                }}
                className="text-pink-300 hover:text-pink-400 underline text-xs"
              >
                🔓 Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  )
} 