const LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Support", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full py-lg px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto border-t border-outline-variant bg-surface-container-lowest">
      <div className="font-headline-md text-headline-md text-primary mb-md md:mb-0">
        Sistema de Eventos y Boletos
      </div>
      <div className="flex flex-col items-center md:items-end gap-sm">
        <div className="flex gap-md text-on-surface-variant font-body-md">
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="hover:text-primary transition-colors hover:underline">
              {label}
            </a>
          ))}
        </div>
        <p className="text-on-surface-variant text-body-md">
          © 2024 Sistema de Eventos y Boletos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
