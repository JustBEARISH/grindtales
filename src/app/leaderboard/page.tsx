'use client'

import { useEffect, useState } from 'react'
import HamsterIcon from '@/components/HamsterIcon'

type Story = {
  id: string
  title: string
  content: string
  image?: string
  author: string
  createdAt: string
  likes: number
  tips: number
}

type Leader = {
  username: string
  profilePic?: string
  totalTips: number
}

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState<Leader[]>([])

  useEffect(() => {
    const allStories: Story[] = JSON.parse(localStorage.getItem('grindtales_stories') || '[]')
    const leaderboardMap = new Map<string, Leader>()

    allStories.forEach(story => {
      if (!leaderboardMap.has(story.author)) {
        // Try to fetch profile pic from user cache if available
        const storedUser = localStorage.getItem('grindtales_user')
        let profilePic
        if (storedUser) {
          const parsed = JSON.parse(storedUser)
          if (parsed.username === story.author) {
            profilePic = parsed.profilePic
          }
        }

        leaderboardMap.set(story.author, {
          username: story.author,
          profilePic,
          totalTips: 0,
        })
      }

      const leader = leaderboardMap.get(story.author)!
      leader.totalTips += story.tips
    })

    const sortedLeaders = Array.from(leaderboardMap.values()).sort((a, b) => b.totalTips - a.totalTips)
    setLeaders(sortedLeaders)
  }, [])

  return (
    <main className="min-h-screen bg-transparent text-white px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-300">🏆 Top Storytellers</h1>
        <p className="text-lg text-zinc-300 mt-2">Writers who earned the most $GRIND tokens.</p>
      </div>

      <div className="max-w-2xl mx-auto bg-zinc-900/80 rounded-2xl border border-yellow-500 p-6 shadow-xl backdrop-blur-md space-y-4">
        {leaders.map((leader, index) => (
          <div
            key={leader.username}
            className="flex items-center justify-between bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700 transition"
          >
            <div className="flex items-center space-x-4">
              {leader.profilePic ? (
                <img
                  src={leader.profilePic}
                  alt={leader.username}
                  className="w-10 h-10 rounded-full border-2 border-yellow-400"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-sm text-zinc-300">?</div>
              )}
              <span className="font-medium text-lg">
                {index === 0 ? '��' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`} {leader.username}
              </span>
            </div>
            <span className="text-green-400 font-semibold">{leader.totalTips} $GRIND</span>
          </div>
        ))}
      </div>
    </main>
  )
} 