import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const description =
  "Saed Abbas — Front-End Developer specializing in React, Next.js and TypeScript. Building fast, accessible and beautifully crafted web experiences.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saed Abbas — Front-End Developer",
    template: "%s | Saed Abbas",
  },
  description,
  keywords: [
    "Saed Abbas",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Gaza",
  ],
  authors: [{ name: "Saed Abbas", url: "https://github.com/SaedAbbas" }],
  openGraph: {
    type: "website",
    title: "Saed Abbas — Front-End Developer",
    description,
    images: [{ url: "/saedabbas.webp", width: 500, height: 500, alt: "Saed Abbas" }],
  },
  twitter: {
    card: "summary",
    title: "Saed Abbas — Front-End Developer",
    description,
    images: ["/saedabbas.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07080d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
