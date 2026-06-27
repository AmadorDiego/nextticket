"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Aurora background canvas ────────────────────────────────────────────────

function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Aurora orbs config
    const orbs = [
      { x: 0.2, y: 0.3, r: 0.55, color: "124,58,237",  speed: 0.00018 },
      { x: 0.8, y: 0.6, r: 0.50, color: "0,83,219",    speed: 0.00022 },
      { x: 0.5, y: 0.8, r: 0.45, color: "167,139,250", speed: 0.00015 },
      { x: 0.1, y: 0.7, r: 0.40, color: "88,28,220",   speed: 0.00020 },
    ];

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      t += 1;

      ctx.clearRect(0, 0, w, h);

      orbs.forEach((orb, i) => {
        const angle = t * orb.speed * Math.PI * 2 + i * 1.2;
        const px = (orb.x + Math.sin(angle) * 0.18) * w;
        const py = (orb.y + Math.cos(angle * 0.7) * 0.14) * h;
        const radius = orb.r * Math.min(w, h);

        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius);
        grad.addColorStop(0,   `rgba(${orb.color}, 0.22)`);
        grad.addColorStop(0.4, `rgba(${orb.color}, 0.10)`);
        grad.addColorStop(1,   `rgba(${orb.color}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(px, py, radius * 1.3, radius * 0.8, angle * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconMail() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  );
}

function IconEyeOff() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconPerson() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconAdmin() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7L2 9l7-1 3-6z" />
    </svg>
  );
}

function IconQr() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h2v2h-2zM18 14h3M14 18h3M20 18v3M14 21h3" />
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

type UserType = "cliente" | "admin" | "validador";

const USER_TYPES: { key: UserType; label: string; icon: React.ReactNode }[] = [
  { key: "cliente",   label: "Cliente",   icon: <IconPerson /> },
  { key: "admin",     label: "Admin",     icon: <IconAdmin /> },
  { key: "validador", label: "Validador", icon: <IconQr /> },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LoginPage() {
  const [userType, setUserType]         = useState<UserType>("cliente");
  const [email, setEmail]               = useState("");
  const [password, setPassword]         = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#101415] text-[#e0e3e5] font-sans selection:bg-[#7c3aed] selection:text-[#ede0ff] min-h-screen flex flex-col">

      {/* Aurora animated background */}
      <AuroraBackground />

      <Navbar scrolled={false} hideActions />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-10">

        {/* Glass card */}
        <div
          className="w-full max-w-sm rounded-2xl shadow-2xl p-6"
          style={{
            background: "rgba(16, 20, 30, 0.72)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(167, 139, 250, 0.15)",
            boxShadow: "0 0 0 1px rgba(124,58,237,0.08), 0 24px 48px rgba(0,0,0,0.5)",
          }}
        >
          {/* Brand — inside card */}
          <div className="text-center mb-5 pb-5 border-b border-white/[0.06]">
            <h1 className="text-[#d2bbff] font-bold text-lg tracking-tight mb-1">
              Inicio de sesión
            </h1>
            <p className="text-[#5a5068] text-xs">
              Accede a tu cuenta para gestionar tus eventos
            </p>
          </div>

          {/* User type selector */}
          <div className="mb-5">
            <label className="text-[#8a8496] text-[10px] font-bold tracking-[0.1em] uppercase block mb-2">
              Tipo de usuario
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {USER_TYPES.map(({ key, label, icon }) => {
                const isActive = userType === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setUserType(key)}
                    className="py-2 px-1 rounded-lg text-[11px] font-bold transition-all duration-150 active:scale-95 flex flex-col items-center justify-center gap-1"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #7c3aed 0%, #4f35c7 100%)"
                        : "rgba(255,255,255,0.04)",
                      color:      isActive ? "#ede0ff" : "#6b6080",
                      border:     isActive ? "1px solid rgba(167,139,250,0.6)" : "1px solid rgba(255,255,255,0.06)",
                      boxShadow:  isActive ? "0 0 14px rgba(124,58,237,0.35)" : "none",
                    }}
                  >
                    {icon}
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.05] mb-5" />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div className="group">
              <label
                htmlFor="email"
                className="text-[#6b6080] text-[10px] font-bold tracking-[0.1em] uppercase block mb-1.5 transition-colors group-focus-within:text-[#a78bfa]"
              >
                Correo electrónico
              </label>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#6b6080] group-focus-within:text-[#a78bfa] transition-colors">
                  <IconMail />
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="nombre@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-white/[0.08] pl-6 py-1.5 text-sm text-[#e0e3e5] placeholder:text-[#3d3650] outline-none transition-all focus:border-[#7c3aed]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <div className="flex justify-between items-center mb-1.5">
                <label
                  htmlFor="password"
                  className="text-[#6b6080] text-[10px] font-bold tracking-[0.1em] uppercase transition-colors group-focus-within:text-[#a78bfa]"
                >
                  Contraseña
                </label>
                <a href="#" className="text-[#7c5cbf] text-[11px] hover:text-[#d2bbff] transition-colors">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#6b6080] group-focus-within:text-[#a78bfa] transition-colors">
                  <IconLock />
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-white/[0.08] pl-6 pr-8 py-1.5 text-sm text-[#e0e3e5] placeholder:text-[#3d3650] outline-none transition-all focus:border-[#7c3aed]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[#6b6080] hover:text-[#ccc3d8] transition-colors"
                >
                  {showPassword ? <IconEye /> : <IconEyeOff />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg font-bold text-sm text-white uppercase tracking-[0.15em] transition-all duration-200 mt-1"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #0053db 100%)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.12)";
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(124,58,237,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(124,58,237,0.4)";
              }}
            >
              Ingresar
            </button>
          </form>

          {/* Sign up */}
          <div className="mt-4 pt-4 text-center border-t border-white/[0.05]">
            <p className="text-[#4a4060] text-xs">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="text-[#a78bfa] font-semibold hover:text-[#d2bbff] transition-colors ml-0.5">
                Regístrate
              </a>
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}