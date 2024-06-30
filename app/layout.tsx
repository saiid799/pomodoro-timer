import type { Metadata } from "next";
import { Rokkitt } from "next/font/google";
import "./globals.css";

const rokkitt = Rokkitt({
  subsets: ["latin"],
  variable: "--font-rokkitt",
});

export const metadata: Metadata = {
  title: "Pomodoro Focus",
  description: "Boost your productivity with our modern Pomodoro Timer app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rokkitt.variable}>
      <body className="font-rokkitt bg-[#E7F0DC]">{children}</body>
    </html>
  );
}
