"use client";

import { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const IcoDash      = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3h8v8h-8V3zm0 10h8v8h-8v-8zM3 3h8v8H3V3zm0 10h8v8H3v-8z"/></svg>;
const IcoCalendar  = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>;
const IcoCirclePlus= () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>;
const IcoPayments  = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>;
const IcoTicket    = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M2 9a2 2 0 010-4V4a1 1 0 011-1h18a1 1 0 011 1v1a2 2 0 010 4v1a2 2 0 010 4v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a2 2 0 010-4V9z"/><line x1="9" y1="3" x2="9" y2="21" strokeDasharray="2 3"/></svg>;
const IcoAnalytics = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 4-6"/></svg>;
const IcoPerson    = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>;
const IcoLogout    = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>;
const IcoSearch    = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>;
const IcoBell      = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>;
const IcoGear      = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>;
const IcoDownload  = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>;
const IcoEdit      = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const IcoEye       = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>;
const IcoTrending  = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const IcoMusic     = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>;
const IcoTheater   = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>;
const IcoDraw      = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
const IcoPlus      = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>;
const IcoMenu      = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>;
const IcoX         = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>;

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_MAIN = [
  { label: "Dashboard",        icon: <IcoDash />,        active: true  },
  { label: "Mis Eventos",      icon: <IcoCalendar />               },
  { label: "Crear Evento",     icon: <IcoCirclePlus />             },
  { label: "Ventas",           icon: <IcoPayments />               },
  { label: "Boletos Vendidos", icon: <IcoTicket />                 },
];

const CHART = [
  { label: "Rock Rev.",   proj: 70, rev: 85 },
  { label: "Jazz Night",  proj: 90, rev: 60 },
  { label: "Techno Fest", proj: 50, rev: 95 },
  { label: "Art Expo",    proj: 65, rev: 45 },
  { label: "Gala Dinner", proj: 80, rev: 75 },
];

const EVENTS = [
  { name: "Rock Revolution Tour",   venue: "Arena Stadium", date: "Nov 15, 2024", sold: 1200, total: 1500, pct: 80,  status: "Activo", active: true,  icon: <IcoMusic />   },
  { name: "Standup Night Live",     venue: "Teatro Rex",    date: "Nov 22, 2024", sold: 450,  total: 500,  pct: 90,  status: "Activo", active: true,  icon: <IcoTheater /> },
  { name: "Electronic Beach Party", venue: "Playa del Sol", date: "Dec 05, 2024", sold: 0,    total: 2000, pct: 0,   status: "Draft",  active: false, icon: <IcoDraw />    },
];

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={onClose}
        />
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
        {/* inner always 240px so content doesn't squeeze during anim */}
        <div style={{ width: 240, minWidth: 240, display: "flex", flexDirection: "column", height: "100%", padding: "20px 0" }}>

          {/* Brand row */}
          <div style={{ padding: "0 20px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ color: "#d2bbff", fontWeight: 900, fontSize: 18, letterSpacing: "-0.02em", lineHeight: 1.2 }}>Organizador</p>
              <p style={{ color: "rgba(204,195,216,0.55)", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 2 }}>Manager de eventos</p>
            </div>
          
          </div>

          {/* Nav */}
          <nav style={{ flex: 1, padding: "0 12px", overflow: "hidden" }}>
            {NAV_MAIN.map(({ label, icon, active }) => (
              <a
                key={label}
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 12px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  marginBottom: 2,
                  background: active ? "rgba(124,58,237,0.12)" : "transparent",
                  color: active ? "#d2bbff" : "rgba(204,195,216,0.6)",
                  borderRight: active ? "2px solid #7c3aed" : "2px solid transparent",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = "#272a2c"; (e.currentTarget as HTMLElement).style.color = "#ccc3d8"; }}}
                onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(204,195,216,0.6)"; }}}
              >
                <span style={{ color: active ? "#d2bbff" : "#5a5270", flexShrink: 0 }}>{icon}</span>
                {label}
              </a>
            ))}
          </nav>

          {/* Bottom */}
          <div style={{ padding: "12px 12px 0", borderTop: "1px solid rgba(74,68,85,0.25)" }}>
            {[
              { label: "Perfil",        icon: <IcoPerson />, danger: false },
              { label: "Cerrar Sesión", icon: <IcoLogout />, danger: true  },
            ].map(({ label, icon, danger }) => (
              <a
                key={label}
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 12px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  marginBottom: 2,
                  color: danger ? "rgba(255,180,171,0.8)" : "rgba(204,195,216,0.6)",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = danger ? "rgba(147,0,10,0.12)" : "#272a2c"; (e.currentTarget as HTMLElement).style.color = danger ? "#ffb4ab" : "#ccc3d8"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = danger ? "rgba(255,180,171,0.8)" : "rgba(204,195,216,0.6)"; }}
              >
                <span style={{ color: danger ? "#ffb4ab" : "#5a5270", flexShrink: 0 }}>{icon}</span>
                {label}
              </a>
            ))}

            {/* User — NO avatar with letter, just the photo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px 4px" }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlOcRXFVhXsj8g6I7EOATPz3k4EWalHwlZL0vHCJaMoHd-JG4cZ5hbSveWs2FDlwBjOw6ooBmVNt_pYh85uTuR18x4Gp6WUUKS4Buo7VFkuIfo-vGYBi94RmFAQlpXO3_OcWt0n9bM9xbatd1522trRLVooLjdIW7ZSCyLF5p0zK_l9Zk5Ep_8yk4tY8WBJaDxFax12wdkJPoXBQmN7XJkK9L5dKKmxa1m0L5DJSWJzdxvuaqTz9zhDPtVzwWro38d2VGcirbcxY--"
                alt="avatar"
                style={{ width: 30, height: 30, borderRadius: 8, objectFit: "cover", flexShrink: 0, outline: "2px solid rgba(124,58,237,0.3)" }}
              />
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
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        gap: 12,
        background: "rgba(16,20,21,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(74,68,85,0.2)",
      }}
    >
      {/* Left: hamburger + search */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
        <button
          onClick={onMenuToggle}
          style={{
            flexShrink: 0,
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "#272a2c",
            border: "none",
            cursor: "pointer",
            color: "#ccc3d8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#323537")}
          onMouseLeave={e => (e.currentTarget.style.background = "#272a2c")}
        >
          <IcoMenu />
        </button>

        {/* Search — plain div+input, no HeroUI, perfectly aligned */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#191c1e",
            border: "1px solid #4a4455",
            borderRadius: 10,
            padding: "0 12px",
            height: 34,
            maxWidth: 340,
            flex: 1,
          }}
          onFocus={() => {}}
        >
          <span style={{ color: "#5a5270", flexShrink: 0, display: "flex" }}><IcoSearch /></span>
          <input
            placeholder="Buscar eventos, órdenes, reportes..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              color: "#e0e3e5",
              fontSize: 13,
            }}
          />
        </div>
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        {[{ icon: <IcoBell />, tip: "Notificaciones" }].map(({ icon, tip }) => (
          <button
            key={tip}
            title={tip}
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "#272a2c",
              border: "none",
              cursor: "pointer",
              color: "#ccc3d8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#323537"; (e.currentTarget as HTMLElement).style.color = "#d2bbff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#272a2c"; (e.currentTarget as HTMLElement).style.color = "#ccc3d8"; }}
          >
            {icon}
          </button>
        ))}

        <div style={{ width: 1, height: 20, background: "rgba(74,68,85,0.4)", margin: "0 4px" }} />


        
      </div>
    </header>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ label, value, emoji, highlight, sub }: {
  label: string; value: string; emoji: string; highlight?: boolean; sub?: string;
}) {
  return (
    <div
      className="relative overflow-hidden group"
      style={{
        borderRadius: 12,
        padding: "16px 18px",
        background: highlight ? "linear-gradient(135deg,#7c3aed 0%,#4f35c7 100%)" : "#1d2022",
        border: highlight ? "none" : "1px solid rgba(74,68,85,0.25)",
        borderLeft: highlight ? "none" : "2px solid #7c3aed",
        boxShadow: highlight ? "0 4px 20px rgba(124,58,237,0.28)" : "none",
      }}
    >
      <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: highlight ? "rgba(237,224,255,0.65)" : "rgba(204,195,216,0.55)", marginBottom: 6 }}>
        {label}
      </p>
      <p style={{ fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", color: highlight ? "#fff" : "#e0e3e5", fontSize: highlight ? "1.2rem" : "1.65rem" }}>
        {value}
      </p>
      {sub && <p style={{ fontSize: 11, marginTop: 4, color: highlight ? "rgba(237,224,255,0.6)" : "rgba(204,195,216,0.55)" }}>{sub}</p>}
      <span
        className="absolute select-none opacity-[0.06] group-hover:opacity-[0.12] transition-opacity"
        style={{ fontSize: 60, color: highlight ? "#fff" : "#d2bbff", right: -6, bottom: -6, pointerEvents: "none" }}
      >
        {emoji}
      </span>
    </div>
  );
}

