import { rejectedTicketData } from "../data/validationMock";

interface RejectedResultProps {
  onReset: () => void;
}

export default function RejectedResult({ onReset }: RejectedResultProps) {
  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-6 rounded-xl border-2 border-red-500 bg-red-950/20 p-10 text-center shadow-[0_0_50px_rgba(239,68,68,0.2)]">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-500 text-5xl text-white shadow-lg">
        ×
      </div>

      <h2 className="text-4xl font-extrabold text-red-400">
        BOLETO YA USADO
      </h2>

      <p className="text-[#ccc3d8]">
        {rejectedTicketData.message}
      </p>

      <div className="w-full rounded-lg border border-red-900/50 bg-[#1d2022]/70 p-6 text-left">
        <div className="flex justify-between gap-4">
          <span className="text-sm font-semibold text-[#ccc3d8]">
            Ubicación:
          </span>
          <span className="font-bold text-[#e0e3e5]">
            {rejectedTicketData.location}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-lg bg-red-500 py-4 text-lg font-bold text-white transition-colors hover:bg-red-400"
      >
        REINICIAR
      </button>
    </div>
  );
}
