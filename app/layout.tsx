import type { Metadata } from "next";
import { Inter, Nunito_Sans, Ubuntu } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const ubuntu = Nunito_Sans({ subsets: ["latin"], weight:["300","400","500","700","800","1000"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("container mx-auto max-w-7xl py-3", ubuntu.className)}>{children}</body>
    </html>
  );
}
