'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    let profileImageUrl: string | null = null
    if (image) {
      profileImageUrl = URL.createObjectURL(image)
    }

    const user = {
      username,
      balance: 50,
      profilePic: profileImageUrl,
    }

    localStorage.setItem('grindtales_user', JSON.stringify(user))
    router.push('/')
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      <form onSubmit={handleLogin} className="bg-zinc-800 p-8 rounded-xl shadow-md space-y-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-yellow-400">Login to GrindTales</h1>

        <input
          type="text"
          placeholder="Enter your writer name"
          className="w-full p-4 rounded-lg bg-zinc-700 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full text-sm text-zinc-400"
        />

        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg font-semibold">
          🚀 Enter the Grind
        </button>
      </form>
    </main>
  )
} 