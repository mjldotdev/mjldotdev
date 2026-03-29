import type { Metadata, Viewport } from "next";
import {
  Inter,
  JetBrains_Mono,
  Manrope,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header-new";
import LenisProvider from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Hello World",
    default: "Hello World",
  },
  description: "Created by mjldotdev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <head>
        <link
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📦</text></svg>"
          rel="icon"
        />
      </head>
      <body
        className={cn(
          inter.variable,
          jetbrainsMono.variable,
          spaceGrotesk.variable,
          manrope.variable,
          "overflow-x-hidden bg-surface font-body text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container"
        )}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          disableTransitionOnChange
          enableColorScheme
          forcedTheme="dark"
          themes={["light", "dark", "atelier-canvas"]}
        >
          <LenisProvider>
            <TooltipProvider>
              <Header />
              <main className="min-h-screen overflow-hidden">{children}</main>
              <Footer />
            </TooltipProvider>
            <Toaster />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
