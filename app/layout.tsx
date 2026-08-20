import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind Tickle — Understand minds, don't read them",
  description:
    "Interactive psychological, mathematical, and linguistic tricks you can perform on friends. Learn why minds behave predictably.",
  openGraph: {
    title: "Mind Tickle",
    description: "You don't need to read minds. You just need to understand them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/5 py-8 text-center text-xs text-zinc-600">
          Mind Tickle — psychology, not telepathy.
        </footer>
      </body>
    </html>
  );
}
