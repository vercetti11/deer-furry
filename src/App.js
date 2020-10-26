import React from "react";
import { CoinsInput } from "./features/coins/CoinsInput";
import { Products } from "./features/machine/Products";
import { ReturnedProduct } from "./features/products/ReturnedProduct";
import { Screen } from "./features/coins/Screen";
import { CoinsReturned } from "./features/coins/CoinsReturned";
import MainLayout from "./layout/MainLayout";
import { MachineBottomLayout } from "./layout/MachineBottomLayout";
import { TopLayout } from "./layout/TopLayout";
import { RefundButton } from "./features/coins/RefundButton";
import { OpenMantainance } from "./features/machine/OpenMantainance";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { RefillStock } from "./features/machine/RefillStock";
import { RefillCoinStack } from "./features/machine/RefillCoinStack";
function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <Screen />
            <TopLayout>
              <RefundButton />
              <CoinsInput />
            </TopLayout>
            <OpenMantainance />
            <Products />
            <MachineBottomLayout>
              <ReturnedProduct />
              <CoinsReturned />
            </MachineBottomLayout>
          </Route>

          <Route exact path="/mantainance">
            <OpenMantainance />
            <RefillStock />
            <RefillCoinStack />
          </Route>
          <Redirect to="/" />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
