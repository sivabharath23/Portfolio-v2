const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js (App Router)', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    title: 'Backend & Database',
    icon: '⚙️',
    skills: [
      { name: 'Next.js API Routes', level: 85 },
      { name: 'Prisma ORM', level: 82 },
      { name: 'PostgreSQL / Neon DB', level: 78 },
      { name: 'Server Actions (RSC)', level: 80 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: '🚀',
    skills: [
      { name: 'Vite', level: 88 },
      { name: 'Git / GitHub', level: 87 },
      { name: 'Vercel Deployment', level: 90 },
      { name: 'Playwright / E2E Testing', level: 75 },
      { name: 'Figma', level: 70 },
    ],
  },
]

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-sm text-indigo-400 font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">Also familiar with</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Node.js', 'Neon PostgreSQL', 'Lucide React', 'Recharts', 'jsPDF', 'SheetJS', 'bcryptjs', 'JWT / jose', 'SSE Streaming', 'Playwright', 'Redux', 'Zustand', 'Firebase', 'Netlify'].map(tech => (
              <span
                key={tech}
                className="px-4 py-2 text-sm text-gray-400 border border-white/10 rounded-full hover:border-indigo-500/50 hover:text-indigo-400 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
