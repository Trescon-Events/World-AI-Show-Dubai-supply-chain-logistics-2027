import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { FooterSection } from "../components/sections/FooterSection";
import { GradientText } from "../components/Shared";

export const metadata: Metadata = {
  title: "Networking Suite & Attendee App | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "Explore the Networking Suite for World AI Show | Supply Chain, Ports & Logistics | Dubai 2027: Bilateral Meeting Service, Official Attendee App, and Executive Boardroom Access. Organised by Trescon.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function NetworkingPage() {
  const waysToConnect = [
    {
      title: "Official Attendee App",
      desc: "Interactive master agenda, participant directory, real-time stage polls, parallel clinic selection, and digital contact exchange.",
      href: "/dubai/supply-chain-logistics/networking/attendee-app/",
      action: "Explore",
      badgeBg: "bg-[#00ceff]",
      actionColor: "text-[#00ceff]",
      borderColor: "border-[#00ceff]/15",
      hoverBorder: "hover:border-[#00ceff]/45",
      hoverTitle: "group-hover:text-[#00ceff]",
    },
    {
      title: "Bilateral Meeting Service",
      desc: "Pre-scheduled 1-on-1 procurement discussions connecting supply chain chiefs, port directors, and terminal managers with vetted technology providers.",
      href: "/dubai/supply-chain-logistics/networking/ai-matchmaking/",
      action: "Explore",
      badgeBg: "bg-[#C0F43C]",
      actionColor: "text-[#C0F43C]",
      borderColor: "border-[#C0F43C]/15",
      hoverBorder: "hover:border-[#C0F43C]/45",
      hoverTitle: "group-hover:text-[#C0F43C]",
    },
    {
      title: "AI Photo Gallery",
      desc: "High-resolution executive photography from the global series, indexed instantly using AI face recognition.",
      href: "/dubai/supply-chain-logistics/networking/photo-gallery/",
      action: "Explore",
      badgeBg: "bg-[#926DFF]",
      actionColor: "text-[#926DFF]",
      borderColor: "border-[#926DFF]/15",
      hoverBorder: "hover:border-[#926DFF]/45",
      hoverTitle: "group-hover:text-[#926DFF]",
    },
  ];

  const roles = [
    "Port CEO, Chief Operating Officer (COO) & Terminal Operations Director",
    "Chief Supply Chain Officer (CSCO) & VP of Global Logistics",
    "Harbour Master, Head of Terminal Engineering & Head of TOS/IT",
    "Commercial Director & Head of Fleet Operations (Ocean, Air & Rail)",
    "3PL/4PL Managing Director & Contract Logistics Head",
    "Head of Warehouse Automation & Fulfilment Director",
    "Head of Procurement (Retail, FMCG, Automotive, Pharma & Industrial)",
    "Customs Authority, Trade Compliance & Border Security Lead",
  ];

  const industries = [
    "Port & Terminal Operators",
    "Enterprise Cargo Owners & Shippers",
    "Ocean Shipping Lines & Maritime Carriers",
    "Air Cargo & Sea-Air Corridors",
    "Rail Freight & Intermodal Networks",
    "3PL, 4PL & Contract Logistics",
    "Autonomous Warehousing & Fulfilment",
    "Retail, FMCG & E-Commerce Supply Chains",
    "Pharmaceutical & Cold-Chain Logistics",
    "Automotive & Industrial Freight",
    "Customs Authorities & Border Security",
    "Supply Chain AI, Robotics & Telematics",
  ];

  const industryBorders = [
    "border-[#C0F43C]/20",
    "border-[#926DFF]/20",
    "border-[#00CEFF]/20",
    "border-[#3b82f6]/20",
    "border-[#C0F43C]/20",
    "border-[#00CEFF]/20",
    "border-[#C0F43C]/20",
    "border-[#C0F43C]/20",
    "border-[#926DFF]/20",
    "border-[#C0F43C]/20",
    "border-[#00CEFF]/20",
    "border-[#3b82f6]/20",
  ];

  return (
    <main className="page-networking relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="Overview" />

      {/* ── Section 1: Hero ── */}
      <section
        className="relative pt-[220px] pb-[120px] overflow-hidden bg-cover bg-[position:center_top] flex items-center min-h-[700px] max-md:pt-[170px]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(2, 7, 19, 0.96) 0%, rgba(2, 7, 19, 0.8) 45%, rgba(2, 7, 19, 0.25) 100%), url('/dubai/supply-chain-logistics/images/networking/networking-hero-bg.webp')`,
        }}
      >
        <div className="w-[min(1172px,calc(100%-48px))] mx-auto relative z-10">
          <div className="w-full">
            <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
              Networking &amp; Matchmaking · Dubai 2027
            </span>
            <h1 className="m-0 text-white font-[850] leading-[1.03] tracking-[-2.5px] text-[clamp(44px,5.8vw,74px)]">
              Every <br />
              Conversation. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">By Design.</span>
            </h1>
            <p className="m-0 mt-6 text-white/75 text-[18px] leading-relaxed max-sm:text-[15px]">
              Curated specifically for senior port, terminal, carrier, and supply chain leadership, the forum moves beyond casual hallway encounters to deliver intentional, high-impact peer exchange. Connect directly with decision-makers through pre-scheduled 1-on-1 bilateral procurement discussions, managed off-the-record CXO boardroom sessions, and the official attendee app.
            </p>

            {/* Quick links buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-9 max-sm:flex-col max-sm:items-stretch">
              <a
                href="/dubai/supply-chain-logistics/attend/delegate/"
                className="px-8 py-[15px] rounded-full !text-black [color:#06111f!important] bg-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)] font-extrabold text-[14.5px] text-center transition-all duration-200 hover:-translate-y-0.5"
              >
                Apply for a Delegate Pass ➔
              </a>
              <a
                href="/dubai/supply-chain-logistics/sponsorship-enquiry/"
                className="px-8 py-[15px] rounded-full text-white border border-white/25 bg-white/5 hover:border-cyan font-extrabold text-[14.5px] text-center transition-all duration-200 hover:-translate-y-0.5"
              >
                Enquire About Partnerships ➔
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="relative py-12 border-y border-white/5 bg-[#020814]">
        <div className="w-[min(1172px,calc(100%-48px))] mx-auto">
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 text-center divide-x divide-white/10">
            <div className="flex flex-col">
              <span className="text-[40px] font-[900] text-[#C0F43C] tracking-tight">
                300+
              </span>
              <span className="text-[12.5px] text-white/50 uppercase tracking-widest font-mono font-bold mt-1.5">Senior Logistics Leaders</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-[900] text-[#C0F43C] tracking-tight">
                70%+
              </span>
              <span className="text-[12.5px] text-white/50 uppercase tracking-widest font-mono font-bold mt-1.5">Buy-Side Operator &amp; Cargo Owner Ratio</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-[900] text-[#C0F43C] tracking-tight">5 Groups</span>
              <span className="text-[12.5px] text-white/50 uppercase tracking-widest font-mono font-bold mt-1.5">Governed Logistics Constituencies</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Ways to Connect ── */}
      <section className="relative py-24 bg-[#030b19]">
        <div className="w-[min(1172px,calc(100%-48px))] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 w-full mx-auto">
            <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[2px] bg-[#18d4ff]/10 text-[#18d4ff] border border-[#18d4ff]/20 mb-5 inline-block">
              Networking Suite &amp; Attendee App
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(32px,4vw,44px)] m-0">
              Engineered for the <GradientText>Logistics &amp; Terminal Buying Unit</GradientText>
            </h2>
            <p className="m-0 mt-5 text-white/60 text-[16px] leading-relaxed max-sm:text-[14px]">
              Supply chain AI and automation procurement requires alignment across Port Directors, CSCOs, Terminal Engineers, Heads of TOS/WMS, and Fleet Operations Chiefs. Our networking suite connects all 5 governed logistics constituencies during the One-Day Executive Implementation Forum.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {waysToConnect.map((way) => (
              <a
                key={way.title}
                href={way.href}
                className={`group relative overflow-hidden p-8 border ${way.borderColor} ${way.hoverBorder} rounded-[24px] bg-[#050c1c]/50 hover:bg-[#050c1c]/80 shadow-[0_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between no-underline cursor-pointer`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${way.badgeBg}`}>
                      <img
                        src="/dubai/supply-chain-logistics/images/networking/Icon.webp"
                        alt="Icon"
                        className="w-[18px] h-[18px] object-contain brightness-0 invert-0 select-none"
                      />
                    </span>
                  </div>

                  <h3 className={`m-0 text-white font-extrabold text-[19px] tracking-tight ${way.hoverTitle} transition-colors`}>
                    {way.title}
                  </h3>
                  <p className="m-0 mt-3 text-white/60 text-[14px] leading-relaxed">
                    {way.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <span className={`inline-flex items-center gap-1.5 text-[14px] font-bold transition-all ${way.actionColor}`}>
                    {way.action} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">➔</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: 300+ Senior Logistics Leaders. One Room. ── */}
      <section className="relative py-24 bg-[#020814]">
        <div className="w-[min(1172px,calc(100%-48px))] mx-auto">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-12">
            {/* Left Column: Heading and Roles List */}
            <div className="flex flex-col">
              <span className="text-white/40 text-[13px] font-bold font-mono tracking-[2px] uppercase mb-3 block">
                Who Is In The Room
              </span>
              <h2 className="font-[850] text-white leading-[1.1] tracking-[-2px] text-[clamp(36px,4.5vw,52px)] m-0 mb-8">
                300+ Senior Logistics Leaders.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">70%+ Buy-Side Ratio.</span>
              </h2>

              {/* Roles List */}
              <div className="flex flex-col gap-3">
                {roles.map((role) => (
                  <div
                    key={role}
                    className="px-6 py-4 text-[14.5px] font-bold text-white/80 border border-[#2a2c4e] rounded-[14px] bg-[#050c1c]/10 hover:border-cyan/30 hover:bg-[#050c1c]/30 hover:text-white transition-all duration-200"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Industries represented & Executive Boardroom Access panel */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="m-0 mb-5 text-white font-extrabold text-[18px] tracking-tight">
                  Supply Chain, Port &amp; Freight Constituencies Represented
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map((ind, i) => {
                    const borderColor = industryBorders[i % industryBorders.length];
                    return (
                      <span
                        key={ind}
                        className={`px-5 py-2.5 rounded-full text-[13.5px] font-bold border ${borderColor} text-white/90 hover:text-white transition-all duration-200`}
                        style={{ backgroundColor: "#4d6f998c" }}
                      >
                        {ind}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Executive Boardroom Access Panel */}
              <div
                className="p-8 border border-[#926DFF]/30 rounded-[24px] shadow-[0_12px_32px_rgba(146,109,255,0.04)] relative overflow-hidden group hover:border-[#926DFF]/50 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(146, 109, 255, 0.12) 0%, rgba(146, 109, 255, 0.02) 100%), #040b1e",
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_80%_20%,rgba(146,109,255,0.08),transparent_70%)] pointer-events-none"></div>
                <h3 className="m-0 text-white font-[850] text-[19px] tracking-tight mb-3">
                  Executive <span className="text-[#a78bfa]">Boardroom Access</span>
                </h3>
                <p className="m-0 text-white/70 text-[14px] leading-relaxed">
                  Managed coordination for off-the-record CXO boardroom sessions alongside pre-scheduled 1-on-1 bilateral procurement meetings ahead of 10 June 2027 in Dubai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Closing CTA ── */}
      <section className="relative py-24 bg-[#030b19] border-t border-white/5">
        <div className="w-[min(820px,calc(100%-48px))] mx-auto relative overflow-hidden p-12 border border-[#C0F43C]/20 rounded-[28px] bg-gradient-to-br from-[#040d1f] to-[#020713] text-center shadow-[0_24px_62px_rgba(0,0,0,0.5)] max-sm:p-8">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C0F43C]/60 to-transparent"></div>

          <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(28px,3.5vw,38px)] m-0">
            Be in the room where <GradientText>2027 freight automation architecture and port modernisations are finalised.</GradientText>
          </h2>
          <p className="m-0 mt-4 text-white/58 text-[15px] leading-relaxed w-full mx-auto">
            Apply for a complimentary Delegate Pass (by invitation and qualification) or enquire about commercial partnerships for World AI Show | Supply Chain, Ports &amp; Logistics | Dubai 2027 (10 June 2027 · Dubai, UAE · One-Day Executive Implementation Forum).
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="/dubai/supply-chain-logistics/attend/delegate/"
              className="px-8 py-3.5 rounded-full text-black [color:#06111f!important] bg-[#C0F43C] font-extrabold text-sm shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Apply for a Delegate Pass ➔
            </a>
            <a
              href="/dubai/supply-chain-logistics/sponsorship-enquiry/"
              className="px-8 py-3.5 rounded-full text-white border border-white/25 bg-white/5 hover:border-cyan font-extrabold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Enquire About Partnerships ➔
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
