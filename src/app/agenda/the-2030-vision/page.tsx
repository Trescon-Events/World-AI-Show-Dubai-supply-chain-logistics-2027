import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaVision } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Strategic Catalysts & 2027 Mandates | Agenda | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "Explore the regional drivers accelerating 2027 logistics modernisation in Dubai: Jebel Ali Port Automation Mandates, Dubai South Sea-Air Corridor Expansion, Etihad Rail Freight Integration, and National Green Transport Targets. Organised by Trescon.",
};

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

export default function VisionPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="The Vision" />
      <AgendaVision />
      <FooterSection />
    </main>
  );
}
