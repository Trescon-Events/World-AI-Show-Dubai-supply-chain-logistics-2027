"use client";

export function SpeakerCallToStage() {
  return (
    <section className="relative py-[104px] bg-gradient-to-b from-[#020b1c] to-[#041226] overflow-hidden" id="call-for-speakers">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(154,108,255,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
        {/* Centered section heading */}
        <h2 className="text-center font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(34px,4.5vw,50px)] mb-[56px]">
          Take the Stage at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">
            World AI Show
          </span>
        </h2>

        {/* Two-column content */}
        <div className="grid grid-cols-[1.12fr_0.88fr] gap-[66px] items-center max-[980px]:grid-cols-1 max-[980px]:gap-[48px] mb-12">
          <div>
            <h3 className="m-0 text-white font-[850] text-[28px] leading-tight mb-4 max-sm:text-[23px]">
              Call for Logistics &amp; Port Engineering Faculty
            </h3>
            <p className="m-0 text-white/68 text-[16px] leading-[1.65] mb-5">
              Seeking Port Directors, Chief Supply Chain Officers (CSCOs), Terminal Operations Chiefs, and Enterprise Supply Chain Architects with audited deployment case studies: multi-carrier data integration hurdles, TOS/WMS retrofits, and measured operational outcomes.
            </p>
            <p className="m-0 text-white/68 text-[16px] leading-[1.65] mb-8">
              Taking place on 10 June 2027 in Dubai, UAE (Day 2 of the June Dubai Cluster, paired with Manufacturing on 9 June 2027), the One-Day Executive Implementation Forum prioritises production-grade terminal, fleet, and warehouse execution across four core operational pillars.
            </p>

            {/* Value Highlights */}
            <div className="p-7 border border-[#7eacd9]/14 rounded-[16px] bg-[#04080f]/80 shadow-[inset_0_0_24px_rgba(33,173,255,0.04)]">
              <strong className="block text-[#C0F43C] text-[12px] font-mono uppercase tracking-[2px] mb-5">
                Why join the Logistics &amp; Port Faculty in Dubai:
              </strong>
              <ul className="m-0 pl-0 list-none flex flex-col gap-5">
                <li className="flex items-start gap-3.5 text-white/80 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/dubai/supply-chain-logistics/images/agenda/icon-global.webp"
                    alt="Global icon"
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">48 Global Editions of Authority:</strong> Speak on the flagship Middle East sector platform organised by Trescon, backed by 48 completed editions across 4 continents.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-white/80 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/dubai/supply-chain-logistics/images/agenda/icon-speaker.webp"
                    alt="Speaker icon"
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">300+ Senior Logistics Leaders (70%+ Buy-Side):</strong> Address senior GCC port operators, cargo owners, shipping lines, and 3PL/4PL chiefs actively locking down H2 2027 automation procurement.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-white/80 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/dubai/supply-chain-logistics/images/agenda/icon-lightning.webp"
                    alt="Lightning bolt icon"
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">Operational, Peer-Led Formats:</strong> Lead plenary buyer evidence case studies, multi-carrier governance panels, 75-minute breakout workshops, or Outcome Roundtables.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual container */}
          <div className="relative overflow-hidden border border-[#20d5ff]/20 rounded-[22px] shadow-[0_0_32px_rgba(0,206,255,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/40 via-transparent to-transparent pointer-events-none z-1" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/dubai/supply-chain-logistics/images/agenda/accelerating-malaysia-audience.webp"
              alt="Speaker presenting on stage at World AI Show Dubai"
              className="w-full h-[360px] md:h-[480px] filter saturate-[0.96] brightness-[0.96]"
              style={{ objectFit: "cover", objectPosition: "top" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Centered bottom CTAs */}
        <div className="flex justify-center gap-4 mt-8 max-sm:flex-col max-sm:items-center">
          <a
            href="/dubai/supply-chain-logistics/speaker-enquiry/"
            className="inline-flex items-center justify-center gap-2 px-[32px] py-[16px] rounded-full text-[15px] font-extrabold text-[#06111f] [color:#06111f!important] bg-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.18)] hover:shadow-[0_0_32px_rgba(192,244,60,0.36)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Apply to Join the Dubai Logistics Faculty
            <img
              src="/dubai/supply-chain-logistics/images/agenda/arrow-top.webp"
              alt="Arrow top icon"
              className="w-4 h-4 object-contain select-none flex-shrink-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
