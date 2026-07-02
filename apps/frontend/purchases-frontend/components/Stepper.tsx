import { IconCheck } from "@/components/icons";

const STEPS: { n: 1 | 2 | 3; label: string }[] = [
  { n: 1, label: "Seleccionar asientos" },
  { n: 2, label: "Checkout" },
  { n: 3, label: "Confirmación" },
];

export default function Stepper({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="mb-xl max-w-2xl mx-auto">
      <div className="relative flex justify-between items-center">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -translate-y-1/2 z-0" />
        {STEPS.map(({ n, label }) => {
          const done = n < step;
          const active = n === step;
          return (
            <div key={n} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  done
                    ? "bg-secondary-container text-on-secondary-container"
                    : active
                    ? "bg-primary text-on-primary shadow-[0_0_15px_rgba(210,187,255,0.4)]"
                    : "bg-surface-container-highest border border-outline-variant text-on-surface-variant"
                }`}
              >
                {done ? <IconCheck /> : n}
              </div>
              <span
                className={`absolute top-12 font-label-sm text-label-sm whitespace-nowrap ${
                  active ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
