import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varun Singh — Where systems get built",
  description:
    "Engineer who builds trading systems, fintech rails, and AI agents that work while everyone sleeps.",
  metadataBase: new URL("https://varun5.vercel.app"),
  openGraph: {
    title: "Varun Singh — Where systems get built",
    description:
      "Engineer who builds trading systems, fintech rails, and AI agents that work while everyone sleeps.",
    url: "https://varun5.vercel.app",
    siteName: "Varun Singh",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b0d12",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
