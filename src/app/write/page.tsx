'use client'

import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { v4 as uuidv4 } from 'uuid'

// const getUser = () => {
//   if (typeof window !== 'undefined') {
//     const user = localStorage.getItem('grindtales_user')
//     return user ? JSON.parse(user) : null
//   }
//   return null
// }

export default function WritePage() {
  // const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  // const [image, setImage] = useState<File | null>(null)

  return (
    <section className="max-w-3xl w-full mx-auto bg-zinc-900/80 rounded-2xl shadow-xl border border-purple-400 backdrop-blur-md p-8 space-y-6">
      <h1 className="text-3xl font-bold text-white font-handwriting">✍️ Write Your Story</h1>

      <input
        type="text"
        placeholder="Story Title"
        className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white placeholder-zinc-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        rows={8}
        placeholder="Once upon a grind..."
        className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white placeholder-zinc-400"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {}}
        className="text-white"
      />

      <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow">
        📘 Publish Story
      </button>
    </section>
  )
} 