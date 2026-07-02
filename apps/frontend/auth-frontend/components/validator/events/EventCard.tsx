import Link from "next/link";
import type { ValidatorEvent } from "../types/validatorEvent";

interface EventCardProps {
  event: ValidatorEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const progressWidth = `${event.metric.progress}%`;

  return (
    <article className="group flex min-h-[510px] flex-col overflow-hidden rounded-xl border border-[#4a4455] bg-[#1d2022] shadow-sm transition-all hover:border-[#d2bbff]/50">
      <div className="relative h-48 w-full overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url("${event.imageUrl}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1d2022] via-transparent to-transparent" />

        {event.badge && (
          <div
            className={[
              "absolute left-4 top-4 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-md",
              event.badge.tone === "primary"
                ? "border-[#d2bbff]/30 bg-[#d2bbff]/20 text-[#d2bbff]"
                : "border-[#b4c5ff]/30 bg-[#0053db]/50 text-[#cdd7ff]",
            ].join(" ")}
          >
            {event.badge.label}
          </div>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-[#e0e3e5]">
          {event.title}
        </h3>

        <div className="mb-2 flex items-center gap-2 text-[#ccc3d8]">
          <span className="text-sm">⌖</span>
          <span className="text-sm font-semibold tracking-wide">
            {event.venue}
          </span>
        </div>

        <div className="mb-6 flex items-center gap-2 text-[#ccc3d8]">
          <span className="text-sm">◷</span>
          <span className="text-sm font-semibold tracking-wide">
            {event.dateLabel}
          </span>
        </div>

        <div
          className={[
            "mt-auto border-t border-[#4a4455] pt-6",
            !event.metric.enabled ? "opacity-60" : "",
          ].join(" ")}
        >
          <div className="mb-3 flex items-end justify-between gap-4">
            <span className="text-sm font-semibold tracking-wide text-[#ccc3d8]">
              {event.metric.label}
            </span>

            <span
              className={[
                "font-mono text-sm",
                event.metric.enabled ? "text-[#d2bbff]" : "text-[#e0e3e5]",
              ].join(" ")}
            >
              {event.metric.value}
            </span>
          </div>

          <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-[#323537]">
            <div
              className={[
                "h-full rounded-full",
                event.metric.enabled ? "bg-[#d2bbff]" : "bg-[#d2bbff]/30",
              ].join(" ")}
              style={{ width: progressWidth }}
            />
          </div>

          {event.metric.enabled ? (
            <Link
              href="/validator"
              className={[
                "flex w-full items-center justify-center gap-4 rounded-lg py-4 text-sm font-semibold transition-all active:scale-95",
                event.status === "in-progress"
                  ? "bg-[#d2bbff] text-[#3f008e] hover:brightness-110"
                  : "bg-[#323537] text-[#e0e3e5] hover:bg-[#d2bbff] hover:text-[#3f008e]",
              ].join(" ")}
            >
              <span>⌗</span>
              <span>{event.metric.buttonLabel}</span>
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="flex w-full cursor-not-allowed items-center justify-center gap-4 rounded-lg bg-[#323537] py-4 text-sm font-semibold text-[#ccc3d8]"
            >
              <span>▣</span>
              <span>{event.metric.buttonLabel}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
