import "@/styles/globals.css"; // Global styles
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";

// Metadata Configuration
export const metadata: Metadata = {
  title: {
    default: "PFC",
    template:''
    // template: `%s - We aim to empower you by providing you high quality attire.`,
  },
  description: "",
  icons: {
    icon: "/favicon.png",
     
  },
};

// Viewport Configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("bg-white text-black ", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
