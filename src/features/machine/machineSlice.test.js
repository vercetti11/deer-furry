import { initialState } from "../../initial data/initialState";
import machine, { insertedCoin, selectedAProduct } from "./machineSlice";

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
    ); //TODO: toEqual is missing;
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
});
