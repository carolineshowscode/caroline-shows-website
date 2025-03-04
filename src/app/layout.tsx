import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Playwrite_IN, Dosis } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";


const playwrite = Playwrite_IN({
  variable: "--font-playwrite-in",
  weight: ['400'],
});

const dosis = Dosis({
  subsets: ['latin'],
  variable: "--font-dosis",
  weight: ['200'],
});

export const metadata: Metadata = {
  title: "Caroline's Personal Website",
  description: "A website all about Caroline Shows",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carolineshows.com",
    siteName: "Caroline's Personal Website",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playwrite.className} ${dosis.className}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className='bg-primary'>
          <Nav />
        </div>
        <main className='font-dosis'>{children}</main>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
