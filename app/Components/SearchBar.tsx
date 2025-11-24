/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function SearchBar({ setProducts }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchClick = () => {
    setProducts((prevProducts: any[]) =>
      prevProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  return (
    <div className="w-full max-w-md mx-auto my-4">
      <input
        type="text"
        id="searchBar"
        placeholder="Search products..."
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={onSearchClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors cursor-pointer my-2 mr-8"
      >
        Search
      </button>
    </div>
  );
}
