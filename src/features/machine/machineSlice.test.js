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
            0.05: 1,
          },
        },
        {
          type: insertedCoin.type,
          payload: 0.05,
        }
      )
    ).toEqual({ coinStack: { 0.05: 2 }, userMoney: 0.05 });
    expect(
      machine(
        {
          userMoney: 0,
          coinStack: {
            1: 0,
          },
        },
        {
          type: insertedCoin.type,
          payload: 1,
        }
      )
    ).toEqual({ coinStack: { 1: 1 }, userMoney: 1 });
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
          userMoney: 1,
          returnedChange: [],
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
      returnedChange: [0.2],
      lastReturnedProduct: "Coca-Cola",
      products: [
        {
          name: "Coca-Cola",
          price: 0.8,
          stock: 9,
        },
      ],
    });
  });
});
