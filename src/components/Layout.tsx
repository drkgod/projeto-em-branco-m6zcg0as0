import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <header className="fixed top-0 inset-x-0 z-10 bg-slate-50 border-b border-slate-200 h-14 sm:h-16 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link
            to="/"
            className="font-bold text-lg sm:text-xl text-slate-800 hover:opacity-80 transition-opacity"
          >
            Projeto
          </Link>
          <nav className="flex items-center gap-4">
            {/* Placeholder for future navigation links */}
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-4 sm:py-6 mt-auto">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400">
            © 2025 Projeto em Branco. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
