import "./globals.css";
import data from "@/utils/settings.json";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Photography by ${data.name}`,
  description: data.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ backgroundColor: data.bg_color }} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
