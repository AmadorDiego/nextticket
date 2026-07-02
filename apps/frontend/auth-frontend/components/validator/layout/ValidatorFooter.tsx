export default function ValidatorFooter() {
  return (
    <footer className="mt-auto border-t border-[#4a4455] bg-[#101415] px-6 py-8">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 text-[#ccc3d8] md:flex-row md:items-center md:justify-between">
        <p>© 2024 Sistema de Eventos y Boletos. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-[#d2bbff]">
            Support
          </a>
          <a href="#" className="transition-colors hover:text-[#d2bbff]">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
