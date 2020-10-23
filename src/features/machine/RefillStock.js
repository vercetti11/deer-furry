import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts, refillStockOfBeverages } from "./machineSlice";
import { Button, Pane, TextInputField, Text, Badge } from "evergreen-ui";

const Stock = ({ name, stock, slotIndex, sumbitToParent }) => {
  const [quantity, setQuantity] = useState("");
  const [validationMessage, setValidationMessage] = useState();
  const handleSumbit = e => {
    e.preventDefault();
    if (quantity) {
      sumbitToParent(parseInt(quantity));
      setQuantity("");
      setValidationMessage();
      return;
    }
    setValidationMessage("This field is required");
  };
  return (
    <Pane>
      <Badge marginLeft={-4} marginBottom={4}>
        Slot {slotIndex + 1}
      </Badge>
      <form onSubmit={handleSumbit}>
        <TextInputField
          value={quantity}
          label={`${name} (${stock}) in stock`}
          onChange={({ target }) => setQuantity(target.value)}
          isInvalid={false}
          description="Quantity to refill slot:"
          placeholder="Insert Number"
          marginBottom={8}
          type="number"
          pattern="[0-9]*"
          validationMessage={validationMessage}
        />
        <Button>
          <Text fontSize={11}>Refill {name}</Text>
        </Button>
      </form>
    </Pane>
  );
};

export function RefillStock() {
  const dispatch = useDispatch();
  const stocks = useSelector(selectAllProducts);
  const handleRefillStock = (quantity, index) => {
    dispatch(refillStockOfBeverages({ quantity, slot: index }));
  };
  return (
    <Pane
      display="grid"
      gridTemplateColumns="1fr 1fr"
      gridColumnGap={16}
      gridRowGap={24}
    >
      {stocks.map((product, slotIndex) => {
        if (!product.name) return null;
        return (
          <Stock
            key={product.name}
            stock={product.stock}
            slotIndex={slotIndex}
            name={product.name}
            sumbitToParent={quantity => handleRefillStock(quantity, slotIndex)}
          />
        );
      })}
    </Pane>
  );
}
