import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Online Acting Coach in Vancouver | Nicole McDonald Acting",
  description: "Unlock your potential with professional acting tutoring and on-camera coaching from Nicole McDonald in Vancouver, BC. Book a private consultation to land your next role.",};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <div className="bg-stone-800"></div>
      </body>
    </html>
  );
}
