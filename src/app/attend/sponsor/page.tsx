import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendSponsorSection } from "../page";

export const metadata: Metadata = {
  title: "Commercial Partnerships | Attend | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "Explore commercial partnerships for Dubai 2027: plenary keynotes, 75-minute workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse stands, and closed-door CXO boardrooms. Organised by Trescon.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function SponsorPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Sponsor" />
      <AttendSponsorSection />
      <FooterSection />
    </main>
  );
}
