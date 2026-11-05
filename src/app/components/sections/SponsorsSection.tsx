"use client";

import { GradientText } from "../Shared";

// Sponsor Row 1 Logos (Past World AI Show Sponsors)
const sponsorRow1 = [
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/google-cloud.webp", alt: "Google Cloud" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/Dell-Technologies-Intel.webp", alt: "Dell Technologies & Intel" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/hewlett-packard.webp", alt: "Hewlett Packard Enterprise" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/hcl.webp", alt: "HCLTech" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/happiest-minds.webp", alt: "Happiest Minds" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/kpmg.webp", alt: "KPMG" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/sap.webp", alt: "SAP" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/oracle.webp", alt: "Oracle" },
];

// Sponsor Row 2 Logos (Past World AI Show Sponsors)
const sponsorRow2 = [
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/cisco.webp", alt: "Cisco" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/Snowflake.webp", alt: "Snowflake" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/ui-path.webp", alt: "UiPath" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/automation-anywhere.webp", alt: "Automation Anywhere" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/eclerx.webp", alt: "eClerx" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/Searce.webp", alt: "Searce" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/vernacular-ai.webp", alt: "Vernacular.ai" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/india-past/Denodo.webp", alt: "Denodo" },
];

// Strategic & Association Partners Logos
const partnerLogos = [
  "/dubai/supply-chain-logistics/images/sponsors/association/starfindo.webp",
  "/dubai/supply-chain-logistics/images/sponsors/association/kumpul.webp",
  "/dubai/supply-chain-logistics/images/sponsors/association/forums.webp",
  "/dubai/supply-chain-logistics/images/sponsors/association/ddas.webp",
  "/dubai/supply-chain-logistics/images/sponsors/association/belux.webp",
  "/dubai/supply-chain-logistics/images/sponsors/association/lafrench.webp",
];

// Governments & Associations Who Have Worked With Us In The Past
const governmentLogos = [
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/meit.webp", alt: "Ministry of Electronics and Information Technology, Government of India" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/mrt-govt-of-india.webp", alt: "Ministry of Road Transport & Highways, Government of India" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/niti-aayog.webp", alt: "NITI Aayog" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/NeGD.webp", alt: "National e-Governance Division (NeGD)" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/digital-india.webp", alt: "Digital India" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/govt-maharashtra.webp", alt: "Government of Maharashtra" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/govt-andhra-pradesh.webp", alt: "Government of Andhra Pradesh" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/dubai-police.webp", alt: "Dubai Police" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/difc.webp", alt: "DIFC" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/dubai-economy.webp", alt: "Dubai Economy" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/supreme-council.webp", alt: "Supreme Council of Energy" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/ministry-of-finance.webp", alt: "Ministry of Finance" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/petroleum-development-oman.webp", alt: "Petroleum Development Oman" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/oman-chmaber-of-commerce.webp", alt: "Oman Chamber of Commerce and Industry" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/oman-banks-association.webp", alt: "Oman Banks Association" },
  { path: "/dubai/supply-chain-logistics/images/sponsors/governments/qfc.webp", alt: "Qatar Financial Centre" },
];

export function SponsorsSection() {
  return (
    <section className="relative py-[100px] pb-0 bg-[#030b19] overflow-hidden max-sm:py-[72px] max-sm:pb-0" id="partners">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-24px,1172px)]">
        {/* Commercial Partnerships */}
        <div className="text-center mb-3">
          <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#C0F43C] font-bold">
            Commercial Partnerships
          </span>
        </div>
        <h2 className="text-center font-[850] text-white leading-[1.06] tracking-[-2px] text-[clamp(34px,4.4vw,54px)] w-full mx-auto">
          Where logistics leaders specify, validate, and{" "}
          <GradientText>procure production AI.</GradientText>
        </h2>

        <p className="mt-6 w-full mx-auto text-center text-muted text-[18px] leading-[1.6] max-sm:text-[16px]">
          Middle East port authorities, logistics giants, and multinational cargo owners are finalising their 2027 technology procurement decisions now. Commercial partnerships are structured around plenary keynotes, workshop clinic leadership, turnkey concourse stands (6 sqm, 9 sqm, and 12 sqm), and closed-door CXO boardrooms. Engage qualified logistics decision-makers at the exact moment architecture specifications and vendor shortlists are established.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/dubai/supply-chain-logistics/attend/sponsor/"
            className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] transition-all duration-200"
          >
            Explore Sponsorship Tiers <span>→</span>
          </a>
        </div>

        <p className="mt-14 mb-0 text-center font-mono text-xs uppercase tracking-[2px] text-white/55">
          Past Series Partners &amp; Sponsors
        </p>
      </div>

      {/* Two offset scrolling sponsor rows */}
      <div className="flex flex-col gap-5 mt-6 w-full overflow-hidden">
        {/* Row 1 */}
        <div className="relative w-full overflow-hidden">
          <div className="logo-marquee-rail flex gap-5 will-change-transform">
            {[...sponsorRow1, ...sponsorRow1, ...sponsorRow1].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners-reverse flex gap-5 will-change-transform">
            {[...sponsorRow2, ...sponsorRow2, ...sponsorRow2].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Governments and Associations Who Have Worked With Us In The Past */}
      <div className="mt-20 py-16 bg-white text-center">
        <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-24px,1172px)]">
          <h3 className="m-0 mb-10 text-[#151923] font-[850] text-[clamp(22px,2.8vw,32px)] leading-[1.2] tracking-[-0.5px] uppercase w-full mx-auto">
            Governments and Associations Who Have Worked With Us In The Past
          </h3>

          <div className="grid grid-cols-4 border border-slate-200 rounded-[16px] overflow-hidden max-md:grid-cols-2">
            {governmentLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-[126px] p-5 border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-200"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[165px] max-h-[82px] object-contain"
                  loading="lazy"
                  width={165}
                  height={82}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supporting Trade Media & Industry Associations */}
      <div className="p-[28px_0_34px] bg-slate-50 border-t border-slate-200 text-center overflow-hidden">
        <p className="m-0 mb-[26px] text-[18px] font-bold text-[#151923] uppercase tracking-[1.5px] select-none">
          Supporting Trade Media &amp; Industry Associations
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners flex items-center gap-[64px]">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-none w-[140px] h-[52px] flex items-center justify-center select-none"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full object-contain filter hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={52}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
