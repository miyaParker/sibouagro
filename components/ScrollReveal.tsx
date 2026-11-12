"use client";

import { useEffect } from "react";

// Reveals any element marked with data-reveal as it scrolls into view.
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.reveal = "shown";
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    for (const el of els) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        el.dataset.reveal = "shown";
      } else {
        el.dataset.reveal = "hidden";
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, []);
  return null;
}
