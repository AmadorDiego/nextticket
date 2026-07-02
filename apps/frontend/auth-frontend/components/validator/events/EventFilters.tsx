import type { ValidatorEventFilter } from "../types/validatorEvent";

interface EventFiltersProps {
  activeFilter: ValidatorEventFilter;
  onFilterChange: (filter: ValidatorEventFilter) => void;
}

const filters: {
  label: string;
  value: ValidatorEventFilter;
}[] = [
  {
    label: "Hoy",
    value: "today",
  },
  {
    label: "Mañana",
    value: "tomorrow",
  },
  {
    label: "Todos los Eventos",
    value: "all",
  },
];

export default function EventFilters({
  activeFilter,
  onFilterChange,
}: EventFiltersProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-4">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onFilterChange(filter.value)}
            className={[
              "rounded-full px-6 py-3 text-sm font-semibold transition-all active:scale-95",
              isActive
                ? "bg-[#d2bbff] text-[#3f008e] hover:brightness-110"
                : "bg-[#272a2c] text-[#ccc3d8] hover:bg-[#323537] hover:text-[#e0e3e5]",
            ].join(" ")}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
