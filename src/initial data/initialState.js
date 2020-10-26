export const initialState = {
  error: null,
  userMoney: 0,
  returnedChange: [],
  lastReturnedProduct: null,
  coinStack: {
    5: 0,
    10: 2,
    20: 0,
    50: 51,
    100: 15,
    200: 2,
  },
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
