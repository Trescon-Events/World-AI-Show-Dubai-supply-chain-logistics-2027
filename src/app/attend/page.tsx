import type { Metadata } from "next";
import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";
import { AttendStats } from "./AttendStats";
import { GradientText } from "../components/Shared";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Attend | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "How to attend World AI Show | Supply Chain, Ports & Logistics | Dubai 2027 (10 June 2027 · Dubai, UAE · One-Day Executive Implementation Forum). Explore the Delegate Pass (complimentary, strictly by invitation and qualification), Business Pass, and Commercial Sponsorship packages. Organised by Trescon.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

type CardItem = {
  title: string;
  text: string;
  icon?: string;
};

const valueCards: CardItem[] = [
  {
    title: "Autonomous Ports & Multi-Modal Trade Intelligence",
    text: "A One-Day Executive Implementation Forum for 300+ senior supply chain leaders, port operations directors, terminal chiefs, shipping line heads, and 3PL/4PL operators moving AI into terminal, fleet, and warehouse production.",
    icon: "/dubai/supply-chain-logistics/images/Attend/enterprise-ai-in-action.svg",
  },
  {
    title: "Five Governed Logistics Constituencies",
    text: "Maintaining a minimum 70% buy-side operator and cargo owner ratio across port & terminal operators, enterprise cargo owners & shippers, shipping lines & multi-modal carriers, 3PL/4PL & warehousing giants, and supply chain technology providers.",
    icon: "/dubai/supply-chain-logistics/images/Attend/region-ai-decision-makers.svg",
  },
  {
    title: "Hands-On Breakout Workshops & Buyer Evidence",
    text: "Advance logistics decision-makers through unvarnished deployment post-mortems, parallel 75-minute workshop clinics, and outcome roundtables to resolve TOS/WMS/ERP integration and finalise H2 2027 automation procurement.",
    icon: "/dubai/supply-chain-logistics/images/Attend/insights-drive-transformation.svg",
  },
];

const gatewayCards: CardItem[] = [
  {
    title: "Full One-Day Plenary Access",
    text: "Full access on Thursday 10 June 2027 to Priority Briefs, Buyer Evidence case studies, Multi-Carrier Data Governance panels, and Applied Robotics & Fleet Routing sessions.",
    icon: "/dubai/supply-chain-logistics/images/Attend/gateway/access-to-all-sessions.svg",
  },
  {
    title: "Choice of 75-Min Breakout Clinic",
    text: "Select either Clinic A (Port Automation & Container Dwell Reduction) or Clinic B (Control Towers, Predictive Routing & Autonomous Warehousing).",
    icon: "/dubai/supply-chain-logistics/images/Attend/gateway/high-value-networking.svg",
  },
  {
    title: "Outcome Roundtables",
    text: "Participate in curated peer discussions capturing recorded supply chain procurement specifications and verified vendor evaluation criteria for 2027 deployments.",
    icon: "/dubai/supply-chain-logistics/images/Attend/gateway/curated-roundtable-discussions.svg",
  },
  {
    title: "Strict Buy-Side Qualification",
    text: "Reserved for Chief Supply Chain Officers, Port Operations Directors, Terminal Managers, Harbour Masters, and Heads of Fleet holding verified purchasing or operational authority.",
    icon: "/dubai/supply-chain-logistics/images/Attend/gateway/speaker-materials-and-insights.svg",
  },
  {
    title: "Executive Working Lunch & Reception",
    text: "Includes the Executive Working Lunch and the Hosted Networking Reception in Dubai concluding Day 2 of the June Dubai Cluster.",
    icon: "/dubai/supply-chain-logistics/images/Attend/gateway/networking-lunch-and-business-meetings.svg",
  },
  {
    title: "1-on-1 Bilateral Buyer Meetings",
    text: "Pre-scheduled 1-on-1 bilateral procurement discussions connecting supply chain chiefs and port directors with vetted technology providers.",
    icon: "/dubai/supply-chain-logistics/images/Attend/gateway/enterprise-ai-showcases.svg",
  },
  {
    title: "Technology Concourse Access",
    text: "Explore standardised 6 sqm, 9 sqm, and 12 sqm concourse stands demonstrating production-ready terminal automation, control tower, warehouse robotics, and customs intelligence platforms.",
    icon: "/dubai/supply-chain-logistics/images/Attend/gateway/exclusive-vip-networking-experiences.svg",
  },
  {
    title: "UAE PDPL Consent Governance",
    text: "Participant contact details are shared only where explicit consent is provided under the UAE Personal Data Protection Law (PDPL).",
    icon: "/dubai/supply-chain-logistics/images/Attend/gateway/event-platform-access.svg",
  },
];

