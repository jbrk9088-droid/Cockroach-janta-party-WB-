// App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black"></div>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blattodea.jpg/640px-Blattodea.jpg"
          alt="Cockroach"
          className="w-40 h-40 object-cover rounded-full border-4 border-red-600 shadow-2xl z-10"
        />

        <h1 className="text-5xl md:text-7xl font-extrabold mt-8 z-10 tracking-wide">
          COCKROACH JANTA PARTY WB
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-2xl text-gray-300 z-10">
          Voice of the Lazy, Survivors & Unemployed.
          Together We Survive.
        </p>

        <div className="flex gap-4 mt-8 z-10 flex-wrap justify-center">
          <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-2xl text-lg font-bold shadow-lg">
            Join Movement
          </button>

          <button className="border border-white hover:bg-white hover:text-black transition px-8 py-3 rounded-2xl text-lg font-bold">
            Read Manifesto
          </button>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-20 py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Cockroach Party?</h2>
          <p className="text-gray-400 text-lg leading-8">
            We survive everything — inflation, unemployment, toxic work culture,
            political drama and daily chaos. This movement represents the people
            who refuse to give up.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">Our 5 Demands</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            'Free WiFi Everywhere',
            '4 Day Work Week',
            'Affordable Food For All',
            'More Holidays & Leave',
            'Youth Voice In Politics',
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition shadow-xl"
            >
              <div className="text-5xl mb-4">🪳</div>
              <h3 className="text-2xl font-bold mb-3">{item}</h3>
              <p className="text-gray-400">
                A bold demand from the people who are tired of surviving and
                ready to live better.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Form */}
      <section className="bg-red-950/20 px-6 py-24">
        <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-8">Join The Party</h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-500"
            />

            <textarea
              rows="5"
              placeholder="Why do you support the movement?"
              className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl text-xl font-bold"
            >
              Become a Member
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500 text-sm">
        © 2026 Cockroach Janta Party WB — Together We Survive.
      </footer>
    </div>
  )
}


// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  padding: 0;
  background: black;
}


// package.json
{
  "name": "cockroach-party-wb",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.2.0"
  }
}


// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})


// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}


// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


// Install Commands
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev


// Vercel Build Settings
Build Command: npm run build
Output Directory: dist
    
