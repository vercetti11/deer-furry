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

        // Return Left Change Logic
        const sortedStacks = Object.entries(state.coinStack)
          .sort((a, b) => b[0] - a[0])
          .map(arr => [parseInt([arr[0]]), arr[1]]);

        const stackHasCoins = stack => stack[1] > 0;
        let change = [];
        sortedStacks.forEach(stack => {
          const coin = stack[0];
          if (stackHasCoins(stack)) {
            while (state.userMoney >= coin) {
              state.coinStack[coin]--;
              state.userMoney -= coin;
              change = [...change, coin];
            }
          }
        });
        state.returnedChange = change;
        //
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

export const selectLastReturnedProduct = state =>
  state.machine.lastReturnedProduct;

export const returnedChange = state => state.machine.returnedChange;
