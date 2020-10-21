import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../app/store";
import { Screen } from "./Screen";
import { CoinsInput } from "./CoinsInput";

it("should handle inserting a coin and displaying the value in screen", () => {
  render(
    <Provider store={store}>
      <Screen />
      <CoinsInput />
    </Provider>
  );
  userEvent.click(screen.getByText("Insert Coin"));
  userEvent.click(screen.getByText("1.00 €"));
  expect(screen.getByText("1.00"));
});
