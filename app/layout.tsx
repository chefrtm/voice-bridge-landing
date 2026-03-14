import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Voice Bridge — Open Voice Pipeline",
  description:
    "Record any conversation. Get transcripts, summaries, and action items in your AI — in minutes. No lock-in.",
  openGraph: {
    title: "Voice Bridge — Open Voice Pipeline",
    description:
      "Record any conversation. Get everything in your AI — in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-[family-name:var(--font-space-grotesk)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
