"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconPerson() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconWarning() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2 1 21h22L12 2zm0 6 6.5 11h-13L12 8zm-1 3v4h2v-4h-2zm0 5v2h2v-2h-2z" />
    </svg>
  );
}

function IconCheckCircle() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l2.5 2.5L16 9" />
    </svg>
  );
}

function IconArrowBack() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

function IconSeat() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M6 12V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
      <path d="M4 12h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3z" />
      <path d="M6 17v3M18 17v3" />
    </svg>
  );
}

function IconTicket() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M3 10a2 2 0 0 0 0 4v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 0 1 0-4V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3z" />
      <path strokeDasharray="2 3" d="M12 6v12" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function IconVerified() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M12 2l2.4 1.8 3-.4.9 2.9 2.7 1.4-.9 2.9.9 2.9-2.7 1.4-.9 2.9-3-.4L12 22l-2.4-1.8-3 .4-.9-2.9-2.7-1.4.9-2.9-.9-2.9 2.7-1.4.9-2.9 3 .4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
    </svg>
  );
}

// ─── Data (vendría del carrito / bloqueo temporal en un caso real) ───────────

const EVENT = {
  name: "Neon Genesis Tour 2024",
  category: "Concierto en Vivo",
  venue: "Arena Metropolitana, CDMX",
  date: "15 Oct, 20:30 hrs",
};

const SELECTED_SEATS = [
  { zone: "Zona VIP", label: "Fila A, Asiento 12", price: 1200 },
  { zone: "Zona VIP", label: "Fila A, Asiento 13", price: 1200 },
];

const formatMXN = (amount: number) =>
  amount.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ─── Stepper ──────────────────────────────────────────────────────────────────

