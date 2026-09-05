import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { siteUrl } from "@/lib/site";
import { profile } from "@/data";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = `${profile.name} | ${profile.role}`;
const description = `Portfolio of ${profile.name}, ${profile.role} at ${profile.company} and an IT undergraduate at SLIIT, building full-stack web and mobile applications with Next.js, NestJS and React Native.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Hirusha Sumanaweera",
    "software engineer",
    "full stack developer",
    "React",
    "Next.js",
    "NestJS",
    "React Native",
    "TypeScript",
    "Sri Lanka",
    "SLIIT",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} - ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000319",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <a
            href="#top"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[6000] focus:rounded-md focus:bg-black-200 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
