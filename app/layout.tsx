import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M2V Technology | Professional Web Development",
  description: "M2V Technology designs and develops fast, responsive business websites, e-commerce stores, portfolios and landing pages.",
  keywords: ["web development", "freelance web developer", "business websites", "e-commerce development", "M2V Technology"],
  openGraph: { title: "M2V Technology | Websites built to perform", description: "Professional web design and development for ambitious businesses.", type: "website" },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/ffavicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
