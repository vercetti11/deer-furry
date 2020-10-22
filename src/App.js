import React from "react";
import { CoinsInput } from "./features/machine/CoinsInput";
import { Products } from "./features/machine/Products";
import { ReturnedProduct } from "./features/machine/ReturnedProduct";
import { Screen } from "./features/machine/Screen";
import { ReturnedCoinBox } from "./features/machine/ReturnedCoinBox";
import MainLayout from "./layout/MainLayout";
import { MachineBottomLayout } from "./layout/MachineBottomLayout";
function App() {
  return (
    <MainLayout>
      <Screen />
      <CoinsInput />
      <Products />
      <MachineBottomLayout>
        <ReturnedProduct />
        <ReturnedCoinBox />
      </MachineBottomLayout>
    </MainLayout>
  );
}

export default App;
