"use client";

import { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const IcoDash       = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3h8v8h-8V3zm0 10h8v8h-8v-8zM3 3h8v8H3V3zm0 10h8v8H3v-8z"/></svg>;
const IcoCalendar   = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>;
const IcoCirclePlus = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>;
const IcoPayments   = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>;
const IcoTicket     = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M2 9a2 2 0 010-4V4a1 1 0 011-1h18a1 1 0 011 1v1a2 2 0 010 4v1a2 2 0 010 4v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a2 2 0 010-4V9z"/><line x1="9" y1="3" x2="9" y2="21" strokeDasharray="2 3"/></svg>;
const IcoAnalytics  = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 4-6"/></svg>;
const IcoPerson     = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>;
const IcoLogout     = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>;
const IcoSearch     = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>;
const IcoBell       = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>;
const IcoGear       = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>;
const IcoDownload  = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>;
const IcoPlus       = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>;
const IcoMenu       = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>;
const IcoX          = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>;
const IcoEdit       = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const IcoTrash      = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>;
const IcoEye        = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>;
const IcoChevronDown= () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>;
const IcoFilter     = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>;
const IcoMusic      = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>;
const IcoMic        = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/></svg>;
const IcoDrum       = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="10" ry="4"/><path d="M2 7v10c0 2.2 4.5 4 10 4s10-1.8 10-4V7"/><path d="M2 12c0 2.2 4.5 4 10 4s10-1.8 10-4"/></svg>;
const IcoStar       = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

// ─── Nav items (same as dashboard) ───────────────────────────────────────────

const NAV_MAIN = [
  { label: "Dashboard",        icon: <IcoDash />,        active: false, href: "/organizer/dashboard" },
  { label: "Mis Eventos",      icon: <IcoCalendar />,    active: true,  href: "/organizer/myEvents" },
  { label: "Ventas",           icon: <IcoPayments />,    active: false, href: "/organizer/sales" },
  { label: "Boletos Vendidos", icon: <IcoTicket />,      active: false, href: "/organizer/tickets" },
];

// ─── Event data ───────────────────────────────────────────────────────────────

type EventStatus = "Activo" | "Agotado" | "Draft" | "Cancelado";

interface Evento {
  id: string;
  name: string;
  venue: string;
  date: string;
  time: string;
  sold: number;
  total: number;
  status: EventStatus;
  icon: React.ReactNode;
  img: string;
}

const EVENTOS: Evento[] = [
  {
    id: "EV-8829",
    name: "Neon Nights Festival 2024",
    venue: "Arena Movistar",
    date: "15 Oct, 2024",
    time: "21:00 hrs",
    sold: 850, total: 1200,
    status: "Activo",
    icon: <IcoMusic />,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyHFOrttTGvwHhytSaUjcNHdOO0C7mZ3Wy6k6ICULeKZ98fUdQwDwdReb2xloneXrcLeJebc0WHqliA_Cj5OK0bfCSmVJNabfhAuy82Ux7v6QWU3ZkGkUZ99cBjQNvcNJSiEqVySiISfLbAAXkZCvdUHYu6fK3kVyYK_XbW8V5JCxYIENMA7IbHnVEnUwcixa9nNym89cffAUH3dGwbZ1bdU68VIoAdD5hsLLRoDDORdhrfbhv_NzK3PwBKHu4mONeadyiEPlqZP6f",
  },
  {
    id: "EV-9012",
    name: "Clásicos de Otoño: Orquesta",
    venue: "Teatro Nacional",
    date: "22 Oct, 2024",
    time: "19:30 hrs",
    sold: 500, total: 500,
    status: "Agotado",
    icon: <IcoMic />,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-7Y6ZubgZKc2mkiBPvSBi01KZuTEQtOMec9QUcImhnLTcjNO_WzVwYEPk-Njci_96akaVmnRPQPI8Zk4IqHd9hK5NSeAJA2_Hh9jajbl4OwWwXG5i7dCHTWpagU7yTYBlRCqrC0ncRETvMX0lY9uKF09oxJ0lxoUCFM-AzV_DIOdTkqSE6DvMtBaF0Qd0pjdvSG2BM4Wr42bxgtbiSikdoPZVKSDu6aGVPzVcsXTE_50_SaQ3SMQnrJdst9H0rb0_UMIW2o0PX43",
  },
  {
    id: "EV-9103",
    name: "Rock Revolution Tour",
    venue: "Estadio Olímpico",
    date: "05 Nov, 2024",
    time: "20:00 hrs",
    sold: 1200, total: 1500,
    status: "Activo",
    icon: <IcoDrum />,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnrcFFRGxvUgZq-VEl8NmcN5VQmiC1wBjLA40aax81S1hMM_yQNj27PsVcPgIKEhj2m4m9zSLvabomBg1-8zq37a4jWjJl21zQBo26Ae0p3-zXPKz7vHqdbLP9XBYd-M92-yYIIN7TH51xwec6MuIKBe794W5Ew99bHtmuT02mJLHRwSEmO7CrAUFNjUdBVCm9PHofJJlg2d-bpqaJPhabAvkrprkBnvHxmzwH2eiMrHpHktUnoIc9nWPhieJ3tlYJ3CTrB_kQRE0d",
  },
  {
    id: "EV-9247",
    name: "Electronic Beach Party",
    venue: "Playa del Sol",
    date: "15 Nov, 2024",
    time: "18:00 hrs",
    sold: 0, total: 2000,
    status: "Draft",
    icon: <IcoStar />,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2cpWLCZoXLS705NWiWcYYnIR9ZXq5QeUmiy48SCpDfRXeHMJXzi0TRTzNXy3bGZTTkiHU665wRhJjJLjQwcYPdQIK1zXfYKKWEpZmrRttg9nKPHAJzPSEOYZqT9Rpk98CCY06mFUrIslh5U7buZnqUoU4-HlycDGMkczEF3on4vhDyitiraePJvt9pRwb83j54pXY9_f9uMDj64Dr0_Vkzsp9MtjaWX-KOPIjMQuHJ4_GRCsryVodIhA1Ah-3ve-cFkIk5w3-0t5v",
  },
];

// ─── Status config ────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<EventStatus, { bg: string; color: string; dot: string }> = {
  Activo:    { bg: "rgba(210,187,255,0.12)", color: "#d2bbff",  dot: "#d2bbff"  },
  Agotado:   { bg: "rgba(255,180,171,0.12)", color: "#ffb4ab",  dot: "#ffb4ab"  },
  Draft:     { bg: "rgba(74,68,85,0.35)",    color: "#ccc3d8",  dot: "#6b6080"  },
  Cancelado: { bg: "rgba(147,0,10,0.18)",    color: "#ffb4ab",  dot: "#ffb4ab"  },
};