const sponsorBenefits: CardItem[] = [
  {
    title: "Brand Visibility at Scale",
    text: "Amplify your presence across the Dubai venue, website, official attendee app, digital screens, campaigns, and executive communications.",
    icon: "/dubai/supply-chain-logistics/images/Attend/sponsor/brand-visibility-at-scale.webp",
  },
  {
    title: "Qualified Lead Generation",
    text: "Connect directly with pre-qualified port operators, enterprise cargo owners, shipping lines, 3PL/4PL heads, and logistics technology buyers.",
    icon: "/dubai/supply-chain-logistics/images/Attend/sponsor/qualified-lead-generation.webp",
  },
  {
    title: "Concourse Showcase Stands",
    text: "Demonstrate supply chain software, robotics, and telematics platforms live from turnkey 6 sqm, 9 sqm, and 12 sqm concourse stands.",
    icon: "/dubai/supply-chain-logistics/images/Attend/sponsor/product-showcase-floor.webp",
  },
  {
    title: "Plenary Keynotes & Clinic Leadership",
    text: "Position your organisation as a technical authority through plenary keynotes/firesides and exclusive leadership of 75-minute workshop clinics.",
    icon: "/dubai/supply-chain-logistics/images/Attend/sponsor/speaking-opportunities.webp",
  },
  {
    title: "1-on-1 Bilateral Buyer Meetings",
    text: "Engage in curated 1-on-1 bilateral procurement meetings aligned to your ideal port, carrier, and enterprise cargo owner customer profile.",
    icon: "/dubai/supply-chain-logistics/images/Attend/sponsor/hosted-meetings.webp",
  },
  {
    title: "CXO Closed-Door Boardrooms",
    text: "Host a curated 60-minute private session with senior logistics leaders including an opening address and off-the-record architecture discussion.",
    icon: "/dubai/supply-chain-logistics/images/Attend/partner/networking-access.webp",
  },
  {
    title: "Minimum 70% Buy-Side Ratio",
    text: "Strict room governance ensuring at least 70% of the 300+ attendees represent buy-side port operators, cargo owners, carriers, and 3PL/4PL leaders.",
    icon: "/dubai/supply-chain-logistics/images/Attend/sponsor/exclusive-sponsorship-branding.webp",
  },
  {
    title: "UAE PDPL Consent-Governed Leads",
    text: "Compliant post-forum executive engagement reporting; participant contact details are shared strictly where explicit consent is provided under UAE PDPL.",
    icon: "/dubai/supply-chain-logistics/images/Attend/sponsor/post-event-lead-report.webp",
  },
];

