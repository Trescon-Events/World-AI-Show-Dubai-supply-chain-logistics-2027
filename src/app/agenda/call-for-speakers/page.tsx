import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaCallForSpeakers } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Call for Logistics & Port Engineering Faculty | Agenda | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "Seeking Port Directors, CSCOs, Terminal Operations Chiefs, and Enterprise Supply Chain Architects with audited deployment case studies to join the stage on 10 June 2027 in Dubai. Organised by Trescon.",
};

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

export default function CallForSpeakersPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Call for Speakers" />
      <AgendaCallForSpeakers />
      <FooterSection />
    </main>
  );
}
