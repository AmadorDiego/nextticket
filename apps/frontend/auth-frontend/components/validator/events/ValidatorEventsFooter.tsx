export default function ValidatorEventsFooter() {
  return (
    <footer className="mx-auto mt-20 flex w-full max-w-[1280px] flex-col items-start justify-between gap-6 border-t border-[#4a4455] px-6 py-10 md:flex-row md:items-center">
      <div>
        <span className="text-2xl font-bold text-[#d2bbff]">
          Boletos
        </span>
        <p className="mt-2 text-[#ccc3d8]">
          © 2024 Sistema de Eventos y Boletos. All rights reserved.
        </p>
      </div>

      <div className="flex flex-wrap gap-8">
        <a href="#" className="text-[#ccc3d8] transition-colors hover:text-[#d2bbff]">
          Privacy Policy
        </a>
        <a href="#" className="text-[#ccc3d8] transition-colors hover:text-[#d2bbff]">
          Terms of Service
        </a>
        <a href="#" className="text-[#ccc3d8] transition-colors hover:text-[#d2bbff]">
          Support
        </a>
        <a href="#" className="text-[#ccc3d8] transition-colors hover:text-[#d2bbff]">
          Contact Us
        </a>
      </div>
    </footer>
  );
}
