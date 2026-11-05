"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";

import styles from "./AgendaPage.module.css";
import "./agenda.css";
import { AgendaSection, sixPartBlocks } from "../components/sections/AgendaSection";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { SpeakerCallToStage } from "../speakers/SpeakerCallToStage";

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

const formats: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Plenary Keynotes & Live Buyer Evidence",
    text: "Frontline case studies and fireside briefings led by Port Directors, Chief Supply Chain Officers (CSCOs), Terminal Operations Chiefs, and enterprise shippers. Moving past theoretical concepts to examine real-world TOS/WMS retrofits, sensor hurdles, pilot failure post-mortems, and verified dwell-time outcomes.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    title: "75-Minute Parallel Breakout Workshops",
    text: "Collaborative, hands-on workshop clinics engineered to tackle acute terminal and freight bottlenecks: Clinic A on Port Automation & Container Dwell Reduction, and Clinic B on Control Towers, Predictive Routing & Autonomous Warehousing.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
      </svg>
    ),
  },
  {
    title: "CXO Closed-Door Boardrooms & Outcome Roundtables",
    text: "Curated 60-minute private closed-door boardrooms for senior logistics leaders alongside peer outcome roundtables. Engineered for buy-side operators and cargo owners to benchmark vendors, evaluate federated carrier data boundaries, and finalise H2 2027 automation procurement specifications.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const regionalCatalysts = [
  [
    "Jebel Ali Port Automation Mandates",
    "Large-scale capital deployment into autonomous container handling, BoxBay high-bay storage, and automated terminal operations.",
    "/dubai/supply-chain-logistics/images/agenda/Policy.webp",
  ],
  [
    "Dubai South Sea-Air Corridor Expansion",
    "Multi-billion-dollar infrastructure connecting Jebel Ali Port with Al Maktoum International Airport for rapid bonded cargo transit.",
    "/dubai/supply-chain-logistics/images/agenda/AI-infra.webp",
  ],
  [
    "Etihad Rail Freight Integration",
    "Integration of the national railway network connecting ports, manufacturing hubs, and logistics zones via unified AI scheduling.",
    "/dubai/supply-chain-logistics/images/agenda/investment.webp",
  ],
  [
    "National Green Transport Targets",
    "Decarbonisation mandates driving AI-based fleet routing, load consolidation, and electric transport transition.",
    "/dubai/supply-chain-logistics/images/agenda/Global.webp",
  ],
];

type SupplyChainAgendaSession = {
  id: number;
  dayKey: string;
  dayLabel: string;
  startTime: string;
  endTime: string;
  title: string;
  typeTitle: string;
  location: string;
  description: string;
  trackId: string;
  trackTitle: string;
};

