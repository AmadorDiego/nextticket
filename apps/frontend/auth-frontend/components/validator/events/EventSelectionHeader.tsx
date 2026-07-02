interface EventSelectionHeaderProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
}

export default function EventSelectionHeader({
  searchTerm,
  onSearchTermChange,
}: EventSelectionHeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex flex-col gap-6 border-b border-[#4a4455] bg-[#101415]/80 px-6 py-6 backdrop-blur-md md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-[#e0e3e5]">
          Selección de Evento
        </h2>
        <p className="mt-1 text-base text-[#ccc3d8]">
          Seleccione el evento para iniciar a validar los tickets. Puede buscar un evento por nombre o filtrar por fecha.
        </p>
      </div>

      <div className="group relative w-full max-w-md">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[#ccc3d8] transition-colors group-focus-within:text-[#d2bbff]">
          ⌕
        </span>

        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchTermChange(event.target.value)}
          placeholder="Buscar evento por nombre..."
          className="w-full rounded-xl border-none bg-[#272a2c] py-4 pl-14 pr-6 text-[#e0e3e5] outline-none transition-all placeholder:text-[#ccc3d8] focus:ring-2 focus:ring-[#d2bbff]"
        />
      </div>
    </header>
  );
}
