const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  lastReturnedProduct: null,
  products: [
    {
      name: "Coca-Cola",
      price: 80,
      stock: 10,
    },
    {
      name: "Sprite",
      price: 90,
      stock: 10,
    },
    {
      name: "Coca-Cola Light",
      price: 80,
      stock: 2,
    },
    {
      name: "Fanta",
      price: 80,
      stock: 10,
    },
    {
      name: "Aquarius Limon",
      price: 80,
      stock: 10,
    },
    {
      name: "Aquarius Naranja",
      price: 80,
      stock: 10,
    },
    {},
    {},
    {
      name: "Botella Agua",
      price: 50,
      stock: 10,
    },
  ],
};

export const selectedAProductThunk = button => {
  return (dispatch, getState) => {
    const state = getState();

    // Enough coins?
    const insertedEnoughValueInCoins =
      state.coins.userMoney >= state.products.products[button].price;
    if (!insertedEnoughValueInCoins) {
      console.log("selectedProductWithoutEnoughCredit");
      return;
    }
    // Enough stock?
    const enoughStock = state.products.products[button].stock > 0;
    if (!enoughStock) {
      console.log("dispatch selectedProductOutOfStock");
      return;
    }
    // Enough change?
    const sortedStacks = Object.entries(state.coins.coinStack)
      .sort((a, b) => b[0] - a[0])
      .map(arr => [parseInt([arr[0]]), arr[1]]);
    let change = [];
    const returnTarget =
      state.coins.userMoney - state.products.products[button].price;
    let amountLeftToReturn = returnTarget;
    let changeSum = 0;
    const coinStackShallowCopy = { ...state.coins.coinStack };
    sortedStacks.forEach(stack => {
      const coin = stack[0];
      while (amountLeftToReturn >= coin && coinStackShallowCopy[coin] > 0) {
        coinStackShallowCopy[coin]--;
        amountLeftToReturn -= coin;
        changeSum += coin;
        change = [...change, coin];
      }
    });
    if (returnTarget !== changeSum) {
      console.log("dispatch selectedProductOutOfChange");
      return;
    }
    dispatch(
      selectedAProduct({
        productName: state.products.products[button].name,
        change,
      })
    );
  };
};
const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    selectedAProduct(state, action) {
      state.lastReturnedProduct = action.payload.productName;
    },
  },
});

export const { selectedAProduct } = productsSlice.actions;
export default productsSlice.reducer;

export const selectLastReturnedProduct = state =>
  state.products.lastReturnedProduct;
