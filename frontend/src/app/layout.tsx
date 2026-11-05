import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donezo Dashboard",
  description: "Plan, prioritize, and accomplish your tasks with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#eef1e6] text-[#283618] selection:bg-[#dda15e] selection:text-[#283618]">
        {children}
      </body>
    </html>
  );
}
