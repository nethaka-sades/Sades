import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "./header";
import { Footer } from "./footer";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nethaka De Saram",
  description: "Portfolio thingy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-rubik)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 pt-20 border-x">
              <Header/>
              {children}
              <Footer/>
            </div>
          </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
