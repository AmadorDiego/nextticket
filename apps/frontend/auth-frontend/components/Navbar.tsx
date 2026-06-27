import Link from "next/link";

type NavbarProps = {
  scrolled: boolean;
  hideActions?: boolean;
};

export default function Navbar({ scrolled, hideActions = false }: NavbarProps) {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-16 transition-all duration-300 bg-[#101415]/80 backdrop-blur-md ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <nav className="w-full h-full px-0 flex justify-between items-center">
        <div className="flex items-center gap-16 pl-4">
          <span className="text-[#d2bbff] font-bold text-lg tracking-tight">
            Next-Ticket
          </span>
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-[#d2bbff] font-semibold border-b-2 border-[#d2bbff] pb-0.5 text-sm"
            >
              Eventos
            </Link>
            <a
              href="#"
              className="text-[#ccc3d8] hover:text-[#e0e3e5] transition-colors text-sm"
            >
              Espacios
            </a>
            <a
              href="#"
              className="text-[#ccc3d8] hover:text-[#e0e3e5] transition-colors text-sm"
            >
              Mis tickets
            </a>
          </div>
        </div>

        {!hideActions && (
          <div className="flex items-center gap-6 pr-4">
            <div className="relative hidden lg:block">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ccc3d8] w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar eventos..."
                className="bg-[#323537] border-none rounded-full py-1.5 pl-10 pr-4 text-sm text-[#e0e3e5] focus:ring-2 focus:ring-[#d2bbff] w-64 outline-none"
              />
            </div>
            <Link href="/login">
              <button className="px-4 py-2 bg-[#7c3aed] text-[#ede0ff] rounded-lg text-sm font-semibold active:scale-95 transition-transform">
                Login
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}