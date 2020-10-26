import { configureStore } from "@reduxjs/toolkit";
import machineReducer from "../features/machine/machineSlice";
import coinReducer from "../features/coins/coinSlice";
import productsReducer from "../features/products/productsSlice";
export default configureStore({
  reducer: {
    machine: machineReducer,
    coins: coinReducer,
    products: productsReducer,
  },
});
