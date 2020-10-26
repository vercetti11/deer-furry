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

      // Check if change can be returned
      const sortedStacks = Object.entries(state.coinStack)
        .sort((a, b) => b[0] - a[0])
        .map(arr => [parseInt([arr[0]]), arr[1]]);
      let change = [];
      const returnTarget = state.userMoney - state.products[button].price;
      let amountLeftToReturn = returnTarget;
      let changeSum = 0;
      const coinStackShallowCopy = { ...state.coinStack };
      sortedStacks.forEach(stack => {
        const coin = stack[0];
        while (amountLeftToReturn >= coin && coinStackShallowCopy[coin] > 0) {
          coinStackShallowCopy[coin]--;
          amountLeftToReturn -= coin;
          changeSum += coin;
          change = [...change, coin];
        }
      });
      //

      if (purchaseCanBeSatisfied && returnTarget === changeSum) {
        state.userMoney -= state.products[action.payload].price + changeSum;
        state.products[action.payload].stock--;
        state.lastReturnedProduct = state.products[action.payload].name;

        change.forEach(coin => state.coinStack[coin]--);
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
    refundedUserMoney(state) {
      // Repeated Logic, later we'll see if we refactor or not

      // Return Left Change Logic
      const sortedStacks = Object.entries(state.coinStack)
        .sort((a, b) => b[0] - a[0])
        .map(arr => [parseInt([arr[0]]), arr[1]]);

      let change = [];
      sortedStacks.forEach(stack => {
        const coin = stack[0];
        while (state.userMoney >= coin && state.coinStack[coin] > 0) {
          state.coinStack[coin]--;
          state.userMoney -= coin;
          change = [...change, coin];
        }
      });
      state.returnedChange = change;
      //
    },
    refillStockOfBeverages(state, action) {
      const quantity = action.payload.quantity;
      const slot = action.payload.slot;
      state.products[slot].stock += quantity;
    },
    refillStockOfCoins(state, action) {
      const quantity = action.payload.quantity;
      const slot = action.payload.slot;
      state.coinStack[slot] += quantity;
    },
  },
});

export const {
  insertedCoin,
  selectedAProduct,
  clearedErrorMessage,
  refundedUserMoney,
  refillStockOfBeverages,
  refillStockOfCoins,
} = machineSlice.actions;

export default machineSlice.reducer;

export const selectAllProducts = state => state.machine.products;

export const selectError = state => state.machine.error;
export const selectUserMoney = state => state.machine.userMoney;

export const selectLastReturnedProduct = state =>
  state.machine.lastReturnedProduct;

export const returnedChange = state => state.machine.returnedChange;

export const selectCoinStack = state => state.machine.coinStack;
