import "@/styles/globals.css";
import "@/styles/design.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import localFont from "next/font/local";
import MainLayout from "@/components/MainLayout/MainLayout";

const satoshi = localFont({
  src: [
    {
      path: "../public/satoshi/Satoshi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/satoshi/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/satoshi/Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/satoshi/Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "white" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx("min-h-screen bg-background antialiased", satoshi.variable,)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <MainLayout>
              {children}
            </MainLayout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
