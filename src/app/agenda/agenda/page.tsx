import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaLiveTimeline } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Full Master Schedule | Agenda | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "Explore the full master schedule for Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation in Dubai, United Arab Emirates. One-Day Executive Implementation Forum. Organised by Trescon.",
};

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

export default function AgendaSessionsPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Agenda" />
      <AgendaLiveTimeline />
      <FooterSection />
    </main>
  );
}
