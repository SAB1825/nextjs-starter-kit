import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider/themeProvider";
import Header from "@/components/pageComponents/Header";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "NetWeave",
  description: "A Next.js starter kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            <Header />
            <main className="grow">{children}</main>
            
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
