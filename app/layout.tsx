import type { Metadata } from "next";
import {
  Playfair_Display, Merriweather
} from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/shared/components/SmoothScrollProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const merri = Merriweather({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Christmas Landing",
  description: "Christmas themed landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={` ${playfair.variable}
        ${merri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
