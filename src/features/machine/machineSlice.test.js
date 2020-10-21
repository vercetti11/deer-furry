import { initialState } from "../../initial data/initialState";
import machine, { insertedCoin } from "./machineSlice";

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
});