const mediaBenefits: CardItem[] = [
  {
    title: "Press Credentials & Plenary Access",
    text: "Full media accreditation on 10 June 2027 across all plenary briefings, port and cargo buyer evidence case studies, and freight governance panels.",
    icon: "/dubai/supply-chain-logistics/images/Attend/media/full-event-access.webp",
  },
  {
    title: "Executive Interview Room Access",
    text: "Dedicated press workspace and private interview suites in Dubai for 1-on-1 briefings with port directors, CSCOs, and international logistics faculty.",
    icon: "/dubai/supply-chain-logistics/images/Attend/media/dedicated-media-facilities.webp",
  },
  {
    title: "Editorial Distribution & Briefings",
    text: "Syndicate official Middle East freight automation benchmarks, trade corridor insights, and forum announcements to your maritime and logistics readership.",
    icon: "/dubai/supply-chain-logistics/images/Attend/media/speaker-interview-access.webp",
  },
  {
    title: "Official Logistics Press Kit",
    text: "Receive approved institutional briefings, speaker biographies, and verified sector briefs ahead of Day 2 of the June Dubai Cluster.",
    icon: "/dubai/supply-chain-logistics/images/Attend/media/official-media-kit.webp",
  },
  {
    title: "Supporting Trade Media Recognition",
    text: "Featured placement in the Supporting Trade Media & Maritime Industry Associations showcase across the website and Dubai venue.",
    icon: "/dubai/supply-chain-logistics/images/Attend/media/amplified-media-visibility.webp",
  },
  {
    title: "June Dubai Cluster Coverage",
    text: "Editorial access across the June Dubai Cluster in Dubai (Day 1: Manufacturing on 9 June 2027; Day 2: Supply Chain, Ports & Logistics on 10 June 2027).",
    icon: "/dubai/supply-chain-logistics/images/Attend/media/brand-and-media-recognition.webp",
  },
  {
    title: "Exclusive Port & Freight Case Studies",
    text: "Capture real-world terminal automation post-mortems, container dwell reduction metrics, and multi-modal control tower stories directly from GCC operators.",
    icon: "/dubai/supply-chain-logistics/images/Attend/media/exclusive-story-opportunities.webp",
  },
  {
    title: "VIP Concourse & Reception Access",
    text: "Connect directly with 300+ senior logistics leaders and 35–45 expert logistics and port speakers in Dubai.",
    icon: "/dubai/supply-chain-logistics/images/Attend/media/networking-access.webp",
  },
];

const associationBenefits: CardItem[] = [
  {
    title: "Logistics Councils & Maritime Federations",
    text: "Official institutional alliance recognition for regional logistics councils, port trade authorities, maritime associations, and freight forwarding federations.",
    icon: "/dubai/supply-chain-logistics/images/Attend/partner/co-branding-opportunities.webp",
  },
  {
    title: "Member Delegate Pass Pathway",
    text: "Priority nomination pathway for senior member CSCOs, Port Operations Directors, Terminal Chiefs, and Heads of Fleet to apply for complimentary Delegate Passes.",
    icon: "/dubai/supply-chain-logistics/images/Attend/partner/complimentary-delegate-passes.webp",
  },
  {
    title: "Co-Branded GCC Trade Corridor Outreach",
    text: "Joint executive communications, trade modernisation briefings, and institutional visibility across World AI Show | Supply Chain, Ports & Logistics | Dubai 2027.",
    icon: "/dubai/supply-chain-logistics/images/Attend/partner/joint-marketing-campaigns.webp",
  },
  {
    title: "Digital & Social Amplification",
    text: "Collaborative promotion across Trescon's global executive network (48 completed editions across 4 continents) and official channels.",
    icon: "/dubai/supply-chain-logistics/images/Attend/partner/social-media-amplification.webp",
  },
  {
    title: "Faculty & Roundtable Nominations",
    text: "Nominate qualified port engineers, supply chain chiefs, and logistics architects with live deployment evidence for plenary panels and Outcome Roundtables.",
    icon: "/dubai/supply-chain-logistics/images/Attend/partner/speaking-opportunities.webp",
  },
  {
    title: "VIP Bilateral Networking Access",
    text: "Connect association leadership with 300+ senior logistics decision-makers in Dubai.",
    icon: "/dubai/supply-chain-logistics/images/Attend/partner/networking-access.webp",
  },
  {
    title: "Post-Forum Outcome Synthesis",
    text: "Share recorded procurement benchmarks and H2 2027 automation implementation roadmaps from the four operational pillars with your members.",
    icon: "/dubai/supply-chain-logistics/images/Attend/partner/access-to-post-event-insights.webp",
  },
  {
    title: "Global World AI Show Series Alliance",
    text: "Extend institutional collaboration across the World AI Show Industry Series and regional GCC executive implementation forums.",
    icon: "/dubai/supply-chain-logistics/images/Attend/partner/long-term-partnership-opportunities.webp",
  },
];

