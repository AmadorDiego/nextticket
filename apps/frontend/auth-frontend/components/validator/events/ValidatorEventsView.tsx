"use client";

import { useMemo, useState } from "react";
import { validatorEvents, validatorSidebarItems } from "../data/validatorEventsMock";
import type { ValidatorEventFilter } from "../types/validatorEvent";
import EventFilters from "./EventFilters";
import EventGrid from "./EventGrid";
import EventSelectionHeader from "./EventSelectionHeader";
import QuickScanButton from "./QuickScanButton";
import ValidatorEventsFooter from "./ValidatorEventsFooter";

export default function ValidatorEventsView() {
  const [activeFilter, setActiveFilter] = useState<ValidatorEventFilter>("today");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = useMemo(() => {
    return validatorEvents.filter((event) => {
      const matchesFilter =
        activeFilter === "all" ||
        event.filter === activeFilter;

      const normalizedSearch = searchTerm.trim().toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 ||
        event.title.toLowerCase().includes(normalizedSearch) ||
        event.venue.toLowerCase().includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <div className="min-h-screen bg-[#101415] text-[#e0e3e5]">
      <aside className="fixed left-0 top-0 z-50 hidden h-full w-[280px] flex-col border-r border-[#4a4455] bg-[#0b0f10] px-4 py-6 md:flex">
        <div className="mb-16 px-2">
          <h1 className="mb-2 text-2xl font-extrabold text-[#d2bbff]">
            Admin Panel
          </h1>
          <p className="text-sm font-semibold tracking-wide text-[#ccc3d8]">
            Management Console
          </p>
        </div>

        <nav className="flex-grow space-y-1 overflow-y-auto">
          {validatorSidebarItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={[
                "flex items-center gap-4 rounded-lg px-4 py-4 text-sm font-semibold transition-colors",
                item.active
                  ? "bg-[#0053db] text-[#cdd7ff]"
                  : "text-[#ccc3d8] hover:bg-[#272a2c] hover:text-[#e0e3e5]",
              ].join(" ")}
            >
              <span className="w-6 text-center text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-1 pt-6">
          <button
            type="button"
            className="mb-6 flex w-full items-center justify-center gap-4 rounded-xl bg-[#7c3aed] px-4 py-4 text-sm font-semibold text-[#ede0ff] transition-all hover:opacity-90 active:scale-95"
          >
            <span className="text-xl">＋</span>
            <span>Create Event</span>
          </button>

          <a
            href="#"
            className="flex items-center gap-4 rounded-lg px-4 py-4 text-sm font-semibold text-[#ccc3d8] transition-colors hover:bg-[#272a2c] hover:text-[#e0e3e5]"
          >
            <span className="w-6 text-center text-xl">⚙</span>
            <span>Settings</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 rounded-lg px-4 py-4 text-sm font-semibold text-[#ccc3d8] transition-colors hover:bg-[#272a2c] hover:text-[#e0e3e5]"
          >
            <span className="w-6 text-center text-xl">↪</span>
            <span>Logout</span>
          </a>
        </div>
      </aside>

      <main className="min-h-screen bg-[#101415] md:ml-[280px]">
        <EventSelectionHeader
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
        />

        <section className="mx-auto max-w-[1280px] px-6 py-6">
          <EventFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <EventGrid events={filteredEvents} />
        </section>

        <ValidatorEventsFooter />
      </main>

      <QuickScanButton />

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #191c1e;
        }

        ::-webkit-scrollbar-thumb {
          background: #323537;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #4a4455;
        }
      `}</style>
    </div>
  );
}
