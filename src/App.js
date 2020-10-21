import React from "react";
import { CoinsInput } from "./features/machine/CoinsInput";
import { Products } from "./features/machine/Products";
import { ReturnedProduct } from "./features/machine/ReturnedProduct";
import { Screen } from "./features/machine/Screen";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <MainLayout>
      <Screen />
      <CoinsInput />
      <Products />
      <ReturnedProduct />
    </MainLayout>
  );
}

export default App;
