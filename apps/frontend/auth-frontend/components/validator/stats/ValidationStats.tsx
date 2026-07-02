import { validationStats } from "../data/validationMock";

interface ValidationStatsProps {
  onRejectedClick: () => void;
}

export default function ValidationStats({ onRejectedClick }: ValidationStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 opacity-90 md:grid-cols-3">
      {validationStats.map((stat) => {
        const isDanger = stat.tone === "danger";

        return (
          <button
            key={stat.label}
            type="button"
            onClick={isDanger ? onRejectedClick : undefined}
            className={[
              "rounded-lg border border-[#4a4455] bg-[#1d2022] p-6 text-center transition-colors",
              isDanger ? "cursor-pointer hover:bg-[#272a2c]" : "cursor-default",
            ].join(" ")}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#ccc3d8]">
              {stat.label}
            </p>

            <p
              className={[
                "text-3xl font-extrabold",
                stat.tone === "primary" && "text-[#d2bbff]",
                stat.tone === "danger" && "text-red-400",
                stat.tone === "default" && "text-[#e0e3e5]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {stat.value}
            </p>
          </button>
        );
      })}
    </div>
  );
}
