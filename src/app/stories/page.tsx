'use client'

import { useEffect, useState } from 'react'

// Define the Story type
interface Story {
  id: string
  title: string
  text: string
  author: string
  tips: number
  likes: number
}

export default function StoriesPage() {
  const [stories, setStories] = useState<Story[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('grindtales_stories')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setStories(parsed)
      } catch (err) {
        console.error('Invalid JSON:', err)
      }
    }
  }, [])

  function getUser() {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('grindtales_user')
      return data ? JSON.parse(data) : null
    }
    return null
  }

  function updateUserBalance(amount: number) {
    const data = localStorage.getItem('grindtales_user')
    if (data) {
      const user = JSON.parse(data)
      user.balance += amount
      localStorage.setItem('grindtales_user', JSON.stringify(user))
    }
  }

  const handleLike = (storyId: string) => {
    const user = getUser()
    if (!user) return alert("Please log in first.")

    if (user.balance < 1) {
      return alert("Not enough $GRIND to like this story.")
    }

    const updatedStories = stories.map((s) => {
      if (s.id === storyId) {
        s.likes += 1
        s.tips += 1
      }
      return s
    })

    setStories(updatedStories)
    localStorage.setItem('grindtales_stories', JSON.stringify(updatedStories))
    updateUserBalance(-1)
    alert("❤️ You liked the story and sent 1 $GRIND!")
  }

  const handleTip = (storyId: string) => {
    const user = getUser()
    if (!user) return alert("Please log in first.")

    if (user.balance < 3) {
      return alert("Not enough $GRIND to tip!")
    }

    const updatedStories = stories.map((s) => {
      if (s.id === storyId) {
        s.tips += 3
      }
      return s
    })

    setStories(updatedStories)
    localStorage.setItem('grindtales_stories', JSON.stringify(updatedStories))
    updateUserBalance(-3)
    alert("☕ You bought the writer a coffee (3 $GRIND)!")
  }

  return (
    <main className="flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold text-yellow-300">📖 GrindTales Library</h1>
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} className="bg-black/80 text-white p-4 rounded-xl max-w-xl w-full shadow-lg">
            <h2 className="text-xl font-semibold text-pink-300">{story.title}</h2>
            <p className="text-sm mt-2">{story.text}</p>
            <div className="mt-3 text-sm text-gray-400">✍️ {story.author} | ☕ {story.tips} Tips</div>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleLike(story.id)}
                className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
              >
                ❤️ Like (1)
              </button>
              <button
                onClick={() => handleTip(story.id)}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600"
              >
                ☕ Buy Coffee (3)
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No stories loaded yet.</p>
      )}
    </main>
  )
} 