export function ArrowButton({
  children,
  href = "/dubai/supply-chain-logistics/sponsorship-enquiry/",
  variant = "solid",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-3.5 min-w-[178px] h-[49px] px-[25px] rounded-full text-[15px] font-extrabold transition-all duration-180 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(185,248,45,0.24)] cursor-pointer";
  const styles = {
    solid: "bg-[#C0F43C] !text-black [color:#06111f!important] shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)]",
    outline: "text-white border border-[#4eb9ff]/80 bg-[#030a18]/30 shadow-[inset_0_0_24px_rgba(46,172,255,0.08)] hover:border-cyan/100 hover:bg-[#030a18]/50",
  };

  return (
    <a className={`${baseClasses} ${styles[variant]}`} href={href}>
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[15px] h-[15px] object-contain"
        aria-hidden="true"
      >
        <path
          d="M3.33334 8H12.6667"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.66666 4L12.6667 8L8.66666 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export function NumberedCard({ item, index }: { item: CardItem; index: number }) {
  return (
    <article className="group relative min-h-[235px] p-7 border border-white/[0.17] rounded-[13px] bg-gradient-to-br from-[#00ceff]/12 to-[#996cff]/14 bg-[#050c1c]/80 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#18d4ff]/50 hover:shadow-[0_12px_36px_rgba(0,206,255,0.12),inset_0_0_24px_rgba(24,212,255,0.04)]">
      <span className="grid place-items-center w-11 h-11 mb-7 border border-white/8 rounded-[14px] text-cyan bg-[#030914]/72 text-[11px] font-extrabold select-none group-hover:text-[#06111f] group-hover:bg-[#C0F43C] group-hover:border-[#C0F43C] group-hover:shadow-[0_0_15px_rgba(192,244,60,0.35)] transition-all duration-300">
        {item.icon ? (
          <img src={item.icon} alt="" className="w-5 h-5 object-contain group-hover:brightness-0 transition-all duration-300" loading="lazy" />
        ) : index + 1 < 10 ? (
          `0${index + 1}`
        ) : (
          index + 1
        )}
      </span>
      <span className="absolute right-[25px] top-[30px] px-[9px] py-1 rounded-full text-cyan bg-[#12d7ff]/9 text-[11px] font-extrabold tracking-[1px] select-none group-hover:text-black group-hover:bg-[#C0F43C] transition-all duration-300">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </span>
      <h3 className="m-0 mb-2.5 text-white font-[850] text-[18px] leading-tight transition-colors duration-200 group-hover:text-[#C0F43C]">{item.title}</h3>
      <p className="m-0 text-white/62 text-[15px] leading-relaxed transition-colors duration-200 group-hover:text-white/80">{item.text}</p>
    </article>
  );
}

export function BenefitGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {items.map((item, index) => (
        <NumberedCard item={item} index={index} key={item.title} />
      ))}
    </div>
  );
}

