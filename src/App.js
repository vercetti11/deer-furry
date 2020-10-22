import React from "react";
import { CoinsInput } from "./features/machine/CoinsInput";
import { Products } from "./features/machine/Products";
import { ReturnedProduct } from "./features/machine/ReturnedProduct";
import { Screen } from "./features/machine/Screen";
import { ReturnedCoinBox } from "./features/machine/ReturnedCoinBox";
import MainLayout from "./layout/MainLayout";
import { MachineBottomLayout } from "./layout/MachineBottomLayout";
import { TopLayout } from "./layout/TopLayout";
import { RefundButton } from "./features/machine/RefundButton";
function App() {
  return (
    <MainLayout>
      <Screen />
      <TopLayout>
        <RefundButton />
        <CoinsInput />
      </TopLayout>
      <Products />
      <MachineBottomLayout>
        <ReturnedProduct />
        <ReturnedCoinBox />
      </MachineBottomLayout>
    </MainLayout>
  );
}

export default App;
