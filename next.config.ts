import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows the SVG placeholders. Safe here because images are local files only.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
