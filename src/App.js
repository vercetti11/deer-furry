import React from "react";
import { CoinsInput } from "./features/machine/CoinsInput";
import { Screen } from "./features/machine/Screen";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <MainLayout>
      <Screen />
      <CoinsInput />
    </MainLayout>
  );
}

export default App;
