import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts, refillStockOfBeverages } from "./machineSlice";
import { Button, Pane, TextInputField, Pill } from "evergreen-ui";

const Stock = ({ name, stock, index, sumbitToParent }) => {
  const [ammountToRefill, setAmmountToRefill] = useState();
  const [validationMessage, setValidationMessage] = useState();
  const handleSumbit = e => {
    e.preventDefault();
    if (ammountToRefill) {
      sumbitToParent();
      return;
    }
    setValidationMessage("This field is required");
  };
  return (
    <Pane>
      <Pill>{stock}</Pill>
      <form onSubmit={handleSumbit}>
        <TextInputField
          label={name}
          onChange={e => setAmmountToRefill(e.target.value)}
          isInvalid={false}
          description="Quantity to refill slot."
          placeholder="Insert Number"
          marginBottom={8}
          type="number"
          pattern="[0-9]*"
          validationMessage={validationMessage}
        />
        <Button>Refill</Button>
      </form>
    </Pane>
  );
};

export function RefillStock() {
  const stocks = useSelector(selectAllProducts);
  const handleRefillStock = () => {
    console.log("parent wired");
  };
  return (
    <Pane
      display="grid"
      gridTemplateColumns="1fr 1fr"
      gridColumnGap={8}
      gridRowGap={16}
    >
      {stocks.map((product, index) => {
        if (!product.name) return null;
        return (
          <Stock
            key={product.name}
            index={index}
            stock={product.stock}
            name={product.name}
            sumbitToParent={handleRefillStock}
          />
        );
      })}
    </Pane>
  );
}
