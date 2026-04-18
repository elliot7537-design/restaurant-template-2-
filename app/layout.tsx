import type { Metadata } from "next";
import { Playfair_Display, Inter, Italianno } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const script = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Table Éternelle — Modern French dining with a timeless soul",
  description:
    "A Michelin-recommended French restaurant celebrating 50 years of elegant plates, warm light, and flavors that linger. Reserve your table today.",
  openGraph: {
    title: "La Table Éternelle",
    description: "Modern French dining with a timeless soul.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
