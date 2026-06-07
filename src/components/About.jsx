import resumePdf from '../assets/Sivabharath_React_Developer_Resume.pdf'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-1 gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              React.js Developer
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm <span className="text-indigo-400 font-semibold">Sivabharath S P</span>, a passionate Frontend Developer
              with a strong focus on building clean, modern, and performant web applications. I specialize in
              React.js, JavaScript, and Tailwind CSS to create intuitive user experiences.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I love turning complex problems into simple, beautiful solutions. I'm constantly learning new
              technologies and best practices to stay ahead in the ever-evolving world of frontend development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Name', value: 'Sivabharath S P' },
                { label: 'Role', value: 'Frontend Developer' },
                { label: 'Stack', value: 'React, Vite, Tailwind' },
                { label: 'Status', value: 'Open to Work' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <p className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            <a
              href={resumePdf}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
