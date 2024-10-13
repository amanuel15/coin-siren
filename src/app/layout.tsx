import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Coin Siren",
  description: "Coin Siren Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <main className="min-h-svh bg-[#FBFBFB]">{children}</main>
      </body>
    </html>
  );
}
