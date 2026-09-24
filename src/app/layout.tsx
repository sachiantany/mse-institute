import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MSE | Masters in Specialized Education — Puttalam",
  description:
    "MSE Higher Educational Center provides quality G.C.E. O/L and A/L tuition classes in Puttalam, Sri Lanka. Build strong academic foundations with expert guidance.",
  keywords: [
    "MSE",
    "tuition",
    "Puttalam",
    "O/L",
    "A/L",
    "Sri Lanka",
    "education",
    "classes",
    "GCE",
    "ordinary level",
    "advanced level",
    "MSE Higher Educational Center",
    "tuition centre Puttalam",
  ],
  metadataBase: new URL("https://mse-institute.vercel.app"),
  openGraph: {
    title: "MSE | Masters in Specialized Education",
    description:
      "Quality G.C.E. O/L and A/L tuition classes in Puttalam, Sri Lanka.",
    images: ["/images/logo.jpg"],
    type: "website",
    locale: "en_LK",
    siteName: "MSE Higher Educational Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSE | Masters in Specialized Education",
    description:
      "Quality G.C.E. O/L and A/L tuition classes in Puttalam, Sri Lanka.",
    images: ["/images/logo.jpg"],
  },
  alternates: { canonical: "https://mse-institute.vercel.app" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "MSE Higher Educational Center",
  alternateName: "Masters in Specialized Education",
  description:
    "Quality G.C.E. O/L and A/L tuition classes in Puttalam, Sri Lanka.",
  url: "https://mse-institute.vercel.app",
  logo: "https://mse-institute.vercel.app/images/logo.jpg",
  image: "https://mse-institute.vercel.app/images/building.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 08, 15th Lane, Goods Shed Road",
    addressLocality: "Puttalam",
    addressCountry: "LK",
  },
  sameAs: ["https://www.facebook.com/MSEHEC/"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.0331,
    longitude: 79.8283,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
