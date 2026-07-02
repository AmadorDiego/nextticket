"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stepper from "@/components/Stepper";
import { IconCheckCircle, IconDownload, IconConfirmationNumber } from "@/components/icons";

// ─── Confetti (celebración al confirmar la compra) ───────────────────────────

function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const canvasCtx = canvasEl.getContext("2d");
    if (!canvasCtx) return;
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = canvasCtx;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height - canvas.height;
      size = Math.random() * 8 + 4;
      speedX = Math.random() * 2 - 1;
      speedY = Math.random() * 3 + 2;
      color = `hsl(${Math.random() * 60 + 260}, 100%, 75%)`;
      rotation = Math.random() * 360;
      rotationSpeed = Math.random() * 10 - 5;

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    let particles: Particle[] = [];
    let raf: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.y > canvas.height) particles.splice(i, 1);
      });
      if (particles.length > 0) raf = requestAnimationFrame(animate);
    };

    const timeout = setTimeout(() => {
      particles = Array.from({ length: 150 }, () => new Particle());
      animate();
    }, 400);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

// ─── Contenido (lee los datos de la compra desde la query string) ───────────

function ConfirmationContent() {
  const params = useSearchParams();

  const folio = params.get("folio") ?? "EVT-0000-X";
  const event = params.get("event") ?? "Neon Genesis Tour 2024";
  const date = params.get("date") ?? "15 de Octubre, 2024";
  const time = params.get("time") ?? "20:30 HRS";
  const venue = params.get("venue") ?? "Arena Metropolitana, CDMX";
  const zone = params.get("zone") ?? "VIP";
  const row = params.get("row") ?? "A";
  const seat = params.get("seat") ?? "12";

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary selection:text-on-primary relative">
      <Confetti />
      <Navbar />

      <main className="flex-1 pt-24 pb-xl px-gutter max-w-container-max mx-auto w-full relative z-10">
        <Stepper step={3} />

        <div className="text-center mb-lg">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container text-on-primary-container mb-sm shadow-lg shadow-primary/20">
            <IconCheckCircle className="w-10 h-10" />
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-xs">
            ¡Compra Exitosa!
          </h1>
          <p className="text-on-surface-variant font-body-lg">
            Tu reserva ha sido confirmada. ¡Prepárate para la experiencia!
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start max-w-4xl mx-auto">
          {/* Main Ticket Column */}
          <div className="lg:col-span-8 flex flex-col gap-gutter">
            <div className="bg-surface-container-high rounded-xl border border-outline-variant relative overflow-hidden">
              <div className="p-lg flex flex-col md:flex-row gap-lg">
                <div className="w-full md:w-1/3 aspect-[3/4] rounded-lg overflow-hidden shrink-0 border border-outline-variant/30 bg-gradient-to-br from-primary-container to-secondary-container" />

                <div className="flex-grow flex flex-col justify-between py-xs">
                  <div>
                    <div className="flex justify-between items-start mb-sm gap-sm">
                      <h2 className="font-headline-md text-headline-md text-on-surface leading-tight">
                        {event}
                      </h2>
                      <span className="bg-primary/10 text-primary px-sm py-1 rounded-full font-label-sm border border-primary/20 whitespace-nowrap">
                        CONFIRMADO
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-sm gap-x-md">
                      <div>
                        <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">
                          Fecha
                        </p>
                        <p className="font-body-md font-bold">{date}</p>
                      </div>
                      <div>
                        <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">
                          Hora
                        </p>
                        <p className="font-body-md font-bold">{time}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">
                          Recinto
                        </p>
                        <p className="font-body-md font-bold">{venue}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-lg pt-md border-t border-dashed border-outline-variant flex flex-wrap justify-between items-end gap-sm">
                    <div className="grid grid-cols-3 gap-md">
                      <div>
                        <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">
                          Zona
                        </p>
                        <p className="font-body-md font-bold">{zone}</p>
                      </div>
                      <div>
                        <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">
                          Fila
                        </p>
                        <p className="font-body-md font-bold">{row}</p>
                      </div>
                      <div>
                        <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">
                          Asiento
                        </p>
                        <p className="font-body-md font-bold">{seat}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">
                        Folio
                      </p>
                      <p className="font-code-mono text-primary font-bold">#{folio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
              <button className="flex items-center justify-center gap-xs bg-primary-container text-on-primary-container py-md px-sm rounded-lg font-label-sm hover:brightness-110 active:scale-95 transition-all shadow-md">
                <IconDownload />
                Descargar Boleto (PDF)
              </button>
              <Link
                href="/mis-boletos"
                className="flex items-center justify-center gap-xs bg-surface-container-highest text-on-surface py-md px-sm rounded-lg font-label-sm border border-outline-variant hover:bg-surface-variant active:scale-95 transition-all"
              >
                <IconConfirmationNumber />
                Ver en Mis Boletos
              </Link>
            </div>
          </div>

          {/* Side Column */}
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            <div className="h-48 rounded-xl overflow-hidden border border-outline-variant bg-surface-container-high" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ConfirmacionPage() {
  return (
    <Suspense fallback={null}>
      <ConfirmationContent />
    </Suspense>
  );
}
