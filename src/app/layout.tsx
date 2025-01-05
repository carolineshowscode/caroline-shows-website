import type { Metadata } from "next";
import { Geist, Playwrite_IN } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playwrite = Playwrite_IN({
  variable: "--font-playwrite-in",
  weight: ['400'],
});

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
    <html lang="en" className={`${playwrite.className}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        // className={`${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
