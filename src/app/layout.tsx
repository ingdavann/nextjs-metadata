import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Montserrat } from "next/font/google";
import "./globals.css";
import  NextUIProvider from "@/app/providers"
import NavbarCom from "@/components/NavbarCom";
const inter = Inter({ subsets: ["latin"] });
const kantumruy = Kantumruy_Pro({
  subsets: ["khmer"],
  weight: ["300", "400", "700"],
  display: "swap",
  style: ['italic', 'normal'],
  variable: '--font-kantumruy-pro'
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  icons: "/asset/image/logo.png",
  title: {
    template: "%s",
    default: "Vann"
  },
  description: "This is Davann's life",
  keywords: ["hometown", "technology", "traveller", "guitar"],
  openGraph: {
    title: "Vann",
    description: "This is Davann's life",
    images: ["https://image.cnbcfm.com/api/v1/image/106857488-16164350972021-03-22t172150z_1971118209_rc2hgm9cxd3j_rtrmadp_0_usa-stocks-tesla.jpeg?v=1688314403&w=1920&h=1080"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kantumruy.className}>
        <NextUIProvider>
          <NavbarCom/>
          {children}
        </NextUIProvider>
        </body>
    </html>
  );
}
