"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-8">
      <div className="max-w-[1360px] mx-auto px-2 sm:px-4">
        <div className="relative rounded-[26px] overflow-hidden border border-white/10 bg-[#11151b] bg-gradient-to-r from-[#2f33a6]/15 via-[#1f2335]/25 to-[#11151b]/95 px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-5 shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
          {/* Texto */}
          <div className="z-10 text-center md:text-left">
            <h2 className="font-extrabold text-xl sm:text-2xl tracking-tight text-white mb-1">
              No te pierdas de nada
            </h2>

            <p className="text-[#c3cbf7] text-xs sm:text-sm leading-snug max-w-md">
              Suscríbete para recibir preventas exclusivas y anuncios antes que
              nadie.
            </p>
          </div>

          {/* Formulario */}
          <div className="z-10 w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/8 border border-white/10 rounded-xl px-2.5 py-1.5 text-sm text-white placeholder:text-white/60 focus:ring-2 focus:ring-[#7c3aed]/70 outline-none"
              />

              <button
                className="bg-[#7c3aed] text-white font-semibold px-3.5 py-1.5 rounded-xl hover:brightness-110 transition-all whitespace-nowrap text-sm"
                onClick={() => setEmail("")}
              >
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}