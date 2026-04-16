import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700 sticky top-0 bg-slate-900/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ryan Bar-Zion Portfolio</h1>
          <div className="space-x-6">
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">AI & Research Tools</h1>
        <p className="text-xl text-slate-300 mb-8">
          Building intelligent systems for catalyst discovery and investment research
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold"
        >
          View My Work
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>

        {/* Project 1: Catalyst Research */}
        <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-8 mb-8 hover:border-blue-500 transition">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">Catalyst Research AI</h3>
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
              <span className="bg-slate-600 px-3 py-1 rounded text-sm">FastAPI</span>
              <span className="bg-slate-600 px-3 py-1 rounded text-sm">Streamlit</span>
              <span className="bg-slate-600 px-3 py-1 rounded text-sm">Python</span>
              <span className="bg-slate-600 px-3 py-1 rounded text-sm">OpenAI GPT-4</span>
              <span className="bg-slate-600 px-3 py-1 rounded text-sm">SQLite</span>
            </div>
          </div>

          <p className="text-slate-400 text-sm">
            <strong>Features:</strong> Future catalyst predictions • Deep research reports • Ideas watchlist • Multi-source RSS analysis • Evidence-based scoring
          </p>
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

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-700">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <div className="space-y-4 text-slate-300">
          <p>
            I build AI-powered research and analysis tools. Currently focused on catalyst discovery, thesis development, and investment research systems.
          </p>
          <p>
            Skilled in: Python, FastAPI, React, LLMs, Database Design, Full-Stack Development
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-700 text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="space-y-4">
          <p className="text-slate-300">
            <a href="https://github.com/ryanbarzion" className="text-blue-400 hover:text-blue-300">
              GitHub
            </a>
            {" "} • {" "}
              <a href="mailto:ryan@barzion.net" className="text-blue-400 hover:text-blue-300">
              Email
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 text-center text-slate-500">
        <p>Built with Next.js and Vercel</p>
      </footer>
    </div>
  );
}

