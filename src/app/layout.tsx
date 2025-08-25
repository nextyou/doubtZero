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
    "doubtZero || Eliminating doubts, 24/7",
  description:
    "doubtZero is your go-to platform for resolving doubts and queries, anytime, anywhere. Experience instant support and expert solutions at your fingertips.",
  openGraph: {
    title: "doubtZero || Eliminating doubts, 24/7.",
    description:
      "doubtZero is your go-to platform for resolving doubts and queries, anytime, anywhere. Experience instant support and expert solutions at your fingertips.",
    url: "https://doubtzero.com",
    siteName: "doubtZero"
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
