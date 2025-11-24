/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItemAsync } from "../utils/cartSlice";

export default function ProductCard({
  data,
  extraClass = "border-blue-500",
  isLoading,
  activeId,
  setIsLoading,
  setActiveId,
}: any) {
  const { price, title, thumbnail, id } = data;
  const dispatch = useDispatch();

  const handleAddToBasket = async (e: React.MouseEvent, data: any) => {
    e.stopPropagation();
    e.preventDefault();

    setActiveId(id);
    setIsLoading(true);

    try {
      await dispatch(addItemAsync(data)).unwrap();
      console.log(`✅ Added ${title} to basket`);
    } catch (err) {
      console.error("❌ Failed to add item:", err);
    } finally {
      setIsLoading(false);
      setActiveId(null);
    }
  };

  const isCurrentCard = activeId === id;

  return (
    <div
      className={`w-64 border rounded-lg shadow hover:shadow-lg transition-shadow ${extraClass}`}
    >
      <Link href={`/products/${id}`} passHref>
        <div className="cursor-pointer">
          <div className="relative w-full h-48">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>

          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-800 truncate">
              {title}
            </h3>
            <p className="text-lg font-bold text-gray-900 mt-1">£{price}</p>

            <button
              onClick={(event) => handleAddToBasket(event, data)}
              disabled={isLoading}
              className={`mt-3 w-full flex items-center justify-center gap-2 ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors`}
            >
              {isCurrentCard && isLoading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Adding...
                </>
              ) : (
                "Add to Basket"
              )}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export const withLowStockLabel = (ProductCard: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    return (
      <div className="relative">
        <label className="bg-red-500 text-white text-xs font-bold rounded-lg absolute px-2 py-1 m-2">
          Low Stock
        </label>
        <ProductCard {...props} extraClass="border-red-500" />
      </div>
    );
  };
};
