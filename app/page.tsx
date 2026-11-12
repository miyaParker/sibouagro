import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo-horizontal-color.png`,
  image: `${site.url}/opengraph-image.jpg`,
  description: site.description,
  email: site.email,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "NG",
  },
  sameAs: [site.linkedin],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <WhyUs />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
