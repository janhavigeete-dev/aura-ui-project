import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "AURA — Moments worth feeling",
  description: "An evening to remember.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
