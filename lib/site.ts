// Central place for company details. Replace the placeholders below.
export const site = {
  name: "Sibou Agro Ltd",
  // Uses NEXT_PUBLIC_SITE_URL if set, otherwise the Vercel production domain,
  // so share-image URLs always point at a host that is actually live.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://sibouagro.com"),
  tagline:
    "Agro-processing and trading from Nigeria – quality produce for local and export buyers",
  description:
    "Sibou Agro Ltd is a Lagos-based agro-processing and trading company supplying corn grits, maize bran and export-grade fresh white yam to local and international buyers.",
  city: "Lagos",
  country: "Nigeria",
  phoneDisplay: "+234 912 427 8867",
  phoneTel: "+2349124278867",
  whatsappMessage: "Hello Sibou Agro, I'd like to request a quote.",
  whatsappNumber: "2349124278867", // digits only, no +
  email: "info@sibouagro.com",
  linkedin: "https://www.linkedin.com/company/sibou-agro-ltd/",
};
