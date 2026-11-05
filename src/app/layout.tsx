import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "./components/ScrollToTop";
import { AOSInit } from "./components/AOSInit";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "Operating AI for predictable trade flows, port throughput, and resilient logistics. 10 June 2027 · Dubai, United Arab Emirates · One-Day Executive Implementation Forum. Connecting trade corridors, automated terminal operating systems, and enterprise supply chains with predictive AI. Organised by Trescon.",
  icons: {
    icon: "/dubai/supply-chain-logistics/favicon.png",
  },
  openGraph: {
    title: "World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
    description:
      "Operating AI for predictable trade flows, port throughput, and resilient logistics. 10 June 2027 · Dubai, United Arab Emirates · Day 2 · June Dubai Cluster. Organised by Trescon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-space-grotesk bg-bg text-text">
        <AOSInit />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
