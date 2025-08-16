import { Outfit } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { Metadata } from 'next';

const outfit = Outfit({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title:
    "DoubtZero || Eliminating doubts, 24/7",
  description:
    "DoubtZero is your go-to platform for resolving doubts and queries, anytime, anywhere. Experience instant support and expert solutions at your fingertips.",
  openGraph: {
    title: "DoubtZero || Eliminating doubts, 24/7.",
    description:
      "DoubtZero is your go-to platform for resolving doubts and queries, anytime, anywhere. Experience instant support and expert solutions at your fingertips.",
    url: "https://doubtzero.com",
    siteName: "DoubtZero"
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