const supplyChainSchedule: SupplyChainAgendaSession[] = [
  {
    id: 101,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "08:00",
    endTime: "09:00",
    title: "Registration, Networking Breakfast & Concourse Opening",
    typeTitle: "Registration & Concourse",
    location: "Registration Concourse & Logistics Technology Showcase",
    description:
      "Executive badge collection, networking breakfast, and opening of the logistics technology demonstration concourse (6 sqm, 9 sqm, and 12 sqm turnkey footprints).",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 102,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "09:00",
    endTime: "10:15",
    title: "Priority Brief: The 2027 Global Trade Mandate & Opening Port Case Study",
    typeTitle: "Stage 1 · Priority Brief",
    location: "Main Plenary Stage",
    description:
      "Opening executive briefing by port authorities and trade leaders detailing regional freight chokepoints, fuel price volatility, and ranked operational priorities, followed by an opening port automation case study.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 103,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "10:15",
    endTime: "10:45",
    title: "Networking Break & Hosted Bilateral Buyer Meetings",
    typeTitle: "1-on-1 Matchmaking & Concourse",
    location: "Logistics Technology Demonstration Concourse & Bilateral Meeting Lounge",
    description:
      "Pre-scheduled 1-on-1 bilateral procurement discussions connecting supply chain chiefs and port directors with vetted technology providers alongside live technical demonstrations.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 104,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "10:45",
    endTime: "12:15",
    title: "Buyer Evidence: Real-World Logistics Deployments & Pilot Failure Post-Mortems",
    typeTitle: "Stage 2 · Buyer Evidence",
    location: "Main Plenary Stage",
    description:
      "Frank case studies from multinational cargo owners and terminal operators examining real-world deployment challenges, sensor hurdles, TOS/WMS integration friction, and pilot post-mortems.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 105,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "12:15",
    endTime: "13:00",
    title: "Executive Panel: Multi-Carrier Data Sharing, Capital Expenditure & Freight ROI Timelines",
    typeTitle: "Stage 3 & 4 · Use-Case Clinics & Risk/Trust Plenary",
    location: "Main Plenary Stage",
    description:
      "Specialised executive panel examining multi-carrier data boundaries (federated and encrypted data governance), maritime operational technology cyber resilience, customs security checklists, capital expenditure, and verified freight ROI timelines.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 106,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "13:00",
    endTime: "14:00",
    title: "Executive Working Lunch & Curated Logistics Technology Demonstrations",
    typeTitle: "Working Lunch & CXO Closed-Door Boardrooms",
    location: "Executive Dining Hall & CXO Private Closed-Door Boardroom Suites",
    description:
      "Executive working lunch and concourse technology demonstrations alongside curated 60-minute private CXO Closed-Door Boardroom sessions with senior logistics leaders.",
    trackId: "boardroom",
    trackTitle: "CXO Closed-Door Boardrooms",
  },
  {
    id: 107,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "14:00",
    endTime: "15:15",
    title: "Parallel Breakout Workshops · Clinic A: Port Automation & Container Dwell Reduction",
    typeTitle: "Stage 5 · 75-Minute Breakout Workshop",
    location: "Breakout Clinic Suite A",
    description:
      "Interactive 75-minute workshop clinic led by Engagement Partner. Dynamic vessel arrival (ETA) prediction, automated berth and crane scheduling, container yard optimisation, stack shuffling mitigation, autonomous straddle carrier orchestration, and gate appointment automation.",
    trackId: "clinics",
    trackTitle: "Parallel Breakout Workshops (75 Min)",
  },
  {
    id: 108,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "14:00",
    endTime: "15:15",
    title: "Parallel Breakout Workshops · Clinic B: Control Towers, Predictive Routing & Autonomous Warehousing",
    typeTitle: "Stage 5 · 75-Minute Breakout Workshop",
    location: "Breakout Clinic Suite B",
    description:
      "Interactive 75-minute workshop clinic led by Engagement Partner. Autonomous supply chain control towers, predictive disruption detection across weather and geopolitical chokepoints, multi-tier inventory positioning, automated freight re-routing, and real-time milestone tracking.",
    trackId: "clinics",
    trackTitle: "Parallel Breakout Workshops (75 Min)",
  },
  {
    id: 109,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "15:15",
    endTime: "16:15",
    title: "Applied Case Studies: Automated Warehouse Robotics & Last-Mile Fleet Routing",
    typeTitle: "Applied Case Studies",
    location: "Main Plenary Stage",
    description:
      "Applied technical sessions detailing automated guided vehicles (AGVs), autonomous mobile robots (AMRs), dynamic warehouse slotting, micro-fulfilment orchestration, dynamic urban delivery dispatch, and EV fleet load optimisation.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 110,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "16:15",
    endTime: "17:15",
    title: "Outcome Roundtables: Logistics Procurement Benchmarks & Production Action Plan",
    typeTitle: "Stage 6 · Outcome Roundtables",
    location: "Executive Roundtable Arena",
    description:
      "Curated peer discussions recording next actions, supply chain procurement specifications, and verified vendor evaluation criteria for H2 2027 deployments.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 111,
    dayKey: "2027-06-10",
    dayLabel: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation",
    startTime: "17:15",
    endTime: "18:30",
    title: "Executive Summary & Hosted Networking Reception",
    typeTitle: "Executive Reception",
    location: "VIP Networking Terrace · Dubai",
    description:
      "Closing executive synthesis and hosted networking reception concluding Day 2 of the June Dubai Cluster.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
];

function GradientText({ children }: { children: ReactNode }) {
  return <span className={styles.gradientText}>{children}</span>;
}

function ArrowSVG() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1"
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
  );
}

function setPointerGlow(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
}

