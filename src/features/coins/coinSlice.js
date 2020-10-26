import { selectedAProduct } from "../products/productsSlice";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userMoney: 0,
  returnedChange: [],
  coinStack: {
    5: 11,
    10: 10,
    20: 13,
    50: 51,
    100: 15,
    200: 2,
  },
};

const coinSlice = createSlice({
  name: "coinSlice",
  initialState,
  reducers: {
    insertedCoin(state, action) {
      state.coinStack[action.payload]++;
      state.userMoney += action.payload;
    },
    refundedUserMoney(state) {
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
    },
  },
  extraReducers: builder => {
    builder.addCase(selectedAProduct, (state, action) => {
      state.returnedChange = action.payload.change;
      action.payload.change.forEach(coin => state.coinStack[coin]--);
      state.userMoney = 0;
    });
  },
});

export const { insertedCoin, refundedUserMoney } = coinSlice.actions;

export default coinSlice.reducer;

export const returnedChange = state => state.coins.returnedChange;
export const selectCoinStack = state => state.coins.coinStack;
export const selectUserMoney = state => state.coins.userMoney;
