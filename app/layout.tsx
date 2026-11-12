import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";

const neue = localFont({
  variable: "--font-neue",
  display: "swap",
  src: [
    { path: "./fonts/NeueMontreal/NeueMontreal-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/NeueMontreal/NeueMontreal-Medium.woff2", weight: "500", style: "normal" },
  ],
});

export const viewport: Viewport = { themeColor: "#24501a" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Agro-processing and trading from Nigeria`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} – Corn grits, maize bran and export white yam`,
    description: site.description,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={neue.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
