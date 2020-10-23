import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";

//TODO make test indepentend on initial test
// As a mantainer-user I want to refill slot 1
// I see it has N amount in stock and I add an extra of M units
// I expect to see te stock go from N to N + M
test("should handle mantainante rutine refilling product stocks", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  userEvent.click(screen.getByText("Open Mantainance"));
  userEvent.type(screen.getByLabelText("Coca-Cola (10) in stock"), "10");
  userEvent.click(screen.getByText("Refill Coca-Cola"));
  expect(screen.getByText("Coca-Cola (20) in stock"));
});
