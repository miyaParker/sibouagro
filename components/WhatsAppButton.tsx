import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[#1a7f4b] px-4 py-3 font-semibold text-white shadow-lg hover:bg-[#146a3e]"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.1 14.9l-.4-.2-2.600.7.700-2.500-.3-.4A8 8 0 0 1 12 4Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
