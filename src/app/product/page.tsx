import CardProductCom from '@/components/CardProductCom';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

const url = "https://dummyjson.com/products";
async function getData(){
  const res = await fetch(url);
  const result = await res.json();
  return result.products;
}

export const metadata: Metadata = {
  title: "Product",
  description: "This is product's page",
  keywords: ["hometown", "technology", "traveller", "guitar"],
  icons: "/asset/image/logo.png",
  openGraph: {
    title: "Product",
    description: "This is Davann's life",
    images: ["https://image.cnbcfm.com/api/v1/image/106857488-16164350972021-03-22t172150z_1971118209_rc2hgm9cxd3j_rtrmadp_0_usa-stocks-tesla.jpeg?v=1688314403&w=1920&h=1080"]
  }
};

const page = async () => {
  const productItem = await getData();
  console.log(productItem)
  return (
    <section className='mx-auto w-[90%]'>
      <section className='grid grid-cols-4 gap-5 mt-5'>
      {
        productItem.map((product: productType)=>(
        <Link as={`product/${product.id}`} href="#" key={product.id}>
          <CardProductCom
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
            price={product.price}
            id={0}
            category=""
            stock={0}
        />
       </Link>
      ))
    }
      </section>
    </section>
  )
}

export default page
