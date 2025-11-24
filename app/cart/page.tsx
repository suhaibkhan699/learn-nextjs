"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((store: any) => store.cart.items);
  return (
    <>
      <div className="px-24 py-4">
        This is my cart page
        <hr />
        <hr />
        Total no. items in cart : {cartItems.length}
      </div>
    </>
  );
}
