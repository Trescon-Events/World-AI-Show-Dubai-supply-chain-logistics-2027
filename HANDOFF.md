# HANDOFF.md — World AI Show | Supply Chain, Ports & Logistics | Dubai 2027

## Build & Deployment Overview
- **Framework**: Next.js 16 (App Router) with React 19, TypeScript, Tailwind CSS v4
- **Static Export**: Configured in `next.config.ts` with `output: "export"`, `basePath: "/dubai/supply-chain-logistics"`, `trailingSlash: true`, and `images: { unoptimized: true }`.
- **Design & Visual Assets**: Shares the exact design language, component structure, images, and videos from the sister Dubai 2027 series (`World-AI-Show-Dubai---Banking-2027`), customized with Supply Chain, Ports & Logistics content and official vector lockups (`wais-27-supply-chain_header.svg` and `wais-27-supply-chain_footer.svg`).

## Routes (24 Static Pages)
1. `/` — Home Page
2. `/agenda/` — Conference Overview
3. `/agenda/agenda/` — Full 1-Day Schedule (10 June 2027, 08:00–17:30)
4. `/agenda/themes/` — 6 Core Strategic Themes
5. `/agenda/the-2030-vision/` — UAE AI Strategy 2031, D33 & Dubai Silk Road Alignment
6. `/agenda/call-for-speakers/` — Call for Speakers
7. `/attend/` — Attend Hub
8. `/attend/delegate/` — Why Attend as a Delegate
9. `/attend/sponsor/` — Why Sponsor
10. `/attend/media-partner/` — Why Be a Media Partner
11. `/attend/association-partner/` — Why Be an Association Partner
12. `/speakers/` — Speakers Hub (2027 Faculty Recruitment + 16 Past Global Series Speakers)
13. `/partners/` — Partners Hub (Sponsorship Matrix + Past Global Series Partners)
14. `/networking/` — Networking Hub
15. `/networking/attendee-app/` — Attendee App
16. `/networking/ai-matchmaking/` — AI Matchmaking
17. `/networking/photo-gallery/` — Past Editions Photo Gallery
18. `/sponsorship-enquiry/` — Sponsor Enquiry (`85acef5d-fa5c-41b0-9864-69c65ff95e94`)
19. `/speaker-enquiry/` — Speaker Enquiry (`0470aa62-13fa-4db9-8412-f342d1b3a690`)
20. `/media-enquiry/` — Media Enquiry (`6127c6a6-323f-4ba9-9cc1-540403b4ed4e`)
21. `/association-enquiry/` — Association Enquiry (`03da8cb6-083b-4538-9eb0-629153fdfcbd`)
22. `/general-enquiry/` — General & Delegate Enquiry (`ec15650d-2417-489b-8376-c5bb8d5a46a7`)
23. `/speaker-onboarding/` — Speaker Onboarding (`b030a8b3-7b29-4426-bad5-4419d6fd140a`)
24. `/sponsor-onboarding/` — Sponsor Onboarding (`522fbc5d-cdf7-476d-a8cc-48ca799f9833`)
25. `/association-partner-onboarding/` & `/association-onboarding/` — Association Partner Onboarding (`8f25d84d-e4dc-4c23-a094-bc7365e0cd6a`)
