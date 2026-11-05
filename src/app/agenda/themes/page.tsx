import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaThemes } from "../AgendaPage";

export const metadata: Metadata = {
  title: "The 4 Core Operational Pillars | Agenda | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "Four freight-corridor mandates. One day. Explore the 4 Core Operational Pillars of World AI Show | Supply Chain, Ports & Logistics | Dubai 2027 (10 June 2027 · Dubai). Organised by Trescon.",
};

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

export default function ThemesPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Themes" />
      <AgendaThemes />
      <FooterSection />
    </main>
  );
}
