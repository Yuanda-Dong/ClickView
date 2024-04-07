import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";
import Navigation from "@/components/navigation";

import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClickView Practical",
  description: "ClickView frontend practical assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
