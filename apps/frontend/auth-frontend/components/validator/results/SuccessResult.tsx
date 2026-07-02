import { successTicketData } from "../data/validationMock";

interface SuccessResultProps {
  onReset: () => void;
}

export default function SuccessResult({ onReset }: SuccessResultProps) {
  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-6 rounded-xl border-2 border-green-500 bg-green-950/20 p-10 text-center shadow-[0_0_50px_rgba(34,197,94,0.2)]">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500 text-5xl text-black shadow-lg">
        ✓
      </div>

      <h2 className="text-4xl font-extrabold text-green-400">
        ACCESO PERMITIDO
      </h2>

      <div className="w-full rounded-lg border border-green-900/50 bg-[#1d2022]/70 p-6 text-left">
        <div className="grid grid-cols-2 gap-y-4">
          <span className="text-sm font-semibold text-[#ccc3d8]">
            Asistente:
          </span>
          <span className="font-bold text-[#e0e3e5]">
            {successTicketData.assistant}
          </span>

          <span className="text-sm font-semibold text-[#ccc3d8]">
            Zona:
          </span>
          <span className="font-bold text-[#e0e3e5]">
            {successTicketData.zone}
          </span>

          <span className="text-sm font-semibold text-[#ccc3d8]">
            Folio:
          </span>
          <span className="font-mono text-[#e0e3e5]">
            {successTicketData.folio}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-lg bg-green-500 py-4 text-lg font-bold text-black transition-colors hover:bg-green-400"
      >
        REINICIAR
      </button>
    </div>
  );
}
