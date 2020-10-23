import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts, refillStockOfBeverages } from "./machineSlice";
import { Button, Pane, TextInputField, Pill } from "evergreen-ui";

const Stock = ({ name, stock }) => {
  return (
    <Pane>
      <Pill>{stock}</Pill>
      <TextInputField
        label={name}
        description="Quantity to refill slot."
        placeholder="Insert Number"
        marginBottom={8}
        type="number"
        pattern="[0-9]*"
      />
      <Button>Refill</Button>
    </Pane>
  );
};

export function RefillStock() {
  const stocks = useSelector(selectAllProducts);
  return (
    <Pane
      display="grid"
      gridTemplateColumns="1fr 1fr"
      gridColumnGap={8}
      gridRowGap={16}
    >
      {stocks.map(product => {
        if (!product.name) return null;
        return (
          <Stock key={product.name} stock={product.stock} name={product.name} />
        );
      })}
    </Pane>
  );
}
