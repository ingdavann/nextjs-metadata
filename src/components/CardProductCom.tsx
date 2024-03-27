
"use client";

import { Card } from "flowbite-react";

export default function CardProductCom({id,title,description,thumbnail}: productType) {
  return (
    <Card key={id}
      className="max-w-sm"
      imgAlt={title}
      imgSrc={thumbnail}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}
