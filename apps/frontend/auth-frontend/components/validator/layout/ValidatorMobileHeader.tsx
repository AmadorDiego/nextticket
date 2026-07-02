export default function ValidatorMobileHeader() {
  return (
    <header className="flex items-center justify-between border-b border-[#4a4455] bg-[#191c1e] px-6 py-4 md:hidden">
      <span className="text-xl font-bold text-[#d2bbff]">Validator</span>
      <button
        type="button"
        className="rounded-lg border border-[#4a4455] px-3 py-2 text-[#e0e3e5]"
        aria-label="Abrir menú"
      >
        ☰
      </button>
    </header>
  );
}
