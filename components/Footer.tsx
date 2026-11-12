import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-forest text-white/90 border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2">
        <div>
          <p className="text-lg font-normal">{site.name}</p>
          <p className="mt-1">
            {site.city}, {site.country}
          </p>
        </div>
        <ul className="space-y-1">
          <li>
            Phone / WhatsApp:{" "}
            <a className="underline" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </li>
          <li>
            Email:{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </li>
          <li>
            <a className="underline" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
