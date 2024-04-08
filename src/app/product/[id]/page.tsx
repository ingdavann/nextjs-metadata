// 'use client'
import { Params } from '@/app/types/paramsType';
import ProductCardDetail from '@/components/ProductCardDetail ';
import { Metadata } from 'next';
import React from 'react'


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

async function getProductDetail(params: string) {
    const response = await fetch(`https://dummyjson.com/products/${params}`);
    const data = await response.json();
    return data;
}

export default async function page({ params }: Params) {
	const product: productType = await getProductDetail(params.id); 
	return (    
		<div className="flex justify-center">
			<ProductCardDetail
				id={product.id}
				// key={product.id}
                title={product.title}
                description={product.description}
                thumbnail={product.thumbnail}
                price={product.price}
                stock={product.stock}
                category={product.category}
			/>
		</div>
	);
}