import { initialState } from "../../initial data/initialState";
const { createSlice } = require("@reduxjs/toolkit");

const machineSlice = createSlice({
  name: "machine",
  initialState,
  reducers: {
    insertedCoin(state, action) {
      state.coinStack[action.payload]++;
      state.userMoney += action.payload;
    },
    selectedAProduct(state, action) {
      const button = action.payload;
      // Check if purchase can be satisfied
      const insertedEnoughValueInCoins =
        state.userMoney >= state.products[button].price;
      const enoughStock = state.products[button].stock > 0;
      const purchaseCanBeSatisfied = insertedEnoughValueInCoins && enoughStock;
      //
      if (purchaseCanBeSatisfied) {
        state.userMoney -= state.products[action.payload].price;
        state.products[action.payload].stock--;
        state.lastReturnedProduct = state.products[action.payload].name;
      } else if (!enoughStock) {
        state.error = "0 stock";
      } else {
        state.error = "Error";
      }
    },
    clearedErrorMessage(state) {
      state.error = null;
    },
  },
});

export const {
  insertedCoin,
  selectedAProduct,
  clearedErrorMessage,
} = machineSlice.actions;

export default machineSlice.reducer;

export const selectAllProducts = state => state.machine.products;

export const selectError = state => state.machine.error;
export const selectUserMoney = state => state.machine.userMoney;
