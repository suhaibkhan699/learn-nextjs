export default async function ProductDetails({
  params,
}: Promise<{ productId: string }>) {
  const productId = (await params).productId;

  const fetchProductData = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  };

  const productData = await fetchProductData(productId);

  return (
    <>
      <div className="px-24 py-4">
        Product Details for {productId}
        <hr />
        <hr />
        {JSON.stringify(productData)}
      </div>
    </>
  );
}
