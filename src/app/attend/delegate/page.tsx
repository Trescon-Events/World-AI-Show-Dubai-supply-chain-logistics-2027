import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendDelegateSection } from "../page";

export const metadata: Metadata = {
  title: "Delegate Pass | Attend | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "Delegate Pass — complimentary, strictly by invitation and qualification for Chief Supply Chain Officers, Port Operations Directors, Terminal Managers, and Heads of Fleet at World AI Show | Supply Chain, Ports & Logistics | Dubai 2027. Organised by Trescon.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function DelegatePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Delegate" />
      <AttendDelegateSection />
      <FooterSection />
    </main>
  );
}
