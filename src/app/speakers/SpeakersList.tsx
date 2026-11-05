"use client";

import { useMemo, useState } from "react";
import { SpeakerCard } from "./SpeakerCard";
import { GradientText } from "../components/Shared";
import { speakers as pastSpeakers } from "./data";

const FILTER_PILLS = [
  "All",
  "Chief Supply Chain Officers",
  "Port Directors & Terminal Chiefs",
  "Fleet & Multi-Modal Leads",
  "Customs & Trade Authorities",
  "Logistics AI Pioneers",
] as const;

type FilterPill = (typeof FILTER_PILLS)[number];

function matchesFilter(designation: string, company: string, filter: FilterPill): boolean {
  if (filter === "All") return true;
  const d = `${designation} ${company}`.toLowerCase();
  if (filter === "Chief Supply Chain Officers") {
    return d.includes("ceo") || d.includes("cio") || d.includes("cto") || d.includes("chief") || d.includes("vp") || d.includes("group") || d.includes("aramex") || d.includes("namshi") || d.includes("apparel");
  }
  if (filter === "Port Directors & Terminal Chiefs") {
    return d.includes("director") || d.includes("president") || d.includes("operations") || d.includes("infrastructure") || d.includes("energy") || d.includes("transport");
  }
  if (filter === "Fleet & Multi-Modal Leads") {
    return d.includes("mobility") || d.includes("transport") || d.includes("careem") || d.includes("talabat") || d.includes("aviation") || d.includes("distribution") || d.includes("aramex");
  }
  if (filter === "Customs & Trade Authorities") {
    return d.includes("ministry") || d.includes("government") || d.includes("authority") || d.includes("dubai") || d.includes("abu dhabi") || d.includes("ajman") || d.includes("oman") || d.includes("bahrain");
  }
  if (filter === "Logistics AI Pioneers") {
    return d.includes("ai") || d.includes("data") || d.includes("analytics") || d.includes("digital") || d.includes("technology") || d.includes("innovation");
  }
  return true;
}

export function SpeakersList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterPill>("All");

  const baseList = useMemo(() => {
    return pastSpeakers.map((s) => ({
      id: s.id,
      name: s.name,
      designation: s.designation,
      company: s.company,
      image: s.image,
      bio: s.bio,
    }));
  }, []);

  const filteredSpeakers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return baseList.filter((s) => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.designation.toLowerCase().includes(q) ||
        s.company.toLowerCase().includes(q);
      const matchesPill = matchesFilter(s.designation, s.company, activeFilter);
      return matchesQuery && matchesPill;
    });
  }, [baseList, searchQuery, activeFilter]);

  return (
    <section className="relative py-[92px] bg-[#020b1c] max-sm:py-[62px]" id="lineup">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">

        {/* Open Faculty Notice Banner (Section 09) */}
        <div className="mb-12 p-7 rounded-2xl border border-[#C0F43C]/35 bg-gradient-to-r from-[#C0F43C]/10 via-[#061428] to-[#18d4ff]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-[740px]">
            <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[2px] text-[#C0F43C] mb-2">
              Logistics &amp; Port Engineering Faculty · 2027 Cohort Status
            </span>
            <p className="m-0 text-white/90 text-[16px] leading-relaxed">
              The 2027 Dubai Logistics &amp; Port Faculty is currently open for abstract review. 35–45 senior Chief Supply Chain Officers, Port Directors, Terminal Chiefs, Fleet Leads, and Customs Authorities will be announced in rolling cohorts.
            </p>
          </div>
          <a
            href="/dubai/supply-chain-logistics/agenda/call-for-speakers/"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#C0F43C] text-[#06111F] [color:#06111F!important] font-extrabold text-[14px] whitespace-nowrap hover:brightness-110 transition-all shrink-0"
          >
            Share your supply chain deployment case study → Apply to Speak
          </a>
        </div>

        {/* Search & Filter Controls (Section 09) */}
        <div className="mb-10 flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(28px,3.6vw,42px)] m-0">
              Global Series <GradientText>Past Speakers</GradientText>
            </h2>

            {/* Search by name, title, or organization */}
            <div className="relative w-full max-w-[360px]">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, title, or organisation"
                className="w-full h-[44px] px-4 rounded-full bg-[#051024] border border-white/15 text-white text-[14px] placeholder:text-white/45 focus:outline-none focus:border-cyan transition-colors"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {FILTER_PILLS.map((pill) => {
              const isActive = activeFilter === pill;
              return (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveFilter(pill)}
                  className={`px-4 py-2 rounded-full font-mono text-[12px] uppercase tracking-[1.2px] font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#C0F43C] text-[#06111F] [color:#06111F!important] border border-[#C0F43C]"
                      : "bg-white/5 text-white/70 border border-white/10 hover:border-cyan/40 hover:text-white"
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>
        </div>

        {filteredSpeakers.length === 0 ? (
          <p className="text-white/60 text-lg">No speakers match your current search or filter criteria.</p>
        ) : (
          <div className="speaker-grid grid grid-cols-3 gap-[22px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {filteredSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.id}
                name={speaker.name}
                role={speaker.designation}
                company={speaker.company}
                image={speaker.image}
                bio={speaker.bio}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
