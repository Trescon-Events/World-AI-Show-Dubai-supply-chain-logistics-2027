"use client";

import { useState, type ReactNode } from "react";
import { GradientText } from "../Shared";

export const themeItems = [
  {
    index: "01",
    label: "Port Automation, Berth Planning & Container Dwell Reduction",
    heading: "Port Automation, Berth Planning & Container Dwell Reduction",
    shortDesc:
      "Dynamic vessel arrival prediction, automated berth and crane scheduling, container yard optimisation, stack shuffling mitigation, autonomous straddle carrier orchestration, and gate appointment automation.",
    expandedScope:
      "Dynamic vessel arrival (ETA) prediction, automated berth and crane scheduling, container yard optimisation, stack shuffling mitigation, autonomous straddle carrier orchestration, and gate appointment automation.",
    clinicalFormat: "Interactive 75-minute Breakout Workshop Clinic A & Priority Brief Opening Port Case Study",
    image: "/dubai/supply-chain-logistics/images/agenda/keynotes.webp",
  },
  {
    index: "02",
    label: "Control Towers, Predictive Visibility & Dynamic Exception Management",
    heading: "Control Towers, Predictive Visibility & Dynamic Exception Management",
    shortDesc:
      "Autonomous supply chain control towers, predictive disruption detection across weather and geopolitical chokepoints, multi-tier inventory positioning, and automated freight re-routing.",
    expandedScope:
      "Autonomous supply chain control towers, predictive disruption detection across weather and geopolitical chokepoints, multi-tier inventory positioning, automated freight re-routing, and real-time milestone tracking.",
    clinicalFormat: "Interactive 75-minute Breakout Workshop Clinic B & Buyer Evidence Plenary",
    image: "/dubai/supply-chain-logistics/images/agenda/panel-discussion.webp",
  },
  {
    index: "03",
    label: "Intelligent Warehousing, Robotics & Last-Mile Fleet Routing",
    heading: "Intelligent Warehousing, Robotics & Last-Mile Fleet Routing",
    shortDesc:
      "Automated guided vehicles (AGVs), autonomous mobile robots (AMRs), dynamic warehouse slotting, micro-fulfilment orchestration, and dynamic urban delivery dispatch.",
    expandedScope:
      "Automated guided vehicles (AGVs), autonomous mobile robots (AMRs), dynamic warehouse slotting, micro-fulfilment orchestration, dynamic urban delivery dispatch, and EV fleet load optimisation.",
    clinicalFormat: "Applied Case Studies Plenary & Curated Logistics Technology Demonstrations",
    image: "/dubai/supply-chain-logistics/images/agenda/driving-malaysia-stage.webp",
  },
  {
    index: "04",
    label: "Trade Document Intelligence, Customs Clearance & Border Security",
    heading: "Trade Document Intelligence, Customs Clearance & Border Security",
    shortDesc:
      "Intelligent document processing for bills of lading and commercial invoices, automated HS-code classification, frictionless customs clearance, and secure sovereign logistics data governance.",
    expandedScope:
      "Intelligent document processing (IDP) for bills of lading, packing lists, and commercial invoices, automated HS-code classification, instantaneous customs clearance, and secure sovereign logistics data governance.",
    clinicalFormat: "Risk & Trust Plenary Panel & Outcome Roundtables",
    image: "/dubai/supply-chain-logistics/images/agenda/Fireside.webp",
  },
];

