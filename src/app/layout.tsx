import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MouseCursor from "@/components/cursor";
import ProgressBar from "@/components/progress-bar";
// import { GsapProvider } from "@/context/gsap-context";

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "DABEEN PORTFOLIO",
  openGraph: {
    images: {
      url: '/images/ogimg.jpg',
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MouseCursor />
        <Header />
        <main>
          <ProgressBar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
