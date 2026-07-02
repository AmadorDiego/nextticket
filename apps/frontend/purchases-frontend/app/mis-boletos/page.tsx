"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  IconCalendar,
  IconLocation,
  IconSeat,
  IconArrowForward,
  IconHistory,
  IconReceiptLong,
  IconConfirmationNumber,
} from "@/components/icons";

type TicketStatus = "valido" | "usado" | "cancelado";
type TicketCategory = "upcoming" | "past";

type Ticket = {
  id: string;
  title: string;
  status: TicketStatus;
  category: TicketCategory;
  date: string;
  location: string;
  seatInfo: string;
};

const TICKETS: Ticket[] = [
  {
    id: "neon-genesis",
    title: "Neon Genesis Live Tour",
    status: "valido",
    category: "upcoming",
    date: "15 de Octubre, 2024 • 20:00 PM",
    location: "Arena Digital, Ciudad de México",
    seatInfo: "Zona: VIP Gold • Asiento: A-24",
  },
  {
    id: "midnight-jazz",
    title: "Midnight Jazz Collective",
    status: "usado",
    category: "past",
    date: "02 de Septiembre, 2024",
    location: "The Blue Note Venue",
    seatInfo: "Zona: General • Mesa 12",
  },
  {
    id: "tech-summit",
    title: "Tech Summit 2024",
    status: "cancelado",
    category: "past",
    date: "20 de Agosto, 2024",
    location: "Convention Center X",
    seatInfo: "Pass: Full Access",
  },
  {
    id: "final-cup",
    title: "Final Cup 2024",
    status: "valido",
    category: "upcoming",
    date: "12 de Noviembre, 2024",
    location: "Estadio Nacional",
    seatInfo: "Zona: Norte • Asiento: B-105",
  },
];

const STATUS_BADGE: Record<TicketStatus, string> = {
  valido: "bg-green-500/10 text-green-400 border border-green-500/30",
  usado: "bg-surface-variant text-on-surface-variant border border-outline-variant",
  cancelado: "bg-error-container text-on-error-container border border-error/30",
};

const STATUS_LABEL: Record<TicketStatus, string> = {
  valido: "Válido",
  usado: "Usado",
  cancelado: "Cancelado",
};

const FILTERS = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

export default function MisBoletosPage() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const visibleTickets = useMemo(
    () => TICKETS.filter((t) => filter === "all" || t.category === filter),
    [filter],
  );

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1 pt-24 pb-xl px-gutter max-w-container-max mx-auto w-full">
        <section className="mb-lg">
          <div className="mb-md">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-xs">
              Mis Boletos
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Gestiona tus entradas para los próximos eventos y revive tus experiencias pasadas.
            </p>
          </div>

          <div className="flex items-center gap-base p-base bg-surface-container rounded-xl w-fit">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-md py-xs rounded-lg font-label-sm text-label-sm transition-all active:scale-95 ${
                  filter === key
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {visibleTickets.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {visibleTickets.map((ticket) => (
              <div
                key={ticket.id}
                className={`bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md rounded-xl overflow-hidden flex flex-col sm:flex-row relative transition-all duration-300 ${
                  ticket.status === "cancelado"
                    ? "opacity-70"
                    : ticket.status === "usado"
                    ? "opacity-70 hover:opacity-100"
                    : "hover:shadow-[0_0_20px_rgba(210,187,255,0.15)]"
                }`}
              >
                <div
                  className={`w-full sm:w-48 h-40 sm:h-auto shrink-0 bg-gradient-to-br from-primary-container to-secondary-container ${
                    ticket.status !== "valido" ? "grayscale" : ""
                  }`}
                />
                <div className="flex-1 p-md flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-sm mb-xs">
                      <h3
                        className={`font-headline-md text-headline-md text-on-surface ${
                          ticket.status === "cancelado" ? "line-through text-on-surface-variant" : ""
                        }`}
                      >
                        {ticket.title}
                      </h3>
                      <span
                        className={`px-sm py-[2px] rounded-full text-[12px] font-bold uppercase tracking-wider whitespace-nowrap ${STATUS_BADGE[ticket.status]}`}
                      >
                        {STATUS_LABEL[ticket.status]}
                      </span>
                    </div>
                    <div className="space-y-base text-on-surface-variant font-body-md text-body-md">
                      <div className="flex items-center gap-xs">
                        <IconCalendar />
                        <span>{ticket.date}</span>
                      </div>
                      <div className="flex items-center gap-xs">
                        <IconLocation />
                        <span>{ticket.location}</span>
                      </div>
                      <div className="flex items-center gap-xs">
                        <IconSeat />
                        <span>{ticket.seatInfo}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-md flex justify-end">
                    {ticket.status === "cancelado" ? (
                      <button className="flex items-center gap-xs text-error font-label-sm text-label-sm hover:underline transition-all">
                        Ver Reembolso
                        <IconReceiptLong />
                      </button>
                    ) : ticket.status === "usado" ? (
                      <button className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-all">
                        Ver Detalle
                        <IconHistory />
                      </button>
                    ) : (
                      <button className="flex items-center gap-xs text-primary font-label-sm text-label-sm hover:underline transition-all">
                        Ver Detalle
                        <IconArrowForward />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-xl text-center">
            <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center mb-md">
              <IconConfirmationNumber className="w-12 h-12 text-on-surface-variant" />
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">
              No tienes boletos todavía
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[28rem] mx-auto mb-lg">
              ¡Parece que aún no has comprado entradas para ningún evento! Explora nuestra
              cartelera y vive experiencias increíbles.
            </p>
            <Link
              href="/"
              className="px-xl py-sm bg-primary text-on-primary font-label-sm text-label-sm rounded-full transition-all hover:shadow-[0_0_20px_rgba(210,187,255,0.4)] active:scale-95 inline-block"
            >
              Explorar Eventos
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
