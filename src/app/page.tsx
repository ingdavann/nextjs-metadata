'use client'
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const routeToProduct = useRouter();
  return (
    <>
    <Button className="mt-5" onClick={() => routeToProduct.push('/product/{id}')}>Go to Product</Button>
    <h2>This is Kantumruy Font</h2>
    <h2>This is Montserrat Font</h2>
    </>
  );
}
