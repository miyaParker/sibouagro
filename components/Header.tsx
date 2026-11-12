import Image from "next/image";

const links = [
  { href: "#about", label: "About", mobile: false },
  { href: "#products", label: "Products", mobile: true },
  { href: "#why-us", label: "Why us", mobile: false },
  { href: "#contact", label: "Contact", mobile: true },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 px-5 pt-8 sm:px-8 sm:pt-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-3xl bg-white/15 px-5 py-2 text-white shadow-sm ring-1 ring-white/20 backdrop-blur-md">
        <a href="#top" aria-label="Sibou Agro Ltd – home">
          <Image
            src="/logo-horizontal-white.png"
            alt="Sibou Agro Ltd"
            width={1389}
            height={546}
            priority
            className="h-10 w-auto"
          />
        </a>
        <nav aria-label="Main">
          <ul className="flex gap-5 text-sm sm:gap-8">
            {links.map((l) => (
              <li key={l.href} className={l.mobile ? "" : "hidden sm:block"}>
                <a href={l.href} className="hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
