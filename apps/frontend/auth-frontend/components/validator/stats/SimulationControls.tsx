import type { ValidationResultType } from "../types/validation";

interface SimulationControlsProps {
  onSimulate: (result: ValidationResultType) => void;
}

export default function SimulationControls({ onSimulate }: SimulationControlsProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border-t border-[#4a4455] pt-10 md:flex-row">
      <p className="text-sm font-semibold text-[#958da1]">
        Simular Escaneo:
      </p>

      <button
        type="button"
        onClick={() => onSimulate("success")}
        className="rounded border border-green-400/30 px-5 py-2 text-xs font-bold text-green-400 transition-colors hover:bg-green-400/10"
      >
        ÉXITO
      </button>

      <button
        type="button"
        onClick={() => onSimulate("rejected")}
        className="rounded border border-red-400/30 px-5 py-2 text-xs font-bold text-red-400 transition-colors hover:bg-red-400/10"
      >
        YA USADO
      </button>

      <button
        type="button"
        onClick={() => onSimulate("invalid")}
        className="rounded border border-yellow-400/30 px-5 py-2 text-xs font-bold text-yellow-400 transition-colors hover:bg-yellow-400/10"
      >
        INVÁLIDO
      </button>
    </div>
  );
}
