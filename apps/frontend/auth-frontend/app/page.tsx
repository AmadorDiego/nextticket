"use client";
import { useState, useEffect } from "react";
import fondo1 from "./img/fondo1.png";

// ─── Types ────────────────────────────────────────────────────────────────────

interface EventCard {
  id: number;
  category: string;
  title: string;
  location: string;
  image: string;
}

interface BentoCard {
  id: number;
  category: string;
  title: string;
  description?: string;
  date?: string;
  image: string;
  colSpan?: string;
  rowSpan?: string;
  height?: string;
  large?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const bentoEvents: BentoCard[] = [
  {
    id: 1,
    category: "Concierto",
    title: "Starlight World Tour",
    description: "Una experiencia audiovisual sin precedentes en el Estadio Nacional. Luces, sonido y emoción.",
    date: "15 OCT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnrcFFRGxvUgZq-VEl8NmcN5VQmiC1wBjLA40aax81S1hMM_yQNj27PsVcPgIKEhj2m4m9zSLvabomBg1-8zq37a4jWjJl21zQBo26Ae0p3-zXPKz7vHqdbLP9XBYd-M92-yYIIN7TH51xwec6MuIKBe794W5Ew99bHtmuT02mJLHRwSEmO7CrAUFNjUdBVCm9PHofJJlg2d-bpqaJPhabAvkrprkBnvHxmzwH2eiMrHpHktUnoIc9nWPhieJ3tlYJ3CTrB_kQRE0d",
    large: true,
  },
  {
    id: 2,
    category: "Deportes",
    title: "Final Basketball 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8VfcR-bfih67GmyOf8In1Ofekl0Vu2RzrjDNUsCUjz5bGyPSpJmqNmewsHIxHoiI_hFv2oQxy7K-c8BXMnnULxiBYNEx1O1aj2df38wBxPHiihO7YEchweem4U3_k4VOtRPumbNVZ5Pe1yPUDg0h53ukx2mrK9mzBb0P7kFGdtu6JS_ijvdz_-dKJlYMDH9_jxsdnZbPop1ezzvZB3Gb-VcMIfDd8UihQxd25ZVvnTmD9tvzZ1sc6ePTOn5v5GReJGgXQ64sfCdBK",
  },
  {
    id: 3,
    category: "Teatro",
    title: "El Gran Misterio",
    image: "https://www.cultura.cdmx.gob.mx/storage/app/media/uploaded-files/25902d3928cb99b8e1c48970226dd672.png",
  },
  {
    id: 4,
    category: "Festivales",
    title: "Summer Beats Festival",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2cpWLCZoXLS705NWiWcYYnIR9ZXq5QeUmiy48SCpDfRXeHMJXzi0TRTzNXy3bGZTTkiHU665wRhJjJLjQwcYPdQIK1zXfYKKWEpZmrRttg9nKPHAJzPSEOYZqT9Rpk98CCY06mFUrIslh5U7buZnqUoU4-HlycDGMkczEF3on4vhDyitiraePJvt9pRwb83j54pXY9_f9uMDj64Dr0_Vkzsp9MtjaWX-KOPIjMQuHJ4_GRCsryVodIhA1Ah-3ve-cFkIk5w3-0t5v",
    colSpan: "md:col-span-2",
  },
];

const recentEvents: EventCard[] = [
  {
    id: 1,
    category: "JAZZ NIGHT",
    title: "The Midnight Sessions",
    location: "Blue Note Hall",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIZy-EC3TGkCpOr9MkF-U4rowXvP2utHpGFbdlo8LJ0BaNOGeJg6akbrsuT7Nvb6ECREyj0UFtHTDwuQxn-R3eXLhdsa5wjkEWKJ2TAGXotU_oMGyPxO3s-IB4qH0GLvGadwrpopnuD0O7KJS9emp-ob1jyXfSoGWs8PzUyqmb73sarwozYspPGyQ5D8xoLwk7K7-C2aMhGr8fBGCW4xyldB65KP41XbINpqDyjj13WIzsUyV9qR44FfRL0we0yuuCUN58yoLIYYCa",
  },
  {
    id: 2,
    category: "EXPOSICIÓN",
    title: "Abstract Horizons",
    location: "Modern Art Hub",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh_eqXdyIYGCpZs104OzmWwzIAVb8iBUc1WlH5Yfq9o0cfM4ydX-p94BfHEuw3IOGolzIgFO-CN0PfQPf0Xg1L_WQOlZZEglcaFGqj71LY8g5FVl1-NnXGiCXA2nrulALnIhxS8V-wXCRS57jeQ8GYRwPvkCTQLeb4n_myplg2nrPDA_7uoPtQgenGA8TkDIOpfZwefff6sDXaOFr4fTSeD77_a5bVwQuNj_x0e70_26m9kgYSyJxYyrHbxFgKkKPySepmmQH2z1RN",
  },
  {
    id: 3,
    category: "ELECTRONIC",
    title: "Neon Pulse Live",
    location: "Cyber Arena",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUblA-9vc4Bw2C27k56vg1oSxnGb1l4hcybZcKnthTFRAbyuf89ZJs5vbtUTX5kfySHRUG5RKgOga1ayIlHWPgGnTlbDrvw9CXxHJth7xZpkK0amft4Z5saBfFm1zjay1yWvvqsm8tPkhMxntaOdJbtCJmPoDDaQ4Yu4TGMvZMEQWaRdB5Es2s7xsrlrVQUcCnsTZ2TUxq0gh6bIzwGjrLZcHLxAd6HVwNhsDzf23haAIOF9BZWLnBkon2wPEBMlWDz-lpn7aPbihZ",
  },
  {
    id: 4,
    category: "CLASSICAL",
    title: "Beethoven's Ninth",
    location: "Royal Symphony Hall",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxEu4C0D9z_PWejdWbzV3UhtZWiAEj8d-ZVyQjHPkvE3ELvUpDpfbwtI6YutWPC9Xqn0xXpj302TcJZqVFn0ZcLsLlIAAf8Uknp599yP3FLCJ0LV41q-C3jh-sPHnguX5_OxvwchuCgAWa2B_FGhZuHathBYu-t6nQQbu6CF7V2xMSWf_jL4Cux8uyjYQJd8U8t2podK3J3ILGtODvBSRtN-w_OxyGiVgMdYPDRcOVy1cIhyCYqTNeCgMU81iIBn6VOyfVMdtgkuJG",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Navbar({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-16 transition-all duration-300 bg-[#101415]/80 backdrop-blur-md ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <nav className="w-full h-full px-0 flex justify-between items-center">
        {/* Logo + nav links */}
        <div className="flex items-center gap-16 pl-4">
          <span className="text-[#d2bbff] font-bold text-lg tracking-tight">
            Next-Ticket
          </span>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-[#d2bbff] font-semibold border-b-2 border-[#d2bbff] pb-0.5 text-sm"
            >
              Eventos
            </a>
            <a
              href="#"
              className="text-[#ccc3d8] hover:text-[#e0e3e5] transition-colors text-sm"
            >
              Espacios
            </a>
            <a
              href="#"
              className="text-[#ccc3d8] hover:text-[#e0e3e5] transition-colors text-sm"
            >
              Mis tickets
            </a>
          </div>
        </div>

        {/* Search + login */}
        <div className="flex items-center gap-6 pr-4">
          <div className="relative hidden lg:block">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ccc3d8] w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar eventos..."
              className="bg-[#323537] border-none rounded-full py-1.5 pl-10 pr-4 text-sm text-[#e0e3e5] focus:ring-2 focus:ring-[#d2bbff] w-64 outline-none"
            />
          </div>
          <button className="px-4 py-2 bg-[#7c3aed] text-[#ede0ff] rounded-lg text-sm font-semibold active:scale-95 transition-transform">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[620px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover"
          style={{
            backgroundImage: `url(${fondo1.src})`,
            backgroundPosition: 'center 60%',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#101415]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 flex flex-col justify-start items-start pt-28">
        <span className="inline-block px-4 py-1 rounded-full bg-[#d2bbff]/10 text-[#d2bbff] border border-[#d2bbff]/20 text-xs font-semibold tracking-wider mb-6 backdrop-blur-sm">
          PRÓXIMAMENTE EN TU CIUDAD
        </span>
        <h1 className="font-extrabold text-[clamp(2rem,5vw,3rem)] leading-tight tracking-tight text-white max-w-2xl mb-6">
          Vive los Mejores Eventos
        </h1>
        <p className="text-[#ccc3d8] text-lg leading-relaxed max-w-xl mb-16">
          Accede a las experiencias más exclusivas, desde conciertos de talla
          mundial hasta los partidos más emocionantes. Asegura tu lugar en
          primera fila.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_16px_rgba(124,58,237,0.3)] active:scale-95"
            style={{ background: "linear-gradient(135deg,#7c3aed 0%,#0053db 100%)" }}
          >
            Explorar Eventos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <a
            href="https://www.cultura.cdmx.gob.mx/recintos/tcei"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#958da1] text-[#e0e3e5] font-bold text-base transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-[#7c3aed] hover:to-[#0053db] hover:border-transparent"
          >
            Ver Recintos
          </a>
        </div>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section className="py-8 max-w-[1360px] mx-auto px-2 sm:px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-[#d2bbff] font-bold text-2xl">Próximos Eventos</h2>

        </div>
        <button className="text-[#d2bbff] hover:underline flex items-center gap-1 text-sm font-semibold">
          Ver todos
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Large card — spans 2 cols × 2 rows */}
        <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl h-[500px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_110px_rgba(124,58,237,0.24)]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
            style={{ backgroundImage: `url('${bentoEvents[0].image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 p-10 w-full">
            <div className="flex gap-4 mb-4">
              <span className="bg-[#d2bbff] text-[#3f008e] px-3 py-1 rounded text-sm font-semibold">
                {bentoEvents[0].category}
              </span>
              <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded text-sm font-semibold">
                {bentoEvents[0].date}
              </span>
            </div>
            <h3 className="font-extrabold text-[2rem] leading-10 tracking-tight text-white mb-2">
              {bentoEvents[0].title}
            </h3>
            <p className="text-[#ccc3d8] line-clamp-2">{bentoEvents[0].description}</p>
          </div>
        </div>

        {/* Small card — Deportes */}
        <SmallBentoCard event={bentoEvents[1]} />

        {/* Small card — Teatro */}
        <SmallBentoCard event={bentoEvents[2]} />

        {/* Wide card — Festivales */}
        <div className="md:col-span-2 group relative overflow-hidden rounded-xl h-[238px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_110px_rgba(124,58,237,0.24)]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
            style={{ backgroundImage: `url('${bentoEvents[3].image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-[#d2bbff] text-sm font-semibold uppercase tracking-widest block mb-1">
              {bentoEvents[3].category}
            </span>
            <h4 className="font-bold text-2xl text-white">{bentoEvents[3].title}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmallBentoCard({ event }: { event: BentoCard }) {
  return (
    <div className="group relative overflow-hidden rounded-xl h-[238px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_110px_rgba(124,58,237,0.24)]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
        style={{ backgroundImage: `url('${event.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 p-6">
        <span className="text-[#d2bbff] text-sm font-semibold uppercase tracking-widest block mb-1">
          {event.category}
        </span>
        <h4 className="font-bold text-2xl text-white">{event.title}</h4>
      </div>
    </div>
  );
}

function RecentEvents() {
  return (
    <section className="py-10 bg-[#121417]">
      <div className="max-w-[1360px] mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-[#d2bbff] font-bold text-2xl">
              Eventos Recientes
            </h2>
          </div>
          <button className="text-[#d2bbff] hover:underline flex items-center gap-1 text-sm font-semibold">
            Ver todos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentEvents.map((event) => (
            <article
              key={event.id}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_28px_90px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_110px_rgba(124,58,237,0.24)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 bottom-4 inline-flex rounded-full bg-[#7c3aed]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  {event.category}
                </span>
              </div>
              <div className="p-6">
                <h5 className="font-bold text-2xl text-white leading-tight line-clamp-2 mb-3">
                  {event.title}
                </h5>
                <div className="flex items-center gap-1 text-sm text-[#cbd5e1] font-medium">
                  <svg className="w-3.5 h-3.5 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s8-4.5 8-10.5S15.523 3 12 3 4 6.5 4 10.5 12 21 12 21z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-8 max-w-[1280px] mx-auto px-6">
      <div className="relative rounded-[26px] overflow-hidden border border-white/10 bg-[#11151b] bg-gradient-to-r from-[#2f33a6]/15 via-[#1f2335]/25 to-[#11151b]/95 px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-5 shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
        <div className="z-10 text-center md:text-left">
          <h2 className="font-extrabold text-xl sm:text-2xl tracking-tight text-white mb-1">
            No te pierdas de nada
          </h2>
          <p className="text-[#c3cbf7] text-xs sm:text-sm leading-snug max-w-md">
            Suscríbete para recibir preventas exclusivas y anuncios antes que nadie.
          </p>
        </div>
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
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b0f10] border-t border-[#4a4455]">
      <div className="max-w-[1280px] mx-auto px-6 py-6">
        <p className="text-[#ccc3d8] text-base text-center">
          Next-Ticket
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-[#e0e3e5] font-bold text-sm uppercase tracking-wider">
        {title}
      </span>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="text-[#ccc3d8] hover:text-[#d2bbff] transition-colors text-base"
        >
          {link}
        </a>
      ))}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function EventosPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#101415] text-[#e0e3e5] font-sans selection:bg-[#7c3aed] selection:text-[#ede0ff]">
      <Navbar scrolled={scrolled} />
      <main className="pt-16">
        <Hero />
        <BentoGrid />
        <RecentEvents />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}