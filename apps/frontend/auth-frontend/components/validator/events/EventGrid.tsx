import type { ValidatorEvent } from "../types/validatorEvent";
import EventCard from "./EventCard";

interface EventGridProps {
  events: ValidatorEvent[];
}

export default function EventGrid({ events }: EventGridProps) {
  if (events.length === 0) {
    return (
      <div className="rounded-xl border border-[#4a4455] bg-[#1d2022] p-10 text-center">
        <h3 className="text-xl font-bold text-[#e0e3e5]">
          No se encontraron eventos
        </h3>
        <p className="mt-2 text-[#ccc3d8]">
          Intenta cambiar el filtro o buscar con otro nombre.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
