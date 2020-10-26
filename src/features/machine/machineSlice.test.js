import { initialState } from "../../initial data/initialState";
import machine, {
  insertedCoin,
  selectedAProduct,
  refillStockOfBeverages,
  refillStockOfCoins,
} from "./machineSlice";

describe("machine reducer", () => {
  it("should handle initial state", () => {
    expect(machine(undefined, initialState)).toEqual(initialState);
  });
  it("insertedCoin with 5c should show up in the coinStack and userMoney", () => {
    expect(
      machine(
        {
          userMoney: 0,
          coinStack: {
            5: 0,
            10: 40,
            20: 0,
            50: 51,
            100: 15,
            200: 2,
          },
        },
        {
          type: insertedCoin.type,
          payload: 5,
        }
      )
    ).toEqual({
      coinStack: {
        5: 1,
        10: 40,
        20: 0,
        50: 51,
        100: 15,
        200: 2,
      },
      userMoney: 5,
    });
    expect(
      machine(
        {
          userMoney: 0,
          coinStack: {
            5: 1,
            10: 40,
            20: 0,
            50: 51,
            100: 15,
            200: 2,
          },
        },
        {
          type: insertedCoin.type,
          payload: 10,
        }
      )
    ).toEqual({
      coinStack: {
        5: 1,
        10: 41,
        20: 0,
        50: 51,
        100: 15,
        200: 2,
      },
      userMoney: 10,
    });
  });
  it("should not return a product if there is no money", () => {
    expect(
      machine(
        {
          userMoney: 0,
          coinStack: {
            5: 0,
            10: 1,
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
          ],
        },
        {
          type: selectedAProduct.type,
          payload: 0,
        }
      )
    ).toEqual({
      userMoney: 0,
      error: "Error",
      coinStack: {
        5: 0,
        10: 1,
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
      ],
    });
  });

  it("selectedAProduct priced 80c should return 20c if user inserted 1€ and the 20c Coin Stack should show one coin less", () => {
    expect(
      machine(
        {
          userMoney: 100,
          returnedChange: [],
          products: [
            {
              name: "Coca-Cola",
              price: 80,
              stock: 10,
            },
          ],
          coinStack: {
            5: 0,
            10: 40,
            20: 2,
            50: 51,
            100: 15,
            200: 2,
          },
        },
        {
          type: selectedAProduct.type,
          payload: 0,
        }
      )
    ).toEqual({
      userMoney: 0,
      returnedChange: [20],
      lastReturnedProduct: "Coca-Cola",
      products: [
        {
          name: "Coca-Cola",
          price: 80,
          stock: 9,
        },
      ],
      coinStack: {
        5: 0,
        10: 40,
        20: 1,
        50: 51,
        100: 15,
        200: 2,
      },
    });
  });
  it("refillStockOfBeverages of Coca-Cola with 10u should reflect in products stock", () => {
    expect(
      machine(
        {
          products: [
            {
              name: "Coca-Cola",
              price: 80,
              stock: 9,
            },
          ],
        },
        {
          type: refillStockOfBeverages.type,
          payload: { slot: 0, quantity: 10 },
        }
      )
    ).toEqual({
      products: [
        {
          name: "Coca-Cola",
          price: 80,
          stock: 19,
        },
      ],
    });
  });
  it("refillStockOfCoins of 10c with 10u should reflect in coin stack", () => {
    expect(
      machine(
        {
          coinStack: {
            5: 0,
            10: 40,
            20: 0,
            50: 51,
            100: 15,
            200: 2,
          },
        },
        {
          type: refillStockOfCoins.type,
          payload: { slot: 10, quantity: 10 },
        }
      )
    ).toEqual({
      coinStack: {
        5: 0,
        10: 50,
        20: 0,
        50: 51,
        100: 15,
        200: 2,
      },
    });
  });
});
