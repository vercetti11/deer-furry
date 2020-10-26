import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import machineReducer from "./features/machine/machineSlice";

const store = configureStore({
  reducer: {
    machine: machineReducer,
  },
});

test("should handle a Coca-Cola after the user has inserted 1€", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  userEvent.click(screen.getByText("Insert Coin"));
  userEvent.click(screen.getByText("2.00 €"));
  userEvent.click(screen.getByText("Coca-Cola"));
  expect(screen.getAllByTestId("returned-product"));
  expect(screen.getByText("1€"));
});
