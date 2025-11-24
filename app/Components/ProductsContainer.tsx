"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ProductCard, { withLowStockLabel } from "./ProductCard";
import Sort from "./Sort";
import SearchBar from "./SearchBar";
import useProducts from "../utils/useProducts";

export default function ProductContainer() {
  const { products, setProducts } = useProducts();
  const [isLoading, setIsLoading] = useState(false); // any product loading
  const [activeId, setActiveId] = useState<string | number | null>(null); // which product is being added

  const ProductWithLowStockLabel = withLowStockLabel(ProductCard);

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-24 py-4">
      <div className="flex justify-end">
        <SearchBar setProducts={setProducts} />
        <Sort setProducts={setProducts} />
      </div>
      <div className="flex flex-wrap flex-row">
        {products.map((item: any) => {
          const CardComponent =
            item?.availabilityStatus === "Low Stock"
              ? ProductWithLowStockLabel
              : ProductCard;
          return (
            <div key={item?.id} className="mr-4 mb-4">
              <CardComponent
                data={item}
                isLoading={isLoading}
                activeId={activeId}
                setIsLoading={setIsLoading}
                setActiveId={setActiveId}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
