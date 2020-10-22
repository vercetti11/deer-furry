import { initialState } from "../../initial data/initialState";
import machine, { insertedCoin, selectedAProduct } from "./machineSlice";

describe("machine reducer", () => {
  it("should handle initial state", () => {
    expect(machine(undefined, initialState)).toEqual(initialState);
  });
  it("should handle insertedCoin", () => {
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
    ); //TODO: toEqual;
  });
  it("selectedAProduct should return change", () => {
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
    });
  });
});
