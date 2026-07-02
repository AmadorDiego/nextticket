interface ManualFolioFormProps {
  folio: string;
  onFolioChange: (value: string) => void;
  onValidate: () => void;
}

export default function ManualFolioForm({
  folio,
  onFolioChange,
  onValidate,
}: ManualFolioFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onValidate();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/10 bg-[#1e293b]/70 p-6 backdrop-blur-xl"
    >
      <label
        htmlFor="folio-input"
        className="mb-4 block text-sm font-semibold uppercase tracking-wide text-[#ccc3d8]"
      >
        Ingresar Folio Manualmente
      </label>

      <div className="flex flex-col gap-4 md:flex-row">
        <input
          id="folio-input"
          type="text"
          value={folio}
          onChange={(event) => onFolioChange(event.target.value)}
          placeholder="Ej: EVT-2024-99XJ"
          className="min-w-0 flex-1 rounded-lg border-2 border-[#4a4455] bg-[#1d2022] px-6 py-4 font-mono text-xl font-bold text-[#e0e3e5] outline-none transition-all placeholder:text-[#e0e3e5] focus:border-[#d2bbff]"
        />

        <button
          type="submit"
          className="rounded-lg bg-[#7c3aed] px-10 py-4 text-lg font-bold text-[#ede0ff] transition-all hover:brightness-110 active:scale-95"
        >
          Validar
        </button>
      </div>
    </form>
  );
}
