/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((store: any) => store.cart.items);
  return (
    <div className="flex flex-row p-4 justify-between bg-black text-white">
      <div>
        <h2 className="font-bold">Test E-commerce</h2>
      </div>
      <div className="mr-8">
        <ul className="flex flex-row">
          <li className="px-2">About us</li>
          <li className="px-2">Contact us</li>
          <Link href={"/cart"}>
            <li className="px-2">Cart({cart.length})</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
