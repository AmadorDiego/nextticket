export default function TicketScanner() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border-2 border-[#4a4455] bg-[#272a2c] shadow-2xl md:aspect-[21/9]">
      <div className="validator-scanner-line absolute inset-x-0 z-20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.45),_rgba(16,20,21,0.95)_65%)]" />
      </div>

      <div className="absolute left-8 top-8 z-30 h-12 w-12 rounded-tl-lg border-l-4 border-t-4 border-[#d2bbff]" />
      <div className="absolute right-8 top-8 z-30 h-12 w-12 rounded-tr-lg border-r-4 border-t-4 border-[#d2bbff]" />
      <div className="absolute bottom-8 left-8 z-30 h-12 w-12 rounded-bl-lg border-b-4 border-l-4 border-[#d2bbff]" />
      <div className="absolute bottom-8 right-8 z-30 h-12 w-12 rounded-br-lg border-b-4 border-r-4 border-[#d2bbff]" />

      <div className="z-30 flex flex-col items-center gap-2 rounded-full bg-black/50 px-6 py-4 text-[#d2bbff] backdrop-blur-md">
        <span className="text-2xl">▣</span>
        <span className="text-sm font-semibold uppercase tracking-[0.3em]">
          Escaneando...
        </span>
      </div>
    </div>
  );
}