function Stepper({ step }: { step: 1 | 2 | 3 }) {
  const steps = [
    { n: 1, label: "Select Seats" },
    { n: 2, label: "Checkout" },
    { n: 3, label: "Confirmación" },
  ];

  return (
    <div className="mb-xl max-w-2xl mx-auto">
      <div className="relative flex justify-between items-center">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -translate-y-1/2 z-0" />
        {steps.map(({ n, label }) => {
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CheckoutPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [processing, setProcessing] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [folio, setFolio] = useState("");

  const subtotal = SELECTED_SEATS.reduce((sum, seat) => sum + seat.price, 0);
  const serviceFee = 0;
  const total = subtotal + serviceFee;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Simula la consolidación de la orden en el backend (compra simulada).
    setTimeout(() => {
      setProcessing(false);
      setConfirmed(true);
      setFolio(`T-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1 pt-24 pb-xl px-gutter max-w-container-max mx-auto w-full">
        <Stepper step={confirmed ? 3 : 2} />

        {confirmed ? (
          <div className="max-w-[28rem] mx-auto bg-surface-container/70 border border-outline-variant/40 backdrop-blur-md p-lg rounded-xl text-center space-y-md">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/15 text-primary flex items-center justify-center">
              <IconCheckCircle />
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              ¡Compra simulada confirmada!
            </h2>
            <p className="text-on-surface-variant font-body-md">
              Folio: <span className="font-code-mono text-primary">{folio}</span>
            </p>
            <p className="text-on-surface-variant font-body-md">
              Tus boletos para <span className="text-on-surface">{EVENT.name}</span> ya están
              disponibles en “Mis Boletos”.
            </p>
            <a
              href="/checkout"
              className="inline-block w-full bg-primary-container hover:bg-primary-container/80 text-on-primary-container py-sm px-lg rounded-xl font-label-sm transition-all active:scale-95"
            >
              Ver mis boletos
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl mt-12">
            {/* Left Column: Checkout Form */}
            <div className="lg:col-span-7 space-y-lg">
              <section className="bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md p-lg rounded-xl">
                <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-sm">
                  <IconPerson />
                  Datos del Comprador
                </h2>
                <form onSubmit={handleConfirm} className="space-y-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">
                        Nombre Completo
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ej. Juan Pérez"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="bg-surface-container-low border-b-2 border-outline-variant focus:border-primary outline-none p-sm text-on-surface rounded-t-lg transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">
                        Correo Electrónico
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="juan.perez@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-surface-container-low border-b-2 border-outline-variant focus:border-primary outline-none p-sm text-on-surface rounded-t-lg transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">
                      Teléfono de Contacto
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+52 55 1234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-surface-container-low border-b-2 border-outline-variant focus:border-primary outline-none p-sm text-on-surface rounded-t-lg transition-all"
                    />
                  </div>

                  {/* Important Notice */}
                  <div className="bg-error-container/20 border border-error-container/40 p-md rounded-lg flex items-start gap-sm">
                    <span className="text-error mt-1">
                      <IconWarning />
                    </span>
                    <div>
                      <h4 className="font-bold text-error">Importante: COMPRA SIMULADA</h4>
                      <p className="font-body-md text-on-error-container/80 mt-base">
                        Esta es una COMPRA SIMULADA para propósitos de demostración. No se
                        realizará ningún cargo real ni se requieren datos bancarios. Los boletos
                        generados no tienen validez para eventos reales.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-sm">
                    <button
                      type="submit"
                      disabled={processing}
                      className="w-full bg-primary-container hover:bg-primary-container/80 disabled:opacity-60 text-on-primary-container py-md px-lg rounded-xl font-headline-md text-headline-md flex justify-center items-center gap-sm transition-all active:scale-95 shadow-lg shadow-primary/20"
                    >
                      {processing ? (
                        <>
                          <span className="w-5 h-5 border-2 border-on-primary-container/40 border-t-on-primary-container rounded-full animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          <IconCheckCircle />
                          Confirmar Compra Simulada
                        </>
                      )}
                    </button>
                    <a
                      href="#"
                      className="w-full text-on-surface-variant hover:text-primary transition-colors font-label-sm flex justify-center items-center gap-xs py-sm"
                    >
                      <IconArrowBack />
                      Regresar a la selección de asientos
                    </a>
                  </div>
                </form>
              </section>
            </div>

            {/* Right Column: Order Summary */}
            <aside className="lg:col-span-5">
              <div className="bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md rounded-xl overflow-hidden sticky top-24">
                <div className="relative h-48 bg-gradient-to-br from-primary-container to-secondary-container">
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent" />
                  <div className="absolute bottom-md left-md">
                    <span className="bg-primary text-on-primary text-[10px] uppercase font-bold px-xs py-1 rounded-full mb-xs inline-block">
                      {EVENT.category}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      {EVENT.name}
                    </h3>
                  </div>
                </div>

                <div className="p-lg space-y-md">
                  <div className="flex justify-between items-start border-b border-outline-variant pb-md">
                    <div>
                      <p className="text-on-surface-variant font-label-sm">Ubicación</p>
                      <p className="text-on-surface font-body-md">{EVENT.venue}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-on-surface-variant font-label-sm">Fecha</p>
                      <p className="text-on-surface font-body-md">{EVENT.date}</p>
                    </div>
                  </div>

                  <div className="space-y-sm">
                    <p className="text-on-surface-variant font-label-sm flex items-center gap-xs">
                      <IconTicket />
                      Asientos Seleccionados ({SELECTED_SEATS.length})
                    </p>
                    {SELECTED_SEATS.map((seat) => (
                      <div
                        key={seat.label}
                        className="flex justify-between items-center bg-surface-container/50 p-sm rounded-lg border border-outline-variant/30"
                      >
                        <div className="flex items-center gap-sm">
                          <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                            <IconSeat />
                          </div>
                          <div>
                            <p className="font-bold text-on-surface">{seat.zone}</p>
                            <p className="text-xs text-on-surface-variant">{seat.label}</p>
                          </div>
                        </div>
                        <p className="font-code-mono text-primary">${formatMXN(seat.price)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-md border-t border-outline-variant space-y-xs">
                    <div className="flex justify-between text-on-surface-variant font-body-md">
                      <span>Subtotal</span>
                      <span className="font-code-mono">${formatMXN(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant font-body-md">
                      <span>Cargos por servicio (Simulado)</span>
                      <span className="font-code-mono">${formatMXN(serviceFee)}</span>
                    </div>
                    <div className="flex justify-between text-on-surface font-headline-md pt-sm">
                      <span>Total a Pagar</span>
                      <span className="text-primary font-code-mono">${formatMXN(total)} MXN</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-md pt-md opacity-60">
                    <div className="flex items-center gap-xs">
                      <IconLock />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        SSL Secure
                      </span>
                    </div>
                    <div className="flex items-center gap-xs">
                      <IconVerified />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Verified Seller
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
