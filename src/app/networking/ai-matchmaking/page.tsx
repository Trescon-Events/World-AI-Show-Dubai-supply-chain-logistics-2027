import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AIMatchmakingContent } from "./AIMatchmakingContent";

export const metadata: Metadata = {
  title: "Bilateral Meeting Service & AI Matchmaking | Networking | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "Pre-scheduled 1-on-1 procurement discussions connecting supply chain chiefs with vetted technology providers at World AI Show | Supply Chain, Ports & Logistics | Dubai 2027 (10 June 2027 · Dubai, UAE). Organised by Trescon.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function AIMatchmakingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="AI Matchmaking" />
      <AIMatchmakingContent />
      <FooterSection />
    </main>
  );
}
