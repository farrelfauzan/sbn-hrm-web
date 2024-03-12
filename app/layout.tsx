import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { Toaster } from "@/components/ui/toaster";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AntaraCo",
  description: "AntaraCo Human Resource Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("antara_session")?.value;
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {token && <Header />}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
