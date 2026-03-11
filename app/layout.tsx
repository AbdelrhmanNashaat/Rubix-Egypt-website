import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Rubix Egypt – AI-Driven Software Development & Consulting Automation",
  description:
    "Rubix Egypt is a specialized technical development team building intelligent software systems, automation platforms, and AI-powered consulting tools.",
  keywords: ["AI", "software development", "consulting automation", "Rubix", "Egypt"],
  openGraph: {
    title: "Rubix Egypt – AI-Driven Software Development & Consulting Automation",
    description:
      "Specialized technical development team for intelligent software, automation platforms, and AI-powered consulting tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }} suppressHydrationWarning>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
