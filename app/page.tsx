import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700 sticky top-0 bg-slate-900/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ryan Bar-Zion --Projects</h1>
          <div className="space-x-6 flex items-center">
            <a
              href="https://www.linkedin.com/in/ryanbarzion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.604v5.592z"/></svg>
              <span className="ml-1 hidden sm:inline">ryanbarzion</span>
            </a>
            <a
              href="mailto:ryan@barzion.net"
              aria-label="Email"
              className="hover:text-blue-400 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v13c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-13l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"/></svg>
              <span className="ml-1 hidden sm:inline">ryan@barzion.net</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Featured Projects</h1>
        <p className="text-xl text-slate-300 mb-8"> 
        </p>
        {/* Removed 'View My Work' button */}
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Project 1:</h2>

        {/* Project 1: Catalyst Research */}
        <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-8 mb-8 hover:border-blue-500 transition">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">AI Catalyst Researcher + Stock Analysis</h3>
            <a
              href="https://github.com/ryanbarzion/catalyst-researcher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              GitHub →
            </a>
          </div>
          <p className="text-slate-300 mb-4">
            An AI-powered system for discovering market catalysts and generating deep research reports. Uses LLM reasoning to identify forward-looking investment opportunities and map causal chains to direct beneficiaries.
          </p>
          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-400 mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-600 px-3 py-1 rounded text-sm">Python</span>
              <span className="bg-slate-600 px-3 py-1 rounded text-sm">OpenAI</span>
              <span className="bg-slate-600 px-3 py-1 rounded text-sm">FastAPI</span>
              <span className="bg-slate-600 px-3 py-1 rounded text-sm">SQLite</span>
              <span className="bg-slate-600 px-3 py-1 rounded text-sm">Streamlit</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            <strong>Features:</strong> Future catalyst predictions • Stock analysis & research reports • Ideas watchlist • Multi-source RSS analysis
          </p>
          {/* Live Demo Button */}
          <div className="mt-6 text-center">
            <a
              href="https://huggingface.co/spaces/ryanbarzion/catalyst-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold"
            >
              Try Live Demo
            </a>
          </div>
        </div>

        {/* Project 2: Template for Future Projects */}
        <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-8 opacity-60 hover:opacity-100 transition">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">Your Next Project</h3>
            <span className="text-slate-500 text-sm">Coming soon</span>
          </div>
          <p className="text-slate-400">Add more projects here as you build them</p>
        </div>
      </section>

      {/* Contact Section Removed */}

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 text-center text-slate-500">
        <p>Built with Next.js and Vercel</p>
      </footer>
    </div>
  );
}

