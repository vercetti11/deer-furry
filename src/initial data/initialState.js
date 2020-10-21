export const initialState = {
  error: null,
  userMoney: 0,
  coinStack: {
    0.05: 30,
    0.1: 40,
    0.2: 50,
    0.5: 50,
    1: 15,
    2: 0,
  },
  products: [
    {
      name: "Coca-Cola",
      price: 0.8,
      stock: 10,
    },
    {
      name: "Sprite",
      price: 0.9,
      stock: 10,
    },
    {
      name: "Coca-Cola Light",
      price: 0.8,
      stock: 2,
    },
    {
      name: "Fanta",
      price: 0.8,
      stock: 10,
    },
    {
      name: "Aquarius Limon",
      price: 0.8,
      stock: 10,
    },
    {
      name: "Aquarius Naranja",
      price: 0.8,
      stock: 10,
    },
    {},
    {},
    {
      name: "Botella Agua",
      price: 0.5,
      stock: 10,
    },
  ],
};
