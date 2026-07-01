import type { Metadata } from "next";
import { CommerceProvider } from "@/lib/commerce";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spooner Kitchenware | Kamukunji Kitchenware Store",
  description:
    "Shop cookware, cutlery, appliances, bakeware, storage containers, and restaurant supplies from Spooner Kitchenware at Kamukunji Trade Center.",
  metadataBase: new URL("https://spoonerkitchenware.co.ke")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CommerceProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <WhatsAppButton />
        </CommerceProvider>
      </body>
    </html>
  );
}