export function SplitSection({
  id,
  eyebrow,
  title,
  text,
  button,
  buttonHref,
  imageAlt,
  imageSrc,
  reverse = false,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  text: ReactNode;
  button: string;
  buttonHref?: string;
  imageAlt: string;
  imageSrc: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-[92px] bg-[#020b1c] max-sm:py-[66px]" id={id}>
      <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
        <div className="mb-10">
          {eyebrow && (
            <p className="m-0 mb-[16px] text-white/78 text-[13px] font-[650] tracking-[4px] uppercase select-none font-mono">
              {eyebrow}
            </p>
          )}
          <h2 className="m-0 text-white font-[850] leading-[1.1] tracking-[-1.6px] text-[clamp(30px,3.6vw,46px)] max-sm:text-[30px] max-sm:tracking-[-1px]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-[1fr_minmax(360px,47%)] items-center gap-[64px] max-[980px]:grid-cols-1 max-sm:gap-[34px]">
          <div className={`flex flex-col ${reverse ? "max-[980px]:order-none order-2" : "order-none"}`}>
            <p className="m-0 mb-9 text-white/75 text-[18px] leading-[1.7] max-sm:text-base">
              {text}
            </p>
            <div className="flex">
              <ArrowButton href={buttonHref || `#${id}`}>{button}</ArrowButton>
            </div>
          </div>
          <div className="relative overflow-hidden border border-[#55cfff]/22 rounded-[24px] bg-[#071426]/72 shadow-[0_0_44px_rgba(0,206,255,0.12)]">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#020b2c]/18 pointer-events-none" />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover filter saturate-[0.96] brightness-[0.95]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttendCTASection() {
  return (
    <section className="py-[86px] pt-[86px] bg-gradient-to-b from-transparent to-[#020a2c]/18 max-sm:py-[62px]">
      <div className="w-[min(980px,calc(100%-48px))] mx-auto p-[66px_48px] border border-[#c0f43c]/35 rounded-[36px] text-center bg-[#050c1c]/82 shadow-[0_0_60px_rgba(192,244,60,0.12),inset_0_0_34px_rgba(0,206,255,0.03)] max-sm:p-[42px_22px] max-sm:w-[min(100%-28px,1120px)] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(192,244,60,0.04),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#2E3C4D]/45" />

        <div className="relative z-10">
          <span className="inline-flex items-center mb-[27px] px-[15px] py-2 border border-white/10 rounded-full text-white/72 text-[12px] tracking-[2px] uppercase select-none before:content-[''] before:w-[7px] before:h-[7px] before:mr-2.5 before:rounded-full before:bg-cyan font-mono">
            Dubai · 10 June 2027 · One-Day Forum · 300+ Senior Logistics Leaders
          </span>
          <h2 className="w-full mx-auto mb-8 text-[#f7f9ff] font-[850] leading-[1.08] tracking-[-1.8px] text-[clamp(36px,5vw,56px)] max-sm:text-[32px] max-sm:tracking-[-1px]">
            Be in the room where <span className="bg-gradient-to-r from-[#C0F43C] to-[#18d4ff] bg-clip-text text-transparent">2027 freight automation architecture and port modernisations</span> are finalised.
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 mb-12 max-sm:flex-col max-sm:w-full">
            <a
              href="/dubai/supply-chain-logistics/attend/delegate/"
              className="inline-flex items-center justify-center gap-2 min-w-[178px] h-[49px] px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-[#06111f] [color:#06111f!important] bg-[#C0F43C] shadow-[0_8px_24px_rgba(192,244,60,0.25)] hover:shadow-[0_12px_32px_rgba(192,244,60,0.4)] hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Apply for a Delegate Pass
              <span className="font-mono text-[16px] font-bold">→</span>
            </a>
            <a
              href="/dubai/supply-chain-logistics/sponsorship-enquiry/"
              className="inline-flex items-center justify-center min-w-[178px] h-[49px] px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-white bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Enquire About Partnerships
            </a>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8" />

          <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1 max-sm:gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Date
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide font-mono">
                10 June 2027 · One-Day Forum
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Location
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide text-center">
                Dubai, UAE
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Organiser
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide">
                Organised by Trescon
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttendOverviewSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[700px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:center_top] bg-no-repeat max-sm:min-h-[600px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(2, 7, 19, 0.92) 0%, rgba(2, 7, 19, 0.56) 45%, rgba(2, 7, 19, 0.1) 100%), url("/dubai/supply-chain-logistics/images/Attend/Overview-banner.webp")',
        }}
        id="overview"
      >
        <div className="heroBackdrop absolute bottom-0 right-[-3%] w-[58%] h-[84%] opacity-0 pointer-events-none" />
        <div className="relative z-10 w-full">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.06] tracking-[-1.8px] text-[clamp(42px,5.4vw,68px)] max-sm:text-[36px]">
            Autonomous ports, predictive control towers, and <GradientText>multi-modal trade intelligence.</GradientText>
          </h1>
          <div className="flex flex-wrap gap-3.5 mt-10 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/dubai/supply-chain-logistics/attend/delegate/" variant="solid">
              Apply for a Delegate Pass
            </ArrowButton>
            <ArrowButton href="/dubai/supply-chain-logistics/sponsorship-enquiry/" variant="outline">
              Enquire About Partnerships
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* Trade Floor Realities Split Section */}
      <section className="py-[92px] bg-[#020b1c] max-sm:py-[66px]">
        <div className="grid grid-cols-[1.08fr_0.92fr] items-center gap-[68px] w-[min(1120px,calc(100%-48px))] mx-auto max-[980px]:grid-cols-1 max-sm:gap-[34px]">
          <div className="flex flex-col">
            <h2 className="m-0 text-white font-[850] leading-[1.08] tracking-[-1.6px] text-[clamp(36px,4.4vw,52px)] max-sm:text-[32px]">
              Trade floor realities over <GradientText>experimental trials.</GradientText>
            </h2>
            <p className="mt-6 mb-4 text-white/75 text-[17px] leading-[1.65]">
              Global maritime, air-cargo, and land-freight networks operating through the Gulf face compounding volatility: vessel routing disruptions, container yard congestion, fragmented multi-carrier data visibility, and tightening decarbonisation mandates. While experimental logistics pilots have proliferated, enterprise shippers and terminal operators now demand production-grade systems capable of lowering dwell times and automating customs clearance at scale.
            </p>
            <p className="m-0 text-white/75 text-[17px] leading-[1.65]">
              World AI Show | Supply Chain, Ports &amp; Logistics | Dubai 2027 is structured around four critical operational mandates: port automation &amp; container dwell reduction, predictive supply chain control towers, intelligent warehousing &amp; last-mile fleet routing, and trade document intelligence &amp; customs clearance.
            </p>
          </div>
          <div className="relative overflow-hidden border border-[#55cfff]/25 rounded-[24px] bg-[#071426]/72 shadow-[0_0_44px_rgba(0,206,255,0.14)]">
            <img
              src="/dubai/supply-chain-logistics/images/agenda/About.webp"
              alt="Trade floor realities over experimental trials"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[86px] pt-[74px] bg-gradient-to-b from-[#020c21] to-[#031127] text-center max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
          <h2 className="w-full mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            The <GradientText>Room Composition</GradientText>
          </h2>
          <AttendStats />
        </div>
      </section>

      {/* Two-Door Pass Matrix Section (Section 08: /dubai/supply-chain-logistics/attend/) */}
      <section className="py-[86px] bg-[#020c21] max-sm:py-[62px]" id="pass-matrix">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
          <div className="text-center mb-12">
            <h2 className="w-full mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(36px,4.6vw,54px)]">
              Two-Door <GradientText>Attendance Model</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
            {/* Door 1 */}
            <div className="flex flex-col justify-between p-9 rounded-[24px] border border-[#C0F43C]/45 bg-gradient-to-br from-[#C0F43C]/10 via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div>
                <h3 className="text-white font-extrabold text-[25px] leading-[1.2] mb-3">
                  Delegate Pass — Complimentary, strictly by invitation and qualification
                </h3>
                <p className="text-white/80 text-[16px] leading-[1.6] mb-5">
                  Reserved for CSCOs, port operations directors, terminal chiefs, and logistics heads holding active purchasing or operational mandates.
                </p>
                <ul className="space-y-2.5 mb-8 text-white/75 text-[15px] list-none p-0">
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> Target Audience: Chief Supply Chain Officers, Port Operations Directors, Terminal Managers, and Heads of Fleet</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> Inclusions: Plenary stage access, choice of Parallel Breakout Clinic (Port Dwell Reduction or Control Towers), Outcome Roundtables, and networking reception</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> Privacy: Participant contact details are shared only where explicit consent is provided under the UAE Personal Data Protection Law (PDPL)</li>
                </ul>
              </div>
              <div>
                <ArrowButton href="/dubai/supply-chain-logistics/attend/delegate/" variant="solid">
                  Apply for a Delegate Pass
                </ArrowButton>
              </div>
            </div>

            {/* Door 2 */}
            <div className="flex flex-col justify-between p-9 rounded-[24px] border border-cyan/40 bg-gradient-to-br from-cyan/10 via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div>
                <h3 className="text-white font-extrabold text-[25px] leading-[1.2] mb-3">
                  Business Pass — Paid commercial access (strictly capped quota)
                </h3>
                <p className="text-white/80 text-[16px] leading-[1.6] mb-5">
                  Provides commercial access for logistics software vendors, telematics providers, and technology consultancies outside the invitation criteria. Maintained at a premium barrier to preserve the 70%+ buy-side ratio.
                </p>
                <ul className="space-y-2.5 mb-8 text-white/75 text-[15px] list-none p-0">
                  <li className="flex items-start gap-2.5"><span className="text-cyan font-bold">✓</span> Paid commercial access for logistics software vendors, telematics platforms, robotics suppliers, and systems integrators</li>
                  <li className="flex items-start gap-2.5"><span className="text-cyan font-bold">✓</span> Strictly capped quota to protect the minimum 70% buy-side operator and cargo owner ratio</li>
                  <li className="flex items-start gap-2.5"><span className="text-cyan font-bold">✓</span> Full one-day access to plenary sessions, concourse showcase, and Hosted Networking Reception</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <ArrowButton href="/dubai/supply-chain-logistics/general-enquiry/" variant="outline">
                  Purchase a Business Pass
                </ArrowButton>
                <ArrowButton href="/dubai/supply-chain-logistics/attend/sponsor/" variant="solid">
                  Explore Sponsorship Tiers
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-[86px] bg-gradient-to-b from-[#031127] to-[#020b1c] text-center max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h3 className="w-full mx-auto mt-0 mb-10 text-white font-[850] leading-[1.08] tracking-[-1.5px] text-[clamp(32px,4vw,46px)] max-sm:text-[30px]">
            Why Logistics &amp; Port Leaders Convene in <GradientText>Dubai, UAE</GradientText>
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-9 max-[980px]:grid-cols-[repeat(3,310px)] max-sm:grid-cols-1">
            {valueCards.map((card, index) => (
              <NumberedCard item={card} index={index} key={card.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function AttendDelegateSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:center_top] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/dubai/supply-chain-logistics/images/Attend/Delegates-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 w-full">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(42px,5.4vw,66px)] max-sm:text-[36px]">
            Built for Pre-Qualified <GradientText>Supply Chain, Port &amp; Logistics Leaders.</GradientText>
          </h1>
          <p className="w-full mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Complimentary passes are reserved exclusively for senior logistics executives: Chief Supply Chain Officers, Port Operations Directors, Terminal Managers, and Heads of Fleet holding verified purchasing, operational, or logistics modernisation authority.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="#delegate-qualification">Apply for a Delegate Pass</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Submit Delegate Qualification Application"
        buttonHref="/dubai/supply-chain-logistics/general-enquiry/"
        id="delegate-qualification"
        eyebrow="Qualification & UAE PDPL Consent Governance"
        imageAlt="Invited Supply Chain CXOs at World AI Show Dubai"
        imageSrc="/dubai/supply-chain-logistics/images/Attend/AI-decision-maker.webp"
        title={<>Plenary Stage Access, Parallel Clinics &amp; <GradientText>Outcome Roundtables</GradientText></>}
        text={
          <>
            <strong>Target Audience:</strong> Chief Supply Chain Officers (CSCOs), Port Operations Directors, Terminal Managers, Harbour Masters, Heads of Fleet, and Contract Logistics Directors.
            <br />
            <br />
            <strong>Inclusions:</strong> Includes plenary stage access, choice of Parallel Breakout Clinic (Port Dwell Reduction or Control Towers), Outcome Roundtables, and networking reception.
            <br />
            <br />
            <strong>Privacy &amp; Consent Qualifier:</strong> Participant contact details are shared only where explicit consent is provided under the UAE Personal Data Protection Law (PDPL).
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 mb-[42px] text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-center text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Delegate Pass <GradientText>Inclusions &amp; Standards</GradientText>
          </h2>
          <BenefitGrid items={gatewayCards} />
        </div>
      </section>
    </>
  );
}

export function AttendSponsorSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/dubai/supply-chain-logistics/images/Attend/Sponsor-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 w-full">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(42px,5.4vw,66px)] max-sm:text-[36px]">
            Where logistics leaders specify, validate, and <GradientText>procure production AI.</GradientText>
          </h1>
          <p className="w-full mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Middle East port authorities, logistics giants, and multinational cargo owners are finalising their 2027 technology procurement decisions now. Commercial partnerships are structured around plenary keynotes, workshop clinic leadership, turnkey 6 sqm, 9 sqm, and 12 sqm concourse stands, and closed-door CXO boardrooms.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/dubai/supply-chain-logistics/sponsorship-enquiry/">Enquire About Partnerships</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Request Commercial Partnership Prospectus"
        buttonHref="/dubai/supply-chain-logistics/sponsorship-enquiry/"
        id="sponsor"
        eyebrow="Commercial Partnership Tiers (Capped Inventory)"
        imageAlt="Standardised Speaking and Concourse Stand Framework at World AI Show Dubai"
        imageSrc="/dubai/supply-chain-logistics/images/Attend/brand-center-innovation.webp"
        reverse={false}
        title={
          <>
            Put Your Logistics Platform Before{" "}
            <br className="max-md:hidden" />
            <GradientText>Qualified Enterprise Procurement Teams</GradientText>
          </>
        }
        text={
          <>
            • <strong>Speaking Sponsor:</strong> Plenary Keynote/Fireside + 12 sqm Concourse Stand + 12 Passes + VIP Buyer Meetings
            <br />
            • <strong>Engagement Partner:</strong> Exclusive Leadership of 75-Min Workshop Clinic + 9 sqm Stand + 8 Passes
            <br />
            • <strong>CXO Closed-Door Boardroom:</strong> Curated 60-Min Private Session with Logistics Leaders + Opening Address
            <br />
            • <strong>Industry Partner:</strong> Plenary Panel Speaking Seat + 9 sqm Stand + 6 Passes
            <br />
            • <strong>Exhibitor:</strong> 6 sqm Standard Turnkey Concourse Stand + 4 Passes
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 mb-[42px] text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-center text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Standardised Partnership <GradientText>Tiers &amp; Deliverables</GradientText>
          </h2>
          <BenefitGrid items={sponsorBenefits} />
        </div>
      </section>
    </>
  );
}

export function AttendMediaSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/dubai/supply-chain-logistics/images/Attend/Media-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 w-full">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Cover the Premier <GradientText>Middle East Supply Chain &amp; Port AI Forum</GradientText>
          </h1>
          <p className="w-full mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Press credentials, executive interview room access, and approved institutional briefings for accredited trade, maritime, and logistics journalists covering World AI Show | Supply Chain, Ports &amp; Logistics | Dubai 2027.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/dubai/supply-chain-logistics/media-enquiry/">Apply for Media Accreditation</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Apply for Media Accreditation"
        buttonHref="/dubai/supply-chain-logistics/media-enquiry/"
        id="media-partner"
        imageAlt="Trade media interview coverage at World AI Show Dubai"
        imageSrc="/dubai/supply-chain-logistics/images/Attend/cover-southeast.webp"
        title={<>Press Credentials &amp; <GradientText>Executive Interview Access</GradientText></>}
        text={
          <>
            World AI Show | Supply Chain, Ports &amp; Logistics | Dubai 2027 convenes 300+ senior logistics leaders alongside 35–45 expert logistics and port speakers on 10 June 2027 in Dubai.
            <br />
            <br />
            Accredited maritime, supply chain, freight, and enterprise technology journalists, editors, and industry analysts receive press credentials, dedicated interview room access, and approved institutional briefings across the forum.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <BenefitGrid items={mediaBenefits} />
        </div>
      </section>
    </>
  );
}

export function AttendAssociationSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/dubai/supply-chain-logistics/images/Attend/Association-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 w-full">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Industry <GradientText>Alliances &amp; Logistics Councils</GradientText>
          </h1>
          <p className="w-full mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Collaborate with regional logistics councils, port trade authorities, maritime associations, and freight forwarding federations to steer trade corridor modernisation, foster bilateral delegations, and champion audited operational innovation across the Middle East.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/dubai/supply-chain-logistics/association-enquiry/">Apply for Institutional Alliance</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Submit Institutional Alliance Application"
        buttonHref="/dubai/supply-chain-logistics/association-enquiry/"
        id="association-partner"
        imageAlt="Strengthening the Middle East Logistics and Maritime Ecosystem Together"
        imageSrc="/dubai/supply-chain-logistics/images/Attend/strengthening-ai-ecosystem.webp"
        reverse={false}
        title={<>Regional Logistics Councils, Port Trade Authorities &amp; <GradientText>Freight Federations</GradientText></>}
        text={
          <>
            World AI Show | Supply Chain, Ports &amp; Logistics | Dubai 2027 welcomes regional logistics councils, port trade authorities, and freight forwarding federations as official industry alliance partners.
            <br />
            <br />
            Connect your senior supply chain, maritime, and freight members with 300+ pre-qualified C-suite peers, nominate faculty speakers with verified production case studies, and shape the regional logistics procurement dialogue in Dubai.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <BenefitGrid items={associationBenefits} />
        </div>
      </section>
    </>
  );
}

export default function AttendPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Overview" />
      <AttendOverviewSection />
      <FooterSection />
    </main>
  );
}
