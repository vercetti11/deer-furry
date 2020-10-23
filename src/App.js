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
import { OpenMantainance } from "./features/machine/OpenMantainance";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { RefillStock } from "./features/machine/RefillStock";
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
              <ReturnedCoinBox />
            </MachineBottomLayout>
          </Route>

          <Route exact path="/mantainance">
            <OpenMantainance />
            <RefillStock />
          </Route>
          <Redirect to="/" />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
