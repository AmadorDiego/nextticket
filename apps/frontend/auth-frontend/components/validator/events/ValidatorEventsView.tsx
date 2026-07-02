"use client";

import { useMemo, useState } from "react";
import { validatorEvents } from "../data/validatorEventsMock";
import type { ValidatorEventFilter } from "../types/validatorEvent";
import EventFilters from "./EventFilters";
import EventGrid from "./EventGrid";
import EventSelectionHeader from "./EventSelectionHeader";
import QuickScanButton from "./QuickScanButton";
import Footer from "../../Footer";
import ValidatorSidebar from "../layout/ValidatorSidebar";

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
      <ValidatorSidebar />

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

        <Footer />
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