const ALL_STATUSES: EventStatus[] = ["Activo", "Agotado", "Draft", "Cancelado"];
const ALL_VENUES = ["Todos los recintos", "Arena Movistar", "Teatro Nacional", "Estadio Olímpico", "Playa del Sol"];

// ─── Sidebar (same as dashboard) ─────────────────────────────────────────────

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ background: "rgba(0,0,0,0.5)" }} onClick={onClose} />
      )}
      <aside
        className="fixed left-0 top-0 h-full z-50"
        style={{
          width: open ? 240 : 0,
          overflow: "hidden",
          transition: "width 0.28s cubic-bezier(0.4,0,0.2,1)",
          background: "#191c1e",
          borderRight: open ? "1px solid rgba(74,68,85,0.35)" : "none",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ width: 240, minWidth: 240, display: "flex", flexDirection: "column", height: "100%", padding: "20px 0" }}>
          {/* Brand */}
          <div style={{ padding: "0 20px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ color: "#d2bbff", fontWeight: 900, fontSize: 18, letterSpacing: "-0.02em", lineHeight: 1.2 }}>Organizador</p>
              <p style={{ color: "rgba(204,195,216,0.55)", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 2 }}>Manager de eventos</p>
            </div>
          </div>

          {/* Nav */}
          <nav style={{ flex: 1, padding: "0 12px", overflow: "hidden" }}>
            {NAV_MAIN.map(({ label, icon, active, href }) => (
              <a key={label} href={href ?? "#"} style={{
                display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 10,
                fontSize: 13, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap", marginBottom: 2,
                background: active ? "rgba(124,58,237,0.12)" : "transparent",
                color: active ? "#d2bbff" : "rgba(204,195,216,0.6)",
                borderRight: active ? "2px solid #7c3aed" : "2px solid transparent",
                transition: "all 0.15s",
              }}
                onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = "#272a2c"; (e.currentTarget as HTMLElement).style.color = "#ccc3d8"; } }}
                onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(204,195,216,0.6)"; } }}
              >
                <span style={{ color: active ? "#d2bbff" : "#5a5270", flexShrink: 0 }}>{icon}</span>
                {label}
              </a>
            ))}
          </nav>

          {/* Bottom */}
          <div style={{ padding: "12px 12px 0", borderTop: "1px solid rgba(74,68,85,0.25)" }}>
            {[
              { label: "Perfil", icon: <IcoPerson />, danger: false, href: "#" },
              { label: "Cerrar Sesión", icon: <IcoLogout />, danger: true, href: "/" },
            ].map(({ label, icon, danger, href }) => (
              <a key={label} href={href} style={{
                display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 10,
                fontSize: 13, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap", marginBottom: 2,
                color: danger ? "rgba(255,180,171,0.8)" : "rgba(204,195,216,0.6)", transition: "all 0.15s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = danger ? "rgba(147,0,10,0.12)" : "#272a2c"; (e.currentTarget as HTMLElement).style.color = danger ? "#ffb4ab" : "#ccc3d8"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = danger ? "rgba(255,180,171,0.8)" : "rgba(204,195,216,0.6)"; }}
              >
                <span style={{ color: danger ? "#ffb4ab" : "#5a5270", flexShrink: 0 }}>{icon}</span>
                {label}
              </a>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px 4px" }}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlOcRXFVhXsj8g6I7EOATPz3k4EWalHwlZL0vHCJaMoHd-JG4cZ5hbSveWs2FDlwBjOw6ooBmVNt_pYh85uTuR18x4Gp6WUUKS4Buo7VFkuIfo-vGYBi94RmFAQlpXO3_OcWt0n9bM9xbatd1522trRLVooLjdIW7ZSCyLF5p0zK_l9Zk5Ep_8yk4tY8WBJaDxFax12wdkJPoXBQmN7XJkK9L5dKKmxa1m0L5DJSWJzdxvuaqTz9zhDPtVzwWro38d2VGcirbcxY--"
                alt="avatar" style={{ width: 30, height: 30, borderRadius: 8, objectFit: "cover", flexShrink: 0, outline: "2px solid rgba(124,58,237,0.3)" }} />
              <div>
                <p style={{ color: "#e0e3e5", fontSize: 12, fontWeight: 600, lineHeight: 1.3 }}>Alex Rivera</p>
                <p style={{ color: "rgba(204,195,216,0.45)", fontSize: 10, lineHeight: 1.3 }}>Admin Premium</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

// ─── Topbar ───────────────────────────────────────────────────────────────────

function Topbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40, height: 56,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 20px", gap: 12,
      background: "rgba(16,20,21,0.92)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(74,68,85,0.2)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
        <button onClick={onMenuToggle} style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 8, background: "#272a2c", border: "none", cursor: "pointer", color: "#ccc3d8", display: "flex", alignItems: "center", justifyContent: "center" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#323537")}
          onMouseLeave={e => (e.currentTarget.style.background = "#272a2c")}
        ><IcoMenu /></button>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#191c1e", border: "1px solid #4a4455", borderRadius: 10, padding: "0 12px", height: 34, maxWidth: 340, flex: 1 }}>
          <span style={{ color: "#5a5270", flexShrink: 0, display: "flex" }}><IcoSearch /></span>
          <input placeholder="Buscar eventos por nombre..." style={{ flex: 1, background: "none", border: "none", outline: "none", color: "#e0e3e5", fontSize: 13 }} />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        {[{ icon: <IcoBell />, tip: "Notificaciones" }].map(({ icon, tip }) => (
          <button key={tip} title={tip} style={{ width: 32, height: 32, borderRadius: 8, background: "#272a2c", border: "none", cursor: "pointer", color: "#ccc3d8", display: "flex", alignItems: "center", justifyContent: "center" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#323537"; (e.currentTarget as HTMLElement).style.color = "#d2bbff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#272a2c"; (e.currentTarget as HTMLElement).style.color = "#ccc3d8"; }}
          >{icon}</button>
        ))}
        <div style={{ width: 1, height: 20, background: "rgba(74,68,85,0.4)", margin: "0 4px" }} />
       
      </div>
    </header>
  );
}

// ─── Select component ─────────────────────────────────────────────────────────

function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          appearance: "none",
          background: "#1d2022",
          border: "1px solid rgba(74,68,85,0.5)",
          borderRadius: 8,
          color: "#e0e3e5",
          fontSize: 13,
          fontWeight: 500,
          padding: "6px 32px 6px 12px",
          cursor: "pointer",
          outline: "none",
          fontFamily: "inherit",
        }}
      >
        {options.map(o => <option key={o} value={o} style={{ background: "#1d2022" }}>{o}</option>)}
      </select>
      <span style={{ position: "absolute", right: 10, pointerEvents: "none", color: "#6b6080", display: "flex" }}>
        <IcoChevronDown />
      </span>
    </div>
  );
}

// ─── Filters bar ─────────────────────────────────────────────────────────────

interface Filters { status: string; venue: string; search: string; }

function FiltersBar({ filters, onChange, onClear, onApply }: {
  filters: Filters;
  onChange: (f: Partial<Filters>) => void;
  onClear: () => void;
  onApply: () => void;
}) {
  return (
    <div style={{ borderRadius: 12, background: "#1d2022", border: "1px solid rgba(74,68,85,0.28)", padding: "12px 16px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
        {/* Estado */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label style={{ fontSize: 10, fontWeight: 600, color: "rgba(204,195,216,0.55)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Estado</label>
          <Select
            value={filters.status}
            onChange={v => onChange({ status: v })}
            options={["Todos", ...ALL_STATUSES]}
          />
        </div>

        {/* Fecha — solo decorativo */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label style={{ fontSize: 10, fontWeight: 600, color: "rgba(204,195,216,0.55)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Fecha</label>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#1d2022", border: "1px solid rgba(74,68,85,0.5)", borderRadius: 8, padding: "5px 10px", cursor: "pointer" }}>
            <span style={{ color: "#6b6080", display: "flex" }}><IcoCalendar /></span>
            <span style={{ color: "#ccc3d8", fontSize: 12 }}>Seleccionar rango</span>
          </div>
        </div>

        {/* Recinto */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label style={{ fontSize: 10, fontWeight: 600, color: "rgba(204,195,216,0.55)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Recinto</label>
          <Select
            value={filters.venue}
            onChange={v => onChange({ venue: v })}
            options={ALL_VENUES}
          />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 8, marginLeft: "auto", alignItems: "center" }}>
          <button
            onClick={onClear}
            style={{ background: "none", border: "none", color: "rgba(204,195,216,0.6)", fontSize: 12, fontWeight: 600, cursor: "pointer", padding: "5px 4px" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ccc3d8")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(204,195,216,0.6)")}
          >
            Limpiar
          </button>
          <button
            onClick={onApply}
            style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 14px", borderRadius: 8, background: "linear-gradient(135deg,#7c3aed 0%,#0053db 100%)", border: "none", color: "#ede0ff", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = ""; }}
          >
            <IcoFilter /> Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Events table ─────────────────────────────────────────────────────────────

function EventosTable({ eventos }: { eventos: Evento[] }) {
  return (
    <div style={{ borderRadius: 12, background: "#1d2022", border: "1px solid rgba(74,68,85,0.28)", overflow: "hidden" }}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#272a2c", borderBottom: "1px solid rgba(74,68,85,0.3)" }}>
              {["Evento", "Fecha y Hora", "Recinto", "Estado", "Boletos Vendidos", "Acciones"].map((h, i) => (
                <th key={h} style={{
                  padding: "10px 20px",
                  textAlign: i === 5 ? "right" : "left",
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#ccc3d8",
                  opacity: 0.65,
                  whiteSpace: "nowrap",
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {eventos.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ padding: "40px 20px", textAlign: "center", color: "rgba(204,195,216,0.4)", fontSize: 14 }}>
                  No se encontraron eventos con los filtros aplicados.
                </td>
              </tr>
            ) : eventos.map((ev) => {
              const pct = Math.round((ev.sold / ev.total) * 100);
              const s = STATUS_STYLES[ev.status];
              return (
                <tr
                  key={ev.id}
                  style={{ borderBottom: "1px solid rgba(74,68,85,0.12)", transition: "background 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(39,42,44,0.55)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  {/* Evento */}
                  <td style={{ padding: "14px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 8, overflow: "hidden", flexShrink: 0, position: "relative" }}>
                        <img src={ev.img} alt={ev.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#d2bbff" }}>
                          {ev.icon}
                        </div>
                      </div>
                      <div>
                        <p style={{ color: "#e0e3e5", fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{ev.name}</p>
                        <p style={{ color: "rgba(204,195,216,0.45)", fontSize: 11, marginTop: 2 }}>ID: {ev.id}</p>
                      </div>
                    </div>
                  </td>

                  {/* Fecha */}
                  <td style={{ padding: "14px 20px" }}>
                    <p style={{ color: "#e0e3e5", fontSize: 13, fontWeight: 500 }}>{ev.date}</p>
                    <p style={{ color: "rgba(204,195,216,0.45)", fontSize: 11, marginTop: 2 }}>{ev.time}</p>
                  </td>

                  {/* Recinto */}
                  <td style={{ padding: "14px 20px", color: "#ccc3d8", fontSize: 13 }}>{ev.venue}</td>

                  {/* Estado */}
                  <td style={{ padding: "14px 20px" }}>
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      padding: "3px 10px", borderRadius: 9999,
                      fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                      background: s.bg, color: s.color,
                    }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />
                      {ev.status}
                    </span>
                  </td>

                  {/* Boletos */}
                  <td style={{ padding: "14px 20px" }}>
                    <div style={{ width: 170 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ color: "#e0e3e5", fontSize: 11, fontFamily: "monospace" }}>
                          {ev.sold.toLocaleString()} / {ev.total.toLocaleString()}
                        </span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: pct === 100 ? "#ffb4ab" : "#d2bbff" }}>
                          {pct}%
                        </span>
                      </div>
                      <div style={{ height: 4, borderRadius: 9999, background: "#323537", overflow: "hidden" }}>
                        <div style={{
                          height: "100%", borderRadius: 9999, width: `${pct}%`,
                          background: pct === 100 ? "#ffb4ab" : "#d2bbff",
                        }} />
                      </div>
                    </div>
                  </td>

                  {/* Acciones */}
                  <td style={{ padding: "14px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: 4 }}>
                      {[
                        { ico: <IcoEye />,   tip: "Ver",    hoverColor: "#d2bbff" },
                        { ico: <IcoEdit />,  tip: "Editar", hoverColor: "#d2bbff" },
                        { ico: <IcoTrash />, tip: "Eliminar", hoverColor: "#ffb4ab" },
                      ].map(({ ico, tip, hoverColor }) => (
                        <button
                          key={tip}
                          title={tip}
                          style={{ width: 30, height: 30, borderRadius: 6, background: "transparent", border: "none", cursor: "pointer", color: "#6b6080", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#323537"; (e.currentTarget as HTMLElement).style.color = hoverColor; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#6b6080"; }}
                        >
                          {ico}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer count */}
      {eventos.length > 0 && (
        <div style={{ padding: "10px 20px", borderTop: "1px solid rgba(74,68,85,0.2)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ color: "rgba(204,195,216,0.45)", fontSize: 12 }}>
            Mostrando <strong style={{ color: "#ccc3d8" }}>{eventos.length}</strong> eventos
          </p>
          <div style={{ display: "flex", gap: 6 }}>
            {[1].map(n => (
              <button key={n} style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)", color: "#d2bbff", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                {n}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MisEventosPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filters, setFilters] = useState<Filters>({ status: "Todos", venue: "Todos los recintos", search: "" });
  const [applied, setApplied] = useState<Filters>({ status: "Todos", venue: "Todos los recintos", search: "" });

  const filteredEvents = EVENTOS.filter(ev => {
    const matchStatus = applied.status === "Todos" || ev.status === applied.status;
    const matchVenue  = applied.venue === "Todos los recintos" || ev.venue === applied.venue;
    return matchStatus && matchVenue;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#101415", color: "#e0e3e5", fontFamily: "Inter, system-ui, sans-serif", display: "flex" }}>
      {/* Glow */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: -1, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10%", right: "-10%", width: 450, height: 450, borderRadius: "50%", background: "rgba(210,187,255,0.04)", filter: "blur(110px)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "10%", width: 350, height: 350, borderRadius: "50%", background: "rgba(190,198,224,0.04)", filter: "blur(90px)" }} />
      </div>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh", marginLeft: sidebarOpen ? 240 : 0, transition: "margin-left 0.28s cubic-bezier(0.4,0,0.2,1)" }}>
        <Topbar onMenuToggle={() => setSidebarOpen(v => !v)} />

        <main style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 18 }}>

          {/* Page header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
            <div>
              <h2 style={{ fontWeight: 900, fontSize: "1.75rem", letterSpacing: "-0.02em", color: "#e0e3e5", margin: 0 }}>Mis Eventos</h2>
              <p style={{ fontSize: 13, color: "rgba(204,195,216,0.55)", marginTop: 4 }}>Gestiona y monitorea el rendimiento de tus producciones activas.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 12px", borderRadius: 8, background: "#272a2c", border: "1px solid rgba(74,68,85,0.3)", color: "#e0e3e5", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#323537")}
                onMouseLeave={e => (e.currentTarget.style.background = "#272a2c")}
              >
                <IcoDownload /> Ver Reporte
              </button>
              <button
                style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 14px", borderRadius: 8, background: "linear-gradient(135deg,#7c3aed 0%,#0053db 100%)", border: "none", color: "#ede0ff", fontSize: 12, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(124,58,237,0.3)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = ""; }}
              >
                <IcoPlus /> Nuevo Evento
              </button>
            </div>
          </div>

          {/* Filters */}
          <FiltersBar
            filters={filters}
            onChange={f => setFilters(prev => ({ ...prev, ...f }))}
            onClear={() => {
              const empty = { status: "Todos", venue: "Todos los recintos", search: "" };
              setFilters(empty);
              setApplied(empty);
            }}
            onApply={() => setApplied(filters)}
          />

          {/* Table */}
          <EventosTable eventos={filteredEvents} />
        </main>
      </div>
    </div>
  );
}