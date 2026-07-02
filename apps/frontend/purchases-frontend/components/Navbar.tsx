import Link from "next/link";

function IconMenu() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface dark:bg-surface-container shadow-sm h-16">
      <div className="max-w-container-max mx-auto px-gutter h-full flex justify-between items-center">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          Sistema de Eventos y Boletos
        </div>
        <nav className="hidden md:flex items-center gap-lg">
          <Link
            href="/"
            className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md"
          >
            Events
          </Link>
          <Link
            href="/checkout"
            className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
          >
            My Tickets
          </Link>
          <button className="bg-primary-container text-on-primary-container px-sm py-xs rounded-lg font-label-sm active:scale-95 transition-transform">
            Login
          </button>
        </nav>
        <button className="md:hidden text-primary" aria-label="Abrir menú">
          <IconMenu />
        </button>
      </div>
    </header>
  );
}
