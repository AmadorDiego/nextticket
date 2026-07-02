import Link from "next/link";

export default function QuickScanButton() {
  return (
    <Link
      href="/validator"
      aria-label="Ir al escáner de boletos"
      className="fixed bottom-10 right-10 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#d2bbff] text-3xl text-[#3f008e] shadow-lg transition-transform active:scale-90 md:hidden"
    >
      ⌗
    </Link>
  );
}
