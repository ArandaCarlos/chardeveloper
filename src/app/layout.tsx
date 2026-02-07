import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Import both fonts
import "./globals.css";
import { cn } from "@/lib/utils";
import { CurrencyProvider } from "@/context/currency-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Configure JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Desarrollador Web & Automatizaciones IA | Soluciones Rápidas",
  description: "Desarrollo soluciones web que automatizan tu negocio y eliminan trabajo manual. Web Apps, Automatizaciones, Integraciones e IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn(inter.variable, jetbrainsMono.variable, inter.className, "antialiased")}>
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
