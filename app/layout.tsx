import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/navbar";
import ScrollAnimationProvider from "@/components/providers/animation-provider";
import LenisProvider from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
    template: "%s | mjldotdev",
    default: "mjldotdev",
  },
  description:
    "Full-stack web developer specializing in responsive websites, scalable web applications, and modern front-end and back-end technologies. Experienced in building fast, user-friendly, and SEO-optimized digital solutions.",
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
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>>_</text></svg>"
          rel="icon"
        />
      </head>
      <body
        className={cn(
          jetbrainsMono.variable,
          spaceGrotesk.variable,
          "font-sans antialiased selection:bg-primary selection:text-white"
        )}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="vanguard"
          disableTransitionOnChange
          enableSystem
          themes={["vanguard", "light", "titanium", "architect"]}
        >
          <LenisProvider>
            <ScrollAnimationProvider>
              <TooltipProvider>
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
              </TooltipProvider>
              <Toaster />
            </ScrollAnimationProvider>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
