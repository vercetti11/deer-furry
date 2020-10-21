import { initialState } from "../../initial data/initialState";
import machine from "./machineSlice";

describe("machine reducer", () => {
  it("should handle initial state", () => {
    expect(machine(undefined, initialState)).toEqual(initialState);
  });
});
