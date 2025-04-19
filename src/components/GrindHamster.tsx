'use client'

import { useState, useEffect } from 'react'

const hamsterQuotes = [
  "✨ Keep grinding, writer wizard!",
  "☕ Coffee fuels creativity... and hamsters.",
  "🧠 Don't overthink it — just write!",
  "📖 Every word you write is history in the making.",
  "🎨 Storytelling is art — and you're the artist!",
  "🚀 Publish it. Someone needs to read your magic.",
  "🐹 Grindrick believes in you.",
]

const hamsterImages = [
  "/images/hamsters/ham1.png",
  "/images/hamsters/ham2.png",
  "/images/hamsters/ham3.png",
  "/images/hamsters/ham4.png",
]

export default function GrindHamster() {
  const [message, setMessage] = useState('🐹 Welcome to GrindTales!')
  const [visible, setVisible] = useState(true)
  const [imageIndex, setImageIndex] = useState(0)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const quote = hamsterQuotes[Math.floor(Math.random() * hamsterQuotes.length)]
      const nextImage = (imageIndex + 1) % hamsterImages.length
      setMessage(quote)
      setImageIndex(nextImage)
    }, 8000)
    return () => clearInterval(interval)
  }, [imageIndex])

  if (!hasMounted) return null

  return visible ? (
    <div className="fixed bottom-4 right-4 z-50 flex items-end gap-2 animate-fade-in">
      <div className="bg-zinc-900/80 backdrop-blur-md border border-pink-400 rounded-xl p-4 shadow-2xl ring-2 ring-pink-400/40 max-w-sm text-sm">
        <p className="text-pink-200">{message}</p>
        <button
          onClick={() => setVisible(false)}
          className="text-xs mt-2 text-pink-300 hover:underline"
        >
          ✖ Hide Hamster
        </button>
      </div>
      <img
        src={hamsterImages[imageIndex]}
        alt="Grindrick the Hamster"
        className="w-28 h-28 drop-shadow-[0_0_20px_rgba(255,192,203,0.9)] rounded-2xl"
      />
    </div>
  ) : null
} 