export const initialState = {
  error: null,
  userMoney: 0,
  returnedChange: [100, 200, 20],
  lastReturnedProduct: null,
  coinStack: {
    5: 0,
    10: 40,
    20: 0,
    50: 51,
    100: 15,
    200: 2,
  },
  products: [
    {
      name: "Coca-Cola",
      price: 0.8,
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
