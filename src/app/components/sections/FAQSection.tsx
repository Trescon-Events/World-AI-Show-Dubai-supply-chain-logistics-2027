"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const faqs = [
  {
    q: "What is World AI Show | Supply Chain, Ports & Logistics | Dubai 2027?",
    a: "World AI Show | Supply Chain, Ports & Logistics | Dubai 2027 is a One-Day Executive Implementation Forum taking place on 10 June 2027 in Dubai, United Arab Emirates. It convenes 300+ Chief Supply Chain Officers, port directors, terminal operators, and fleet chiefs (maintaining a minimum 70% buy-side operator and cargo owner ratio) around operating AI for predictable trade flows, port throughput, and resilient logistics.",
  },
  {
    q: "How does this forum fit into the June Dubai Cluster?",
    a: "The forum is positioned as Day 2 of the June Dubai Cluster on 10 June 2027, paired back-to-back with Manufacturing on 9 June 2027. Both forums share executive venue infrastructure in Dubai while maintaining dedicated sector agendas and qualified buyer constituencies.",
  },
  {
    q: "Who qualifies for a complimentary Delegate Pass?",
    a: "Complimentary Delegate Passes are reserved by invitation and qualification for senior supply chain executives, port operations directors, terminal chiefs, and logistics leaders holding verified purchasing, operational, or logistics modernisation authority. Business Passes provide paid commercial access with a strictly capped quota for logistics software vendors, telematics providers, and technology consultancies outside the invitation criteria.",
  },
  {
    q: "How do regional trade corridor expansions influence 2027 procurement?",
    a: "Major regional catalysts—including large-scale port automation mandates, sea-air bonded cargo corridor expansions, national rail freight integration, and green transport targets—are accelerating 2027 capital deployment. June represents the critical mid-year window where logistics chiefs evaluate H1 freight performance, analyse supply chain bottlenecks, and finalise H2 automation procurement.",
  },
  {
    q: "What are the four core operational content pillars?",
    a: "The one-day curriculum is structured around four freight-corridor mandates: (01) Port Automation, Berth Planning & Container Dwell Reduction; (02) Control Towers, Predictive Visibility & Dynamic Exception Management; (03) Intelligent Warehousing, Robotics & Last-Mile Fleet Routing; and (04) Trade Document Intelligence, Customs Clearance & Border Security.",
  },
  {
    q: "What sponsorship formats and concourse stand footprints are available?",
    a: "Commercial partnerships are structured around plenary keynotes, exclusive leadership of 75-minute workshop clinics, turnkey concourse stands referenced strictly as 6 sqm, 9 sqm, and 12 sqm footprints, and closed-door CXO boardrooms.",
  },
  {
    q: "What is the CXO Closed-Door Boardroom format?",
    a: "The CXO Closed-Door Boardroom is a curated 60-minute off-the-record private session connecting a commercial partner with pre-qualified senior logistics leaders, port operations directors, and enterprise cargo owners, complete with an opening address and dedicated executive moderation.",
  },
  {
    q: "Who organises the World AI Show Series?",
    a: "World AI Show | Supply Chain, Ports & Logistics | Dubai 2027 is organised by Trescon, bringing an unrivalled international pedigree across 48 completed global editions delivered on 4 continents, convening 42,000+ enterprise executives and hosting 2,600+ expert speakers.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[104px] pt-[104px] bg-gradient-to-b from-[#051224]/70 to-[#020a18]/96 max-sm:py-[72px]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-24px,1172px)]">
        {/* Title */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          Frequently asked <GradientText>questions.</GradientText>
        </h2>

        {/* Semantic Accordion List */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="w-full mx-auto mt-12 p-[26px_16px] border border-white/8 rounded-[24px] bg-[#040a19]/50 shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-sm:p-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details
                key={faq.q}
                open={isOpen}
                className="border-b border-white/36 last:border-b-0 group"
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : index);
                  }}
                  className="grid grid-cols-[58px_1fr_32px] items-center gap-5 min-h-[68px] px-6 cursor-pointer list-none select-none max-sm:grid-cols-[46px_1fr_18px] max-sm:gap-3 max-sm:px-1.5 [&::-webkit-details-marker]:hidden"
                >
                  <span className="text-white/68 font-mono text-[13px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong className="text-white font-extrabold text-[18px] group-open:text-cyan transition-colors max-sm:text-[16px] leading-snug">
                    {faq.q}
                  </strong>
                  <i className="text-white/70 font-normal not-italic text-right text-xl transition-transform group-open:rotate-45 block">
                    +
                  </i>
                </summary>
                <p className="mt-[-6px] mr-[76px] mb-6 ml-[78px] text-muted text-[15px] leading-relaxed max-sm:mx-1.5 max-sm:ml-16 max-sm:mb-[22px]">
                  {faq.a}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