function IconCard({ title, text, icon, index }: { title: string; text: string; icon: string; index: number }) {
  return (
    <article className={styles.iconCard}>
      <span className={styles.iconBadge}><img src={icon} alt="" loading="lazy" /></span>
      <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function AgendaTabs() {
  const dayTabs = [
    { key: "2027-06-10", label: "Thursday 10 June 2027: Predictable Trade Flows & Terminal Automation" },
  ];

  const [activeDay, setActiveDay] = useState("2027-06-10");
  const [activeTrack, setActiveTrack] = useState("all");
  const [activeSessionType, setActiveSessionType] = useState("");
  const [query, setQuery] = useState("");

  const sessionTypes = useMemo(() => {
    return Array.from(new Set(supplyChainSchedule.map((s) => s.typeTitle)));
  }, []);

  const trackTabs = useMemo(() => {
    const sessionsForDay = supplyChainSchedule.filter((session) => session.dayKey === activeDay);
    return Array.from(
      new Map(sessionsForDay.map((session) => [session.trackId, session.trackTitle])).entries()
    ).map(([id, title]) => ({ id, title }));
  }, [activeDay]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return supplyChainSchedule.filter((session) => {
      const dayMatches = session.dayKey === activeDay;
      const trackMatches = activeTrack === "all" || session.trackId === activeTrack;
      const typeMatches = !activeSessionType || session.typeTitle === activeSessionType;
      const searchMatches =
        !normalizedQuery ||
        session.title.toLowerCase().includes(normalizedQuery) ||
        session.description.toLowerCase().includes(normalizedQuery) ||
        session.typeTitle.toLowerCase().includes(normalizedQuery);
      return dayMatches && trackMatches && typeMatches && searchMatches;
    });
  }, [activeDay, activeSessionType, activeTrack, query]);

  function clearFilters() {
    setActiveTrack("all");
    setActiveSessionType("");
    setQuery("");
  }

  return (
    <section className={styles.timelineSection} id="agenda">
      <div className={styles.container}>
        <div className={styles.timelineIntro}>
          <h2>Full Master Schedule: <GradientText>Predictable Trade Flows &amp; Terminal Automation.</GradientText></h2>
        </div>
        <div className={styles.dayTabs} role="tablist" aria-label="Agenda days">
          {dayTabs.map((day) => (
            <button
              className={activeDay === day.key ? styles.activeDay : ""}
              key={day.key}
              onClick={() => {
                setActiveDay(day.key);
                setActiveTrack("all");
              }}
              onPointerMove={setPointerGlow}
              type="button"
            >
              <span>{day.label}</span>
              <strong>10 June 2027 · Dubai, United Arab Emirates</strong>
              <small>Day 2 of the June Dubai Cluster · 08:00 – 18:30 GST</small>
            </button>
          ))}
        </div>

        {trackTabs.length > 1 ? (
          <div className={styles.trackTabs} aria-label="Agenda tracks">
            <button
              className={activeTrack === "all" ? styles.activeTrack : ""}
              onClick={() => setActiveTrack("all")}
              onPointerMove={setPointerGlow}
              type="button"
            >
              All Formats &amp; Stages
            </button>
            {trackTabs.map((track) => (
              <button
                className={activeTrack === track.id ? styles.activeTrack : ""}
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                onPointerMove={setPointerGlow}
                type="button"
              >
                {track.title}
              </button>
            ))}
          </div>
        ) : null}

        <div className={styles.agendaFilters} aria-label="Agenda filters">
          <label>
            <span>Search</span>
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search clinics, berth planning, control towers, robotics, customs..."
              type="search"
              value={query}
            />
          </label>

          <label>
            <span>Session Type</span>
            <select onChange={(event) => setActiveSessionType(event.target.value)} value={activeSessionType}>
              <option value="">All Stages &amp; Formats</option>
              {sessionTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>

          {activeTrack !== "all" || activeSessionType || query ? (
            <button onClick={clearFilters} type="button">Clear</button>
          ) : null}
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineHead}>
            <span>Thursday 10 June 2027: Predictable Trade Flows &amp; Terminal Automation</span>
            <span>Dubai, United Arab Emirates · One-Day Executive Implementation Forum</span>
          </div>

          {filteredItems.length === 0 ? (
            <p className={styles.loadingState}>No sessions match the selected filters.</p>
          ) : null}

          {filteredItems.map((session, index) => (
            <article
              className={styles.timelineRow}
              key={session.id}
              onPointerMove={setPointerGlow}
              style={{ "--row-index": index } as CSSProperties}
            >
              <time>{session.startTime}<span>{session.endTime}</span></time>
              <span className={styles.sessionType}>{session.typeTitle}</span>
              <div>
                <h3>{session.title}</h3>
                {session.description ? <p>{session.description}</p> : null}
                {session.location ? <small className={styles.locationText}>{session.location}</small> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AgendaOverview() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="overview"
        style={{
          background:
            "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/dubai/supply-chain-logistics/images/agenda/Overview-hero.webp) center top / cover no-repeat",
        }}
      >
        <div className={styles.container}>
          <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#C0F43C] font-bold mb-3">
            Curriculum Overview
          </span>
          <h1>From use case to <br /><GradientText>operating outcome.</GradientText></h1>
          <p className={styles.heroPara}>
            Structured around a six-stage implementation framework, the forum advances logistics leaders from structural freight bottlenecks to verified technology specifications and capital procurement.
          </p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.split}>
          <div>
            <h2 className="!mb-6">Autonomous ports, predictive control towers, and <GradientText>multi-modal trade intelligence.</GradientText></h2>
            <p className="mt-6 mb-4">
              World AI Show | Supply Chain, Ports &amp; Logistics | Dubai 2027 convenes 300+ senior supply chain executives, port operations directors, terminal chiefs, shipping line leaders, and 3PL/4PL operators (maintaining a minimum 70% buy-side operator and cargo owner ratio).
            </p>
            <p className="m-0">
              Every stage in the programme is engineered to move senior logistics buyers from freight corridor chokepoints and Terminal Operating System (TOS) / Warehouse Management System (WMS) integration hurdles down to live technology validation and H2 2027 procurement decisions.
            </p>
          </div>
          <img src="/dubai/supply-chain-logistics/images/agenda/About.webp" alt="Supply chain and port executives networking at World AI Show Dubai" loading="lazy" />
        </div>

        <div className={`${styles.container} mt-16`}>
          <div className={styles.formatGrid}>
            {formats.map((item) => (
              <article className={`${styles.formatCard} !p-7`} key={item.title}>
                <div className="w-12 h-12 rounded-2xl border border-[#18d4ff]/35 bg-gradient-to-br from-[#18d4ff]/15 to-[#C0F43C]/10 flex items-center justify-center text-[#18d4ff] shadow-[0_0_24px_rgba(24,212,255,0.18)]">
                  {item.icon}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.formatsSection}>
        <div className={styles.container}>
          <h2>Six-Stage <GradientText>Implementation Framework.</GradientText></h2>
          <p>Engineered to advance logistics buyers from structural freight bottlenecks to verified technology specifications across one intensive day.</p>

          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 text-left">
            {sixPartBlocks.map((block) => (
              <div
                key={block.num}
                className="p-6 rounded-[18px] border border-[#18d4ff]/30 bg-[#050d20]/85 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
              >
                <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-[#C0F43C] font-bold mb-2">
                  {block.num}
                </span>
                <h3 className="!m-0 !mb-2 !text-white !text-[19px] font-extrabold">
                  {block.title}
                </h3>
                <p className="!m-0 !text-white/75 !text-[14.5px] leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>2027 freight automation architecture and port modernisations are finalised.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (strictly by invitation and qualification), enquire about commercial partnerships, or apply to join the Dubai logistics faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/dubai/supply-chain-logistics/attend/delegate/">Apply for a Delegate Pass <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/dubai/supply-chain-logistics/sponsorship-enquiry/">Enquire About Partnerships <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Date</dt><dd>10 June 2027 · One-Day Forum</dd></div>
            <div><dt>Location</dt><dd>Dubai, United Arab Emirates</dd></div>
            <div><dt>Cluster</dt><dd>Day 2 · June Dubai Cluster</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

const visionPoints = [
  {
    title: "Mid-Year Procurement Timing (June H1 Review & H2 Allocation)",
    text: "June represents the critical mid-year window where logistics chiefs evaluate H1 freight performance, analyse supply chain bottlenecks across maritime and air-cargo corridors, and finalise H2 automation and robotics procurement.",
    bullets: [] as string[],
  },
  {
    title: "Trade Floor Realities & Quantified Terminal Benchmarks",
    text: "With the Middle East & Africa smart logistics and supply chain AI market projected to reach USD 3.8 Billion by 2027 (Source: Mordor Intelligence), port authorities and cargo owners are prioritising audited production systems:",
    bullets: [
      "Up to $120 Million saved annually per major container terminal through AI-driven berth planning and predictive yard crane scheduling (Source: Drewry Maritime Research)",
      "Under 5 Minutes automated risk-engine clearance time for compliant cross-border declarations, cutting manual inspection bottlenecks by over 80% (Source: Dubai Customs Operational Benchmarks)",
    ],
  },
  {
    title: "Day 2 of the June Dubai Cluster",
    text: "On 10 June 2027, World AI Show | Supply Chain, Ports & Logistics | Dubai 2027 convenes 300+ senior logistics leaders as a One-Day Executive Implementation Forum, paired back-to-back with World AI Show | Manufacturing | Dubai 2027 on 9 June 2027.",
    bullets: [] as string[],
  },
];

export function AgendaVision() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="the-2030-vision-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.9) 0%, rgba(2, 7, 19, 0.56) 42%, rgba(2, 7, 19, 0.1) 100%), url(/dubai/supply-chain-logistics/images/agenda/Vision-hero.webp) center top / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#C0F43C] font-bold mb-3">
            Strategic Catalysts &amp; 2027 Mandates
          </span>
          <h1>Predictable Trade Flows: <br /><GradientText>Regional Infrastructure Catalysts &amp; 2027 Mandates.</GradientText></h1>
        </div>
      </section>

      <section className={styles.visionSection} id="the-2030-vision">
        <div className={styles.container}>
          <div className="grid grid-cols-[0.95fr_1.05fr] gap-12 items-stretch max-[980px]:grid-cols-1 mb-10">
            <div className="group relative rounded-[22px] overflow-hidden border border-[#20d5ff]/30 bg-[#040d1d] shadow-[0_0_42px_rgba(0,206,255,0.14)] min-h-[420px]">
              <img
                src="/dubai/supply-chain-logistics/images/agenda/dubai/the-vision.jpg"
                alt="Dubai Supply Chain, Ports and Logistics Catalysts"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-4 justify-between">
              {visionPoints.map((pt, idx) => (
                <article
                  key={pt.title}
                  className="group text-left p-6 rounded-[18px] border border-white/12 bg-[#040d1d]/75 transition-all duration-300 cursor-default hover:border-[#C0F43C]/65 hover:bg-gradient-to-br hover:from-[#C0F43C]/10 hover:via-[#06152d] hover:to-[#040d1d] hover:shadow-[0_12px_32px_rgba(192,244,60,0.12)] hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="m-0 font-extrabold text-[19px] leading-snug text-white transition-colors duration-300 group-hover:text-[#C0F43C]">
                      {pt.title}
                    </h3>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60 transition-all duration-300 group-hover:bg-[#C0F43C] group-hover:text-[#06111F] group-hover:font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="m-0 text-white/75 text-[15px] leading-relaxed">
                    {pt.text}
                  </p>
                  {pt.bullets.length > 0 && (
                    <ul className="mt-3 mb-0 pl-0 list-none space-y-1.5">
                      {pt.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-white/85 text-[14.5px] font-medium">
                          <span className="text-[#C0F43C] font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>

          <blockquote className="w-full m-0 p-9 md:px-12 rounded-[22px] border-[1.5px] border-[#18d4ff]/45 bg-gradient-to-br from-[#040b1b]/95 to-[#0a1834]/98 shadow-[0_0_35px_rgba(24,212,255,0.18),inset_0_0_25px_rgba(24,212,255,0.05)] text-[#f7f9ff] text-[clamp(19px,2.2vw,24px)] font-[750] leading-[1.45] text-center">
            &ldquo;Up to $120 Million saved annually per major container terminal through AI-driven berth planning, predictive yard crane scheduling, and reduced vessel dwell times.&rdquo;
            <cite className="block mt-4 text-[11px] font-mono font-bold tracking-[2px] uppercase text-white/50 not-italic">
              &mdash; SOURCE: DREWRY MARITIME RESEARCH
            </cite>
          </blockquote>
        </div>
      </section>

      <section className={styles.gatewaySection}>
        <div className={styles.container}>
          <h2 className="mb-12">
            Regional Drivers Accelerating{" "}
            <GradientText>2027 Logistics Modernisation.</GradientText>
          </h2>
          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            {regionalCatalysts.map(([title, text, icon], index) => (
              <IconCard icon={icon} index={index} key={title} text={text} title={title} />
            ))}
          </div>
        </div>
      </section>

      <AgendaSection
        title={<>Four freight-corridor mandates. <GradientText>One day.</GradientText></>}
        subtitle="Operational Pillars"
        description=""
        showSixBlocks={false}
      />
    </>
  );
}

export function AgendaLiveTimeline() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-timeline-hero"
        style={{
          background:
            "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/dubai/supply-chain-logistics/images/agenda/Agenda-hero.webp) center top / cover no-repeat",
        }}
      >
        <div className={styles.container}>
          <h1><GradientText>Full Master Schedule</GradientText></h1>
        </div>
      </section>
      <AgendaTabs />
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>2027 freight automation architecture and port modernisations are finalised.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (strictly by invitation and qualification), enquire about commercial partnerships, or apply to join the Dubai logistics faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/dubai/supply-chain-logistics/sponsorship-enquiry/">Enquire About Partnerships <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/dubai/supply-chain-logistics/speaker-enquiry/">Apply to Speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Date</dt><dd>10 June 2027 · One-Day Forum</dd></div>
            <div><dt>Location</dt><dd>Dubai, United Arab Emirates</dd></div>
            <div><dt>Cluster</dt><dd>Day 2 · June Dubai Cluster</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaThemes() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-themes-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.48) 42%, rgba(2, 7, 19, 0.05) 100%), url(/dubai/supply-chain-logistics/images/agenda/Themes-hero.webp) center top / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <h1>Four freight-corridor mandates. <br /><GradientText>One day.</GradientText></h1>
          <p className={styles.heroPara}>
            Centred around port automation &amp; container dwell reduction, predictive supply chain control towers, autonomous warehousing &amp; fleet routing, and trade document intelligence &amp; customs clearance.
          </p>
        </div>
      </section>
      <AgendaSection
        title={<>The Four Operational <GradientText>Content Pillars</GradientText></>}
        subtitle="Operational Pillars"
        description="Click any operational pillar below to inspect its full scope across terminal automation, multi-modal visibility, robotics, and border clearance."
        showSixBlocks={true}
      />
      <section className="relative pb-[104px] bg-[#051224]/70 max-sm:pb-[72px]">
        <div className={styles.container}>
          <div className={styles.brochureCta}>
            <div>
              <h3>Request the Dubai 2027 Commercial Partnership Prospectus.</h3>
              <p>Explore plenary keynotes, exclusive leadership of 75-minute workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse stands, and private CXO closed-door boardrooms.</p>
            </div>
            <a
              className={`${styles.button} ${styles.solid} group`}
              href="/dubai/supply-chain-logistics/sponsorship-enquiry/"
              style={{ minWidth: "220px" }}
            >
              Enquire About Partnerships
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" style={{ marginLeft: "8px" }}>
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.66666 4L12.6667 8L8.66666 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>2027 freight automation architecture and port modernisations are finalised.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (strictly by invitation and qualification), enquire about commercial partnerships, or apply to join the Dubai logistics faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/dubai/supply-chain-logistics/sponsorship-enquiry/">Enquire About Partnerships <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/dubai/supply-chain-logistics/speaker-enquiry/">Apply to Speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Date</dt><dd>10 June 2027 · One-Day Forum</dd></div>
            <div><dt>Location</dt><dd>Dubai, United Arab Emirates</dd></div>
            <div><dt>Cluster</dt><dd>Day 2 · June Dubai Cluster</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaCallForSpeakers() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-speakers-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/dubai/supply-chain-logistics/images/agenda/Call-speakers-bg.webp) center top / cover no-repeat",
          alignItems: "center",
          minHeight: "750px",
          marginTop: "0",
          display: "flex"
        }}
      >
        <div className={styles.container}>
          <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#C0F43C] font-bold mb-3">
            Call for Logistics &amp; Port Engineering Faculty
          </span>
          <h1 className="text-white font-[850] tracking-[-2px] leading-[1.06] text-[clamp(40px,5.6vw,68px)] w-full">
            If you have deployed AI into live terminal, fleet, or supply chain operations,{" "}
            <GradientText>we want you on stage</GradientText>
          </h1>
        </div>
      </section>
      <SpeakerCallToStage />
      <SpeakersSection
        heading={
          <>
            A Look Back at{" "}
            <GradientText>Past World AI Show Speakers</GradientText>
          </>
        }
      />
    </>
  );
}

export function AgendaPage() {
  return (
    <>
      <main className={`${styles.page} page-agenda`}>
        <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Overview" />
        <AgendaOverview />
      </main>
      <FooterSection />
    </>
  );
}
