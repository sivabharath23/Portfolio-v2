const projects = [
  // ── REAL / FEATURED PROJECTS ──────────────────────────────────────────────
  {
    title: 'RenewalFlow',
    subtitle: 'Client & Contract Renewals Manager',
    description:
      'Production-ready SaaS platform to track clients, projects, hosting servers, domains, AMC contracts, invoices, and payments. Features automated email notifications, dynamic UPI QR code invoice generation, glassmorphic KPI dashboard, and financial CSV/PDF reports.',
    tags: ['Next.js 15', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS v4', 'Neon DB', 'Vercel'],
    github: 'https://github.com/sivabharath23/renewal-flow',
    live: 'https://renewal-flow-saas.vercel.app',
    featured: true,
    emoji: '🔄',
    accent: 'from-blue-600/30 to-cyan-600/20',
    badge: 'SaaS · Full-Stack',
    demoNote: 'Email: test@renewalflow.com · Pass: 123456',
  },
  {
    title: 'GuestInn',
    subtitle: 'Hotel & Guest Management System',
    description:
      'Full-stack Next.js hotel management SaaS built with Prisma and PostgreSQL. Handles guest check-ins/check-outs, room tracking, booking management, and property operations with a modern responsive interface.',
    tags: ['Next.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/sivabharath23/guest-Inn',
    live: 'https://guestin-saas.vercel.app',
    featured: true,
    emoji: '🏨',
    accent: 'from-emerald-600/30 to-teal-600/20',
    badge: 'SaaS · Full-Stack',
    demoNote: null,
  },
  {
    title: 'PromptQA',
    subtitle: 'AI-Driven E2E Browser Testing Suite',
    description:
      'Next-generation visual AI-driven E2E browser testing platform. Write tests in plain English (Prompt Mode) or raw Playwright scripts. Features live screencasts, real-time SSE console streaming, step checklists, analytics charts, and PDF/Excel diagnostic exports.',
    tags: ['Next.js 15', 'TypeScript', 'Playwright', 'Prisma', 'Neon PostgreSQL', 'Recharts', 'SSE'],
    github: 'https://github.com/sivabharath23/promptQA',
    live: 'https://prompt-qa.vercel.app',
    featured: true,
    emoji: '🤖',
    accent: 'from-violet-600/30 to-purple-600/20',
    badge: 'SaaS · AI · Testing',
    demoNote: null,
  },
  // ── OTHER PROJECTS ─────────────────────────────────────────────────────────
  {
    title: 'Portfolio V2',
    subtitle: 'Personal Portfolio Website',
    description:
      'This portfolio — built with React, Vite, and Tailwind CSS. Features typewriter animation, smooth scroll navigation, animated skill bars, and project showcase.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/sivabharath23/Portfolio-v2',
    live: 'https://portfolio-v2-sigma-orcin.vercel.app',
    featured: false,
    emoji: '🚀',
    accent: 'from-indigo-600/20 to-pink-600/10',
    badge: 'Frontend',
    demoNote: null,
  },
  {
    title: 'React Dashboard',
    subtitle: 'Admin Analytics Dashboard',
    description:
      'Feature-rich admin dashboard with charts, data tables, and real-time statistics. Built with React and modern UI patterns.',
    tags: ['React', 'Recharts', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/sivabharath23',
    live: null,
    featured: false,
    emoji: '📊',
    accent: 'from-orange-600/20 to-yellow-600/10',
    badge: 'Frontend',
    demoNote: null,
  },
  {
    title: 'Weather App',
    subtitle: 'Live Weather Forecast',
    description:
      'A weather application displaying current conditions and forecasts via OpenWeather API with a clean, responsive UI.',
    tags: ['React', 'OpenWeather API', 'CSS3'],
    github: 'https://github.com/sivabharath23',
    live: null,
    featured: false,
    emoji: '🌤️',
    accent: 'from-sky-600/20 to-blue-600/10',
    badge: 'Frontend',
    demoNote: null,
  },
]

function FeaturedCard({ project }) {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
      {/* Header */}
      <div className={`h-44 bg-gradient-to-br ${project.accent} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        {/* Grid pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${project.title}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${project.title})`} />
        </svg>
        <span className="relative text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </span>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-xs bg-indigo-500 text-white px-2.5 py-1 rounded-full font-semibold tracking-wide">
            Featured
          </span>
          <span className="text-xs bg-white/10 backdrop-blur-sm text-white px-2.5 py-1 rounded-full font-medium border border-white/20">
            {project.badge}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-indigo-400/80 text-xs font-medium mt-0.5">{project.subtitle}</p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {project.demoNote && (
          <div className="mb-4 px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <p className="text-amber-400 text-xs font-medium">
              🔑 Demo credentials: {project.demoNote}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Source Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/live"
            >
              <span>Live Demo</span>
              <svg className="w-3.5 h-3.5 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function SmallCard({ project }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className={`h-28 bg-gradient-to-br ${project.accent} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <span className="relative text-4xl drop-shadow group-hover:scale-110 transition-transform duration-300">{project.emoji}</span>
        <span className="absolute top-2 right-2 text-xs bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/15">
          {project.badge}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400/80 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="ml-auto text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
              Live
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4">Real-world SaaS applications deployed to production</p>
        </div>

        {/* Featured SaaS Projects */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Featured SaaS Projects</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(project => (
              <FeaturedCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-12" />

        {/* Other Projects */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-gray-600" />
            <span className="text-gray-500 text-sm font-semibold uppercase tracking-widest">Other Projects</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map(project => (
              <SmallCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/sivabharath23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
