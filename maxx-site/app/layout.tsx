import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "MAXX Energy",
  description: "Powering a cleaner tomorrow."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#0e1116] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
