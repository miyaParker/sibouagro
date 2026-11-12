"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why us" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const line =
    "absolute left-1 right-1 h-0.5 rounded-full bg-current transition-all duration-300 ease-out";

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-5 pt-8 sm:px-8 sm:pt-12">
      <div ref={ref} className="relative mx-auto max-w-6xl">
        <div className="anim-fade-down flex items-center justify-between rounded-3xl bg-white/15 px-5 py-2 text-white shadow-sm ring-1 ring-white/20 backdrop-blur-md">
          <a href="#top" aria-label="Sibou Agro Ltd – home" onClick={() => setOpen(false)}>
            <Image
              src="/logo-horizontal-white.png"
              alt="Sibou Agro Ltd"
              width={1389}
              height={546}
              priority
              sizes="128px"
              className="h-10 w-auto transition-transform duration-200 hover:scale-105"
            />
          </a>

          <nav aria-label="Main" className="hidden sm:block">
            <ul className="flex gap-8 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-slide hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10 active:scale-90 sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span aria-hidden="true" className="relative block h-6 w-6">
              <span className={`${line} ${open ? "top-[11px] rotate-45" : "top-[7px]"}`} />
              <span className={`${line} ${open ? "top-[11px] -rotate-45" : "top-[15px]"}`} />
            </span>
          </button>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Mobile"
          aria-hidden={!open}
          inert={!open}
          className={`absolute inset-x-0 top-full mt-2 origin-top rounded-3xl bg-green-deep/90 p-3 text-white shadow-xl ring-1 ring-white/20 backdrop-blur-xl transition duration-300 ease-out motion-reduce:transition-none sm:hidden ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-3 scale-95 opacity-0"
          }`}
        >
          <ul>
            {links.map((l, i) => (
              <li
                key={l.href}
                style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
                className={`transition duration-300 ease-out motion-reduce:transition-none ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-lg font-medium transition hover:bg-white/10 hover:pl-6 active:bg-white/15"
                >
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
