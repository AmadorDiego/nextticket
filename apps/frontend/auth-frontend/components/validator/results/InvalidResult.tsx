interface InvalidResultProps {
  onReset: () => void;
}

export default function InvalidResult({ onReset }: InvalidResultProps) {
  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-6 rounded-xl border-2 border-yellow-500 bg-[#272a2c] p-10 text-center shadow-[0_0_50px_rgba(234,179,8,0.1)]">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500 text-5xl text-black shadow-lg">
        !
      </div>

      <h2 className="text-4xl font-extrabold text-yellow-500">
        FOLIO NO ENCONTRADO
      </h2>

      <p className="text-[#ccc3d8]">
        Verifique los dígitos ingresados e intente nuevamente.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-lg bg-yellow-500 py-4 text-lg font-bold text-black transition-colors hover:bg-yellow-400"
      >
        REINTENTAR
      </button>
    </div>
  );
}
