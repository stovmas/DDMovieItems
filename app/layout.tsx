import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Dash — Delivered by DoorDash Arcade",
  description: "Guess the movie from the DoorDash order! A game by DoorDash Arcade.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-theater-dark">{children}</body>
    </html>
  );
}