export const sixPartBlocks = [
  {
    num: "Stage 01",
    title: "Priority Brief",
    desc: "Opening executive briefing by port authorities and trade leaders detailing regional freight chokepoints, fuel price volatility, and ranked operational priorities.",
    accent: "cyan",
  },
  {
    num: "Stage 02",
    title: "Buyer Evidence",
    desc: "Frank case studies from multinational cargo owners and terminal operators examining real-world deployment challenges, sensor hurdles, and pilot post-mortems.",
    accent: "green",
  },
  {
    num: "Stage 03",
    title: "Use-Case Clinics",
    desc: "Interactive technical sessions analysing necessary modifications in Terminal Operating Systems (TOS), Warehouse Management Systems (WMS), and enterprise ERP data pipelines.",
    accent: "cyan",
  },
  {
    num: "Stage 04",
    title: "Risk & Trust",
    desc: "Specialised panels detailing trade compliance, cyber resilience across maritime operational technology, cargo data residency, and customs security checklists.",
    accent: "green",
  },
  {
    num: "Stage 05",
    title: "Breakout Workshops",
    desc: "Two parallel workshop clinics: Clinic A: Port Automation & Dwell Time Reduction | Clinic B: Control Towers, Predictive Routing & Autonomous Warehousing.",
    accent: "cyan",
  },
  {
    num: "Stage 06",
    title: "Outcome Roundtables",
    desc: "Curated peer discussions recording next actions, supply chain procurement specifications, and verified vendor evaluation criteria.",
    accent: "green",
  },
];

function ThemeIcon({ index }: { index: number }) {
  const normalized = ((index % 4) + 4) % 4;
  if (normalized === 0) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 4 7v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (normalized === 1) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 4 8l8 4 8-4-8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    );
  }
  if (normalized === 2) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M6 20V9h5v11" />
        <path d="M13 20V4h5v16" />
        <path d="M8 12h1M8 15h1M15 8h1M15 11h1M15 14h1" />
      </svg>
    );
  }
  return (
    <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v5" />
      <path d="M6 14h12" />
      <path d="M8 20h8" />
      <path d="M12 9 6 14l6 5 6-5-6-5Z" />
    </svg>
  );
}

