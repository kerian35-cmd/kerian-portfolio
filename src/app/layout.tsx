import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Kérian Wimbée | Marketing Strategist, F&B & Hospitality",
  description:
    "Marketing Manager with 3+ years driving growth for premium F&B brands across Asia. Strategy first, AI when it helps.",
  metadataBase: new URL("https://kerian-portfolio.vercel.app"),
  openGraph: {
    title: "Kérian Wimbée | Marketing Strategist, F&B & Hospitality",
    description:
      "Marketing Manager with 3+ years driving growth for premium F&B brands across Asia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-bg-light text-fg`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
