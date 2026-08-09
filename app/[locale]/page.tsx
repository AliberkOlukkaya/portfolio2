import { notFound } from "next/navigation";
import PortfolioPage from "@/components/PortfolioPage";
import type { Locale } from "@/lib/i18n";

export function generateStaticParams() { return [{ locale: "en" }, { locale: "tr" }]; }

export default function LocalizedPage({ params }: { params: { locale: string } }) {
  if (params.locale !== "en" && params.locale !== "tr") notFound();
  return <PortfolioPage locale={params.locale as Locale} />;
}
