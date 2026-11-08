import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Little Drops — Every little drop matters",
  description: "A calm, private companion for pumping and breastfeeding. Explore Little Drops for iPhone and Apple Watch, contact Ian Dorosh, and read our privacy policy.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
