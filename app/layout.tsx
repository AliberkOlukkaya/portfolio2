import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aliberk Olukkaya — AI & Data Engineer",
  description:
    "Computer Engineer specializing in machine learning, deep learning, and full-stack AI applications. Projects spanning computer vision, LLM APIs, and modern web platforms.",
  keywords: [
    "Aliberk Olukkaya",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Data Engineering",
    "Computer Engineer",
    "Python",
    "Full-stack",
  ],
  authors: [{ name: "Aliberk Olukkaya" }],
  openGraph: {
    title: "Aliberk Olukkaya — AI & Data Engineer",
    description:
      "Computer Engineer specializing in machine learning, deep learning, and full-stack AI applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
