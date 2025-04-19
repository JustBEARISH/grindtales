// import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-center px-6 pb-12">
      <h1 className="text-5xl font-extrabold mb-4">
        <span className="text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">Welcome to </span>
        <span className="text-yellow-400 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">GrindTales</span> 🧁
      </h1>
      <p className="text-white text-lg mb-6 drop-shadow-md">Write. Tip. Grind. Sip ☕📚</p>
      <div className="flex gap-4 mb-6">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-xl font-bold shadow-md">
          ✍️ Start Writing
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-bold shadow-md">
          📘 Read Stories
        </button>
      </div>
      <p className="text-yellow-300 text-xl font-bold">✨ Start your next chapter ✨</p>
    </main>
  )
}
