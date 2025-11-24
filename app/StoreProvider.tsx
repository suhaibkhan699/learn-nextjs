"use client";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Header from "./Components/Header";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={appStore}>
      <Header />
      <main>{children}</main>
    </Provider>
  );
}
