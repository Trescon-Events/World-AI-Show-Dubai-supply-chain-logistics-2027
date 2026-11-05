"use client";

import { GradientText } from "../components/Shared";

type ChannelItem = {
  title: string;
  tag: string;
  desc: string;
  benefits: string[];
  image: string;
  reverse?: boolean;
};

const channels: ChannelItem[] = [
  {
    title: "Executive Boardroom Access",
    tag: "High-Focus Formats",
    desc: "Managed coordination for off-the-record CXO boardroom sessions. World AI Show | Supply Chain, Ports & Logistics | Dubai 2027 hosts curated 60-minute private sessions bringing together senior port directors, CSCOs, and logistics chiefs to benchmark terminal automation, control towers, and federated carrier data boundaries.",
    benefits: [
      "Closed-door, Chatham House Rule guidelines",
      "Direct peer-to-peer insights exchange",
      "Strict executive alignment & curation",
    ],
    image: "/dubai/supply-chain-logistics/images/Attend/AI-decision-maker.webp",
  },
  {
    title: "Bilateral Meeting Service",
    tag: "Business Driven ROI",
    desc: "Pre-scheduled 1-on-1 procurement discussions connecting supply chain chiefs with vetted technology providers. Our matchmaking managers align your logistics software, robotics, or telematics portfolio with buy-side operators actively evaluating 2027 deployment.",
    benefits: [
      "Buy-side profile custom curation & scouting",
      "Dedicated meeting assistants on-ground",
      "Direct enterprise pipeline development",
    ],
    image: "/dubai/supply-chain-logistics/images/Attend/partner-with.webp",
    reverse: true,
  },
  {
    title: "Official Attendee App & Concourse Lounge",
    tag: "Premium Access",
    desc: "Interactive master agenda, participant directory, real-time stage polls, and digital contact exchange — paired with structured networking breaks across the 6 sqm, 9 sqm, and 12 sqm technology concourse.",
    benefits: [
      "Interactive master agenda & clinic selection",
      "Port, carrier & cargo owner buyer hubs",
      "UAE PDPL consent-governed digital contact exchange",
    ],
    image: "/dubai/supply-chain-logistics/images/Attend/cover-southeast.webp",
  },
];

export function NetworkingChannels() {
  return (
    <section className="relative py-[92px] bg-[#020b1c]" id="channels">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            Networking Platforms
          </span>
          <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(36px,4.5vw,56px)]">
            An implementation forum. <br />
            <GradientText>Built to forge partnerships.</GradientText>
          </h2>
        </div>

        {/* Channels Split list */}
        <div className="flex flex-col gap-[96px] max-sm:gap-14">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="grid grid-cols-[1fr_0.94fr] items-center gap-[74px] max-[980px]:grid-cols-1 max-[980px]:gap-[36px]"
            >
              {/* Info Column */}
              <div className={`${channel.reverse ? "order-2 max-[980px]:order-none" : "order-none"}`}>
                <span className="text-[#18d4ff] font-mono text-[12px] uppercase tracking-[3px] font-bold block mb-3">
                  {channel.tag}
                </span>
                <h3 className="m-0 text-white font-[850] text-[34px] leading-tight mb-5 max-sm:text-[26px]">
                  {channel.title}
                </h3>
                <p className="m-0 text-white/66 text-[17px] leading-relaxed mb-6">
                  {channel.desc}
                </p>
                <ul className="m-0 pl-0 list-none flex flex-col gap-3">
                  {channel.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-white/80 text-[15px]">
                      <span className="grid place-items-center w-[18px] h-[18px] rounded-full bg-cyan/15 text-cyan text-[10px] font-extrabold select-none">
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphic Column */}
              <div className="relative min-h-[340px] overflow-hidden border border-[#20d5ff]/24 rounded-[24px] bg-[#071426]/72 shadow-[0_0_42px_rgba(0,206,255,0.1)]">
                <img
                  src={channel.image}
                  alt={channel.title}
                  className="absolute inset-0 w-full h-full object-cover filter saturate-[0.95] brightness-[0.92] hover:scale-[1.025] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
