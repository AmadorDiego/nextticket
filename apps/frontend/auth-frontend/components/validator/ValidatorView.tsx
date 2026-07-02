"use client";

import { useState } from "react";
import ValidatorSidebar from "./layout/ValidatorSidebar";
import ValidatorMobileHeader from "./layout/ValidatorMobileHeader";
import Footer from "../Footer"
import TicketScanner from "./scanner/TicketScanner";
import ManualFolioForm from "./scanner/ManualFolioForm";
import ValidationStats from "./stats/ValidationStats";
import SimulationControls from "./stats/SimulationControls";
import ValidationResultModal from "./results/ValidationResultModal";
import type { ValidationResultType } from "./types/validation";

export default function ValidatorView() {
  const [folio, setFolio] = useState("");
  const [result, setResult] = useState<ValidationResultType>(null);

  const handleValidate = () => {
    setResult("success");
  };

  const handleReset = () => {
    setResult(null);
    setFolio("");
  };

  return (
    <div className="min-h-screen bg-[#101415] text-[#e0e3e5]">
      <ValidatorSidebar />

      <main className="min-h-screen md:ml-[280px] flex flex-col overflow-hidden">
        <ValidatorMobileHeader />

        <section className="flex flex-1 items-center justify-center px-6 py-10">
          <div className="w-full max-w-2xl space-y-10">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#e0e3e5] md:text-6xl">
                Validación de Boleto
              </h1>

              <p className="text-lg text-[#ccc3d8]">
                Escanee el código QR o ingrese el folio manualmente
              </p>
            </div>

            <div className="space-y-6">
              <TicketScanner />

              <ManualFolioForm
                folio={folio}
                onFolioChange={setFolio}
                onValidate={handleValidate}
              />
            </div>

            <ValidationStats onRejectedClick={() => setResult("rejected")} />

            <SimulationControls onSimulate={setResult} />
          </div>
        </section>

        <Footer />
      </main>

      <ValidationResultModal result={result} onReset={handleReset} />

      <style jsx global>{`
        @keyframes validator-scan {
          0% {
            top: 0%;
          }
          50% {
            top: 100%;
          }
          100% {
            top: 0%;
          }
        }

        .validator-scanner-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #d2bbff, transparent);
          box-shadow: 0 0 15px #d2bbff;
          animation: validator-scan 2.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
