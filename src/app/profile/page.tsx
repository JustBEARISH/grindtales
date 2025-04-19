'use client'

import { useState } from 'react'

export default function ProfilePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const username = 'Justin' // Replace with actual username from context
  const tokenBalance = 50 // Replace with actual token logic

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSave = () => {
    // Save logic here (e.g., upload to server or update state)
    alert('Profile picture updated!')
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 pb-20">
      <div className="bg-zinc-900/90 border border-yellow-400 text-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center space-y-4">
        <h2 className="text-2xl font-bold text-yellow-300">🧸 Update Profile Picture</h2>

        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src="/path-to-current-pfp.png" // Replace with dynamic user pfp URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-white font-semibold">{username}</p>
        <p className="text-green-400">💰 {tokenBalance} $GRIND</p>

        <label className="block text-sm mt-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-purple-600 file:text-white
              hover:file:bg-purple-700"
          />
        </label>

        {selectedFile && (
          <p className="text-xs text-gray-300 truncate">{selectedFile.name}</p>
        )}

        <button
          onClick={handleSave}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-xl shadow-md"
        >
          Save
        </button>
      </div>
    </main>
  )
} 