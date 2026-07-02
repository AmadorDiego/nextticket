"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stepper from "@/components/Stepper";
import {
  IconPerson,
  IconWarning,
  IconCheckCircle,
  IconArrowBack,
  IconSeat,
  IconTicket,
  IconLock,
  IconVerified,
} from "@/components/icons";

// ─── Data (vendría del carrito / bloqueo temporal en un caso real) ───────────

const EVENT = {
  name: "Neon Genesis Tour 2024",
  category: "Concierto en Vivo",
  venue: "Arena Metropolitana, CDMX",
  date: "15 Oct, 20:30 hrs",
  time: "20:30 HRS",
};

const SELECTED_SEATS = [
  { zone: "Zona VIP", row: "A", seat: "12", price: 1200 },
  { zone: "Zona VIP", row: "A", seat: "13", price: 1200 },
];

const formatMXN = (amount: number) =>
  amount.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CheckoutPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [processing, setProcessing] = useState(false);

  const subtotal = SELECTED_SEATS.reduce((sum, seat) => sum + seat.price, 0);
  const serviceFee = 0;
  const total = subtotal + serviceFee;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Simula la consolidación de la orden en el backend (compra simulada).
    setTimeout(() => {
      const folio = `EVT-${Math.random().toString().slice(2, 6)}-${Math.random()
        .toString(36)
        .slice(2, 3)
        .toUpperCase()}`;
      const params = new URLSearchParams({
        folio,
        event: EVENT.name,
        date: "15 de Octubre, 2024",
        time: EVENT.time,
        venue: EVENT.venue,
        zone: SELECTED_SEATS[0].zone.replace("Zona ", ""),
        row: SELECTED_SEATS[0].row,
        seat: SELECTED_SEATS[0].seat,
      });
      router.push(`/checkout/confirmacion?${params.toString()}`);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-1 pt-24 pb-xl px-gutter max-w-container-max mx-auto w-full">
        <Stepper step={2} />

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
                      key={`${seat.row}-${seat.seat}`}
                      className="flex justify-between items-center bg-surface-container/50 p-sm rounded-lg border border-outline-variant/30"
                    >
                      <div className="flex items-center gap-sm">
                        <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                          <IconSeat />
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">{seat.zone}</p>
                          <p className="text-xs text-on-surface-variant">
                            Fila {seat.row}, Asiento {seat.seat}
                          </p>
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
      </main>

      <Footer />
    </div>
  );
}
