import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kérian Wimbée — Marketing Specialist & AI Strategist",
  description:
    "Marketing Manager with 3+ years driving growth for premium F&B brands across Asia. Combining strategic marketing with AI-native execution.",
  metadataBase: new URL("https://kerian-portfolio.vercel.app"),
  openGraph: {
    title: "Kérian Wimbée — Marketing Specialist & AI Strategist",
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
        {children}
      </body>
    </html>
  );
}
