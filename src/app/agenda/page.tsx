import type { Metadata } from "next";
import { AgendaPage } from "./AgendaPage";

export const metadata: Metadata = {
  title: "Curriculum Overview | Agenda | World AI Show | Supply Chain, Ports & Logistics | Dubai 2027",
  description:
    "From use case to operating outcome. Explore the six-stage implementation framework for World AI Show | Supply Chain, Ports & Logistics | Dubai 2027 (10 June 2027 · Dubai, United Arab Emirates · One-Day Executive Implementation Forum). Organised by Trescon.",
};

export default function Page() {
  return <AgendaPage />;
}
