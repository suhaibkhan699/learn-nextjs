/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Sort({ setProducts }: any) {
  const handleOnClick = () => {
    setProducts((prevProducts: any[]) => {
      const sortedProducts = [...prevProducts].sort(
        (a, b) => a.price - b.price
      );
      return sortedProducts;
    });
  };
  return (
    <div>
      <button
        onClick={handleOnClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors cursor-pointer my-2 mr-8"
      >
        Sort by price
      </button>
    </div>
  );
}
