"use client";

import { GradientText } from "../components/Shared";

export function PartnersHero() {
  return (
    <section
      id="overview"
      className="relative min-h-[680px] flex items-center page-hero-top pb-[90px] overflow-hidden bg-cover bg-[position:center_top] bg-no-repeat after:absolute after:inset-x-0 after:bottom-0 after:h-24 after:bg-gradient-to-t after:from-[#020814] after:to-transparent after:z-0 max-sm:min-h-[540px] max-sm:pb-[60px]"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(2, 7, 19, 0.92) 0%, rgba(2, 7, 19, 0.62) 42%, rgba(2, 7, 19, 0.1) 100%), url("/dubai/supply-chain-logistics/images/sponsors/Partners-logo-banner.webp")',
      }}
    >
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] mx-auto">
        <h1 className="m-0 text-white font-[850] leading-[1.06] tracking-[-2px] text-[clamp(42px,5.4vw,72px)] w-full">
          <GradientText>Partner With Us</GradientText> at World AI Show
        </h1>
        <p className="w-full mt-6 mb-0 text-white/84 text-[19px] leading-relaxed max-sm:text-base">
          Where logistics leaders specify, validate, and procure production AI. Commercial partnerships are structured around plenary keynotes, workshop clinic leadership, turnkey 6 sqm, 9 sqm, and 12 sqm concourse stands, and closed-door CXO boardrooms.
        </p>
      </div>
    </section>
  );
}
