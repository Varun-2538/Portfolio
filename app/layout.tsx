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
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: "#003116",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,300..800&family=Inter:wght@400..700&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,20..72,400..600;1,20..72,400..600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
