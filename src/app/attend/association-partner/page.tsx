import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendAssociationSection } from "../page";

export const metadata: Metadata = {
  title: "Industry Alliances | Attend | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "Partner with World AI Show | Supply Chain, Ports & Logistics | Dubai 2027 (10 June 2027 · Dubai). Regional logistics councils, port trade authorities, and freight forwarding federations. Organised by Trescon.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function AssociationPartnerPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Association Partner" />
      <AttendAssociationSection />
      <FooterSection />
    </main>
  );
}
