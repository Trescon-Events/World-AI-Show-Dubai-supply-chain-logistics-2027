"use client";

import { Button, GradientText } from "../Shared";

export function HeroSection() {
  return (
    <section
      className="hero-bg relative min-h-[820px] -mt-[102px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[760px] max-sm:-mt-[71px] max-sm:min-h-[720px]"
      id="home"
    >
      {/* Background Video Layer */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-[1.45] contrast-[1.08] z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/dubai/supply-chain-logistics/images/Attend/Overview-banner.webp"
        aria-hidden="true"
      >
        <source src="/dubai/supply-chain-logistics/videos/wais-dubai-hero-banner.mp4" type="video/mp4" />
        <source src="/dubai/supply-chain-logistics/videos/wais-mumbai-hero-banner.webm" type="video/webm" />
      </video>

      {/* Single Light Dark-Blue Tint Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(5, 32, 78, 0.36) 0%, rgba(4, 26, 66, 0.32) 65%, rgba(2, 11, 28, 0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-24px,1172px)] relative z-10 mx-auto pt-[220px] lg:pt-[240px] pb-16 max-sm:pt-[175px] max-sm:pb-12 flex flex-col items-center">
        {/* Kicker */}
        <span
          data-aos="fade-down"
          data-aos-delay="30"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C0F43C]/35 bg-[#040D1F]/80 text-[#C0F43C] font-mono text-[11.5px] uppercase tracking-[2.2px] font-bold mb-3"
        >
          World AI Show Industry Series · Sector Edition
        </span>

        {/* Event Lockup Sub-label */}
        <p
          data-aos="fade-down"
          data-aos-delay="50"
          className="text-white/95 font-mono text-[14px] sm:text-[17px] lg:text-[19px] uppercase tracking-[2.2px] font-bold mb-4"
        >
          World AI Show | Supply Chain, Ports &amp; Logistics | Dubai 2027
        </p>

        {/* Hero Title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-full mx-auto text-white font-[850] leading-[1.08] xl:leading-[70px] tracking-[-1.8px] text-[clamp(32px,4.6vw,64px)] xl:text-[64px] text-center mb-3"
        >
          <span className="block">Operating AI for predictable trade flows,</span>
          <span className="block"><GradientText>port throughput, and resilient logistics.</GradientText></span>
        </h1>

        {/* Thesis */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-[#18D4FF] font-mono text-[14px] sm:text-[16px] uppercase tracking-[2px] font-bold mb-4"
        >
          10 June 2027 · Dubai, United Arab Emirates · One-Day Executive Implementation Forum
        </p>

        {/* Standfirst */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full mx-auto text-[#CBD5E1] text-[clamp(15px,1.55vw,18.5px)] xl:text-[18.5px] font-normal leading-relaxed xl:leading-[30px] tracking-normal text-center mb-8"
        >
          Connecting trade corridors, automated terminal operating systems, and enterprise supply chains with predictive AI. Convenes 300+ Chief Supply Chain Officers, port directors, terminal operators, and fleet chiefs actively evaluating dwell time mitigation, autonomous control towers, and 2027 automation procurement.
        </p>

        <div data-aos="fade-in" data-aos-delay="250" className="w-full border-t border-white/20 opacity-60 mt-1" />

        {/* Event Meta Footer */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-[max-content_max-content_max-content] justify-center items-center gap-6 w-full mx-auto mt-7 text-center max-[980px]:grid-cols-1 max-sm:gap-3 max-sm:mt-5"
        >
          {/* Column 1: Dates */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              <GradientText>10</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              JUNE 2027
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              <GradientText>Dubai</GradientText>, United Arab Emirates
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              DAY 2 · JUNE DUBAI CLUSTER
            </span>
          </div>

          {/* Column 3: Duration */}
          <div className="text-left max-[980px]:text-center max-sm:w-full">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              One-<GradientText>Day</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              EXECUTIVE IMPLEMENTATION FORUM
            </span>
          </div>
        </div>

        {/* Hero CTA Actions */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex justify-center flex-wrap gap-3.5 mt-9 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:w-full max-sm:max-w-[340px]"
        >
          <Button href="/dubai/supply-chain-logistics/attend/delegate/" showArrow={true}>
            Apply for Delegate Pass
          </Button>
          <Button href="/dubai/supply-chain-logistics/attend/sponsor/" variant="outline" showArrow={true}>
            Explore Partnerships
          </Button>
          <a
            href="/dubai/supply-chain-logistics/agenda/agenda/"
            className="inline-flex items-center justify-center gap-2 min-w-[156px] h-[49px] rounded-full font-extrabold text-sm text-white/85 hover:text-[#18d4ff] border border-white/15 bg-white/5 hover:border-[#18d4ff]/50 transition-all duration-200 px-6"
          >
            View Master Schedule →
          </a>
        </div>
      </div>
    </section>
  );
}
