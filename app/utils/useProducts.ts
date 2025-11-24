import { useState, useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();
      setProducts(json?.products);
    })();
  }, []);
  return { products, setProducts };
}
