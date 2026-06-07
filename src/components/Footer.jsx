export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-indigo-400">Sivabharath S P</span>. Built with React + Vite + Tailwind CSS.
      </p>
    </footer>
  )
}