export function AgendaSection({
  title = (
    <>
      Four freight-corridor mandates. <GradientText>One day.</GradientText>
    </>
  ),
  subtitle = "Operational Pillars",
  description = null,
  showSixBlocks = true,
}: {
  title?: ReactNode;
  subtitle?: ReactNode | null;
  description?: ReactNode | null;
  showSixBlocks?: boolean;
}) {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  return (
    <section
      className="relative py-[104px] bg-gradient-to-b from-[#020a18]/96 to-[#051224]/70 max-sm:py-[72px]"
      id="agenda"
    >
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-24px,1172px)]">
        {/* Headings */}
        {subtitle && (
          <div className="text-center mb-3">
            <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#C0F43C] font-bold">
              {subtitle}
            </span>
          </div>
        )}
        <h2
          data-aos="fade-up"
          className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(36px,4.8vw,56px)] mb-[44px]"
        >
          {title}
        </h2>
        {description && (
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-full mx-auto -mt-6 text-center text-muted text-[18px] leading-[1.55] mb-[44px]"
          >
            {description}
          </p>
        )}

        {/* Component C3 — Expandable Pillar Cards (4 Cards in 2x2 Grid — expands on hover/click) */}
        <div className="grid grid-cols-2 gap-6 items-start max-md:grid-cols-1">
          {themeItems.map((theme, idx) => {
            const isExpanded = expandedPillar === idx;
            return (
              <article
                key={theme.index}
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={String((idx % 2) * 150)}
                onMouseEnter={() => setExpandedPillar(idx)}
                onMouseLeave={() => setExpandedPillar(null)}
                onClick={() => setExpandedPillar(isExpanded ? null : idx)}
                className={`group relative flex flex-col justify-between p-7 rounded-[20px] border transition-all duration-300 cursor-pointer text-left ${
                  isExpanded
                    ? "border-[#C0F43C]/65 bg-gradient-to-br from-[#071a33]/95 via-[#040e22]/98 to-[#030916]/98 shadow-[0_20px_50px_rgba(0,0,0,0.45),0_0_32px_rgba(192,244,60,0.14)] -translate-y-1"
                    : "border-white/15 bg-gradient-to-br from-[#00ceff]/10 via-[#040c1e]/95 to-[#996cff]/10 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_50px_rgba(0,0,0,0.3)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`grid place-items-center w-[48px] h-[48px] border rounded-[14px] transition-all duration-300 ${
                        isExpanded
                          ? "border-[#C0F43C]/60 bg-[#C0F43C]/18 text-[#C0F43C]"
                          : "border-cyan/30 bg-cyan/10 text-cyan"
                      }`}
                    >
                      <ThemeIcon index={idx} />
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full border font-mono text-[11px] font-bold uppercase tracking-[1.8px] transition-colors duration-300 ${
                          isExpanded
                            ? "border-[#C0F43C]/50 bg-[#C0F43C]/15 text-[#C0F43C]"
                            : "border-white/10 bg-white/5 text-cyan"
                        }`}
                      >
                        Pillar / {theme.index}
                      </span>
                      <span className="text-white/60 font-mono text-xs px-2 py-0.5 rounded border border-white/10">
                        {isExpanded ? "− Collapse" : "+ Expand Scope"}
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`m-0 mb-3 font-extrabold text-[21px] leading-[1.26] transition-colors duration-200 ${
                      isExpanded ? "text-[#C0F43C]" : "text-white"
                    }`}
                  >
                    {theme.label}
                  </h3>

                  <p className="m-0 text-white/80 text-[15.5px] leading-[1.6]">
                    {theme.shortDesc}
                  </p>

                  <div
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 mt-5 pt-4 border-t border-white/12"
                        : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t border-transparent"
                    }`}
                  >
                    <div className="min-h-0 space-y-3 overflow-hidden">
                      <div>
                        <span className="block font-mono text-[11px] uppercase tracking-[1.6px] text-[#18d4ff] mb-1">
                          Operational Scope &amp; Technical Focus
                        </span>
                        <p className="m-0 text-white/75 text-[14.5px] leading-[1.6]">
                          {theme.expandedScope}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/80 font-mono text-[11.5px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C0F43C]" />
                        Format: {theme.clinicalFormat}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Universal Themes Footer */}
        <div className="mt-8 p-5 rounded-[16px] border border-[#18d4ff]/25 bg-[#040D1F]/80 text-center">
          <p className="m-0 text-white/85 font-mono text-[13px] leading-relaxed">
            <strong className="text-[#C0F43C] uppercase tracking-[1.4px] mr-2">Universal Governance Themes:</strong>
            Federated multi-carrier data boundaries, TOS/WMS/ERP integration architecture, maritime operational technology cyber resilience, and measured freight ROI timelines.
          </p>
        </div>

        {/* Six-Stage Implementation Framework */}
        {showSixBlocks && (
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#18D4FF]/35 bg-[#18D4FF]/10 text-[#18D4FF] font-mono text-[11.5px] uppercase tracking-[2px] font-bold mb-4">
                Six-Stage Implementation Framework
              </span>
              <h3 className="text-center font-[850] text-white leading-[1.08] tracking-[-1.6px] text-[clamp(30px,4vw,46px)] w-full mx-auto">
                Advancing logistics leaders from structural freight bottlenecks to{" "}
                <GradientText>verified capital procurement.</GradientText>
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {sixPartBlocks.map((block) => {
                const isGreen = block.accent === "green";
                return (
                  <div
                    key={block.num}
                    className={`p-6 rounded-[18px] border transition-all duration-300 hover:-translate-y-1 ${
                      isGreen
                        ? "border-[#C0F43C]/35 bg-gradient-to-br from-[#C0F43C]/[0.07] via-[#041022] to-[#030917]"
                        : "border-[#18d4ff]/35 bg-gradient-to-br from-[#18d4ff]/[0.07] via-[#041022] to-[#030917]"
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase tracking-[1.6px] mb-3 border ${
                        isGreen
                          ? "border-[#C0F43C]/40 bg-[#C0F43C]/12 text-[#C0F43C]"
                          : "border-[#18d4ff]/40 bg-[#18d4ff]/12 text-[#18d4ff]"
                      }`}
                    >
                      {block.num}
                    </span>
                    <h4 className="m-0 mb-2.5 text-white font-extrabold text-[19px] leading-snug">
                      {block.title}
                    </h4>
                    <p className="m-0 text-white/75 text-[14.5px] leading-[1.6]">
                      {block.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="/dubai/supply-chain-logistics/agenda/agenda/"
                className="inline-flex items-center justify-center gap-2 h-[50px] px-8 rounded-full font-extrabold text-[14.5px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] transition-all duration-200"
              >
                Explore Full One-Day Master Schedule →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