// ─── Bar chart ────────────────────────────────────────────────────────────────

function ChartSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ borderRadius: 12, background: "#1d2022", border: "1px solid rgba(74,68,85,0.28)", padding: "18px 20px", height: "100%", boxSizing: "border-box" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div>
          <p style={{ color: "#e0e3e5", fontWeight: 700, fontSize: 14 }}>Ventas por Evento</p>
          <p style={{ color: "rgba(204,195,216,0.55)", fontSize: 11, marginTop: 2 }}>Revenue vs Proyección Estimada</p>
        </div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          {[{ c: "#d2bbff", l: "Revenue" }, { c: "#323537", l: "Proyección" }].map(({ c, l }) => (
            <span key={l} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(204,195,216,0.65)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* Bars */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 8, height: 180, padding: "0 4px" }}>
        {CHART.map(({ label, proj, rev }) => (
          <div
            key={label}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", cursor: "default" }}
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 3, position: "relative" }}>
              {hovered === label && (
                <div style={{ position: "absolute", top: -26, left: "50%", transform: "translateX(-50%)", background: "#e0e3e5", color: "#101415", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 5, whiteSpace: "nowrap", zIndex: 10 }}>
                  ${Math.floor(rev * 1.2)}k
                </div>
              )}
              <div style={{ width: 10, borderRadius: "3px 3px 0 0", background: "#323537", height: `${proj}%` }} />
              <div style={{ width: 10, borderRadius: "3px 3px 0 0", height: `${rev}%`, background: hovered === label ? "linear-gradient(180deg,#a78bfa,#7c3aed)" : "linear-gradient(180deg,#d2bbff,#7c3aed)", transition: "all 0.2s" }} />
            </div>
            <span style={{ fontSize: 10, color: "rgba(204,195,216,0.55)", marginTop: 8, whiteSpace: "nowrap" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Insight section ──────────────────────────────────────────────────────────

function InsightSection() {
  // Minimal Top Evento card with background image
  const AVG_TICKET = 20;
  const topEvent = EVENTS[0]; // ensure Rock Revolution Tour
  const revenue = topEvent.sold * AVG_TICKET;

  return (
    <div style={{ height: "100%", borderRadius: 12, overflow: "hidden", position: "relative", border: "1px solid rgba(74,68,85,0.28)" }}>
      <img src="/img/fondo1.png" alt="fondo" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />

      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(16,20,21,0.5), rgba(16,20,21,0.5))" }} />

      <div style={{ position: "relative", zIndex: 1, padding: 22, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#d2bbff" }}>Top Evento (Revenue)</span>
        </div>

        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#fff" }}>{topEvent.name}</h3>
        <p style={{ margin: "8px 0", fontSize: "1.8rem", fontWeight: 900, color: "#fff" }}>{`$${revenue.toLocaleString()}`}</p>
        <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.85)" }}>{`${topEvent.venue} · ${topEvent.date}`}</p>
      </div>
    </div>
  );
}

// ─── Events table ─────────────────────────────────────────────────────────────

function EventsTable() {
  return (
    <div style={{ borderRadius: 12, background: "#1d2022", border: "1px solid rgba(74,68,85,0.28)", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid rgba(74,68,85,0.25)" }}>
        <p style={{ color: "#e0e3e5", fontWeight: 700, fontSize: 14 }}>Próximos Eventos</p>
        <button
          style={{ color: "#d2bbff", background: "none", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600 }}
          onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
          onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
        >
          Ver todos los eventos
        </button>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#272a2c", borderBottom: "1px solid rgba(74,68,85,0.3)" }}>
              {["Evento", "Fecha", "Boletos Vendidos", "Estado", "Acciones"].map((h, i) => (
                <th key={h} style={{ padding: "10px 20px", textAlign: i === 4 ? "right" : "left", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#ccc3d8", opacity: 0.65 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {EVENTS.map(({ name, venue, date, sold, total, pct, status, active, icon }) => (
              <tr
                key={name}
                style={{ borderBottom: "1px solid rgba(74,68,85,0.12)", transition: "background 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(39,42,44,0.55)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                {/* Name */}
                <td style={{ padding: "12px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "#323537", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: active ? "#d2bbff" : "#4a4060" }}>
                      {icon}
                    </div>
                    <div>
                      <p style={{ color: "#e0e3e5", fontSize: 13, fontWeight: 600 }}>{name}</p>
                      <p style={{ color: "rgba(204,195,216,0.45)", fontSize: 11 }}>{venue}</p>
                    </div>
                  </div>
                </td>

                {/* Date */}
                <td style={{ padding: "12px 20px", color: "#ccc3d8", fontSize: 13 }}>{date}</td>

                {/* Progress */}
                <td style={{ padding: "12px 20px" }}>
                  <div style={{ width: 160 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ color: "#e0e3e5", fontSize: 11, fontFamily: "monospace" }}>{sold.toLocaleString()} / {total.toLocaleString()}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: active ? "#d2bbff" : "#4a4060" }}>{pct}%</span>
                    </div>
                    <div style={{ height: 4, borderRadius: 9999, background: "#323537", overflow: "hidden" }}>
                      <div style={{ height: "100%", borderRadius: 9999, width: `${pct}%`, background: active ? "#d2bbff" : "#4a4060" }} />
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td style={{ padding: "12px 20px" }}>
                  <span style={{
                    padding: "3px 10px",
                    borderRadius: 9999,
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    ...(status === "Activo"
                      ? { background: "rgba(210,187,255,0.12)", color: "#d2bbff" }
                      : { background: "rgba(74,68,85,0.35)", color: "#ccc3d8" }),
                  }}>
                    {status}
                  </span>
                </td>

                {/* Actions */}
                <td style={{ padding: "12px 20px", textAlign: "right" }}>
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: 4 }}>
                    {[{ ico: <IcoEdit />, tip: "Editar" }, { ico: <IcoEye />, tip: "Ver" }].map(({ ico, tip }) => (
                      <button
                        key={tip}
                        title={tip}
                        style={{ width: 30, height: 30, borderRadius: 6, background: "transparent", border: "none", cursor: "pointer", color: "#6b6080", display: "flex", alignItems: "center", justifyContent: "center" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#323537"; (e.currentTarget as HTMLElement).style.color = "#d2bbff"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#6b6080"; }}
                      >
                        {ico}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OrganizerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

          {/* Title + actions */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
            <div>
              <h2 style={{ fontWeight: 900, fontSize: "1.75rem", letterSpacing: "-0.02em", color: "#e0e3e5", margin: 0 }}>Resumen de Gestión</h2>
              <p style={{ fontSize: 13, color: "rgba(204,195,216,0.55)", marginTop: 4 }}>Monitorea el rendimiento de tus producciones en tiempo real.</p>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 10, background: "#272a2c", border: "1px solid rgba(74,68,85,0.3)", color: "#e0e3e5", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#323537")}
                onMouseLeave={e => (e.currentTarget.style.background = "#272a2c")}
              >
                <IcoDownload /> Ver Reporte de Ventas
              </button>
              <button
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 10, background: "linear-gradient(135deg,#7c3aed 0%,#0053db 100%)", border: "none", color: "#ede0ff", fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(124,58,237,0.3)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = ""; }}
              >
                <IcoPlus /> Crear Nuevo Evento
              </button>
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            <StatCard label="Total Eventos"    value="12"       emoji="🗓" />
            <StatCard label="Eventos Activos"  value="8"        emoji="⚡" />
            <StatCard label="Boletos Vendidos" value="2,450"    emoji="🎫" />
            <StatCard label="Ventas Totales"   value="$120,400" emoji="💳" />
          </div>

          {/* Bento: chart + insight */}
          <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 12, height: 320 }}>
            <ChartSection />
            <InsightSection />
          </div>

          {/* Table */}
          <EventsTable />
        </main>
      </div>
    </div>
  );
}