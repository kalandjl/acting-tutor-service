import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import "./globals.css";

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
        <Analytics />
        <div className="bg-stone-800"></div>
      </body>
    </html>
  );
}
