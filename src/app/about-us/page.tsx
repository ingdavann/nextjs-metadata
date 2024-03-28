import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "About Us",
  description: "This is about us page",
  keywords: ["hometown", "technology", "traveller", "guitar"],
  icons: "/asset/image/logo.png",
  openGraph: {
    title: "Product",
    description: "This is Davann's life",
    images: ["https://image.cnbcfm.com/api/v1/image/106857488-16164350972021-03-22t172150z_1971118209_rc2hgm9cxd3j_rtrmadp_0_usa-stocks-tesla.jpeg?v=1688314403&w=1920&h=1080"]
  }
};
const page = () => {
  return (
    <div>
      Hello, this is About Us page
    </div>
  )
}

export default page
