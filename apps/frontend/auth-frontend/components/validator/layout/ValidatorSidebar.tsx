import { validatorNavItems } from "../data/validationMock";

const iconMap: Record<string, string> = {
  dashboard: "▦",
  event: "▣",
  qr_code_scanner: "⌗",
  group: "◉",
};

export default function ValidatorSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-[280px] flex-col border-r border-[#4a4455] bg-[#0b0f10] px-4 py-6 md:flex">
      <div className="mb-10 px-2">
        <h2 className="text-2xl font-extrabold text-[#d2bbff]">
          Admin Panel
        </h2>
        <p className="text-sm font-semibold text-[#ccc3d8]">
          Management Console
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        {validatorNavItems.map((item) => (
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
            <span className="w-6 text-center text-xl">{iconMap[item.icon]}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto space-y-2 border-t border-[#4a4455] pt-6">
        <div className="mb-2 flex items-center gap-4 px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#323537] text-sm font-bold text-[#d2bbff]">
            AU
          </div>

          <div>
            <p className="text-sm font-bold text-[#e0e3e5]">
              Admin User
            </p>
            <p className="text-[10px] uppercase tracking-widest text-[#ccc3d8]">
              Validator Role
            </p>
          </div>
        </div>

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
  );
}
