import { Heading } from "evergreen-ui";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { selectCoinStack, refillStockOfCoins } from "./machineSlice";
import { Pane, TextInputField, Button, Text } from "evergreen-ui";

const CoinStack = ({ coin, coinCuantity, sumbitToParent }) => {
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
  const coinFormat = coin => {
    return coin >= 100 ? coin / 100 + "€" : coin + "c";
  };
  return (
    <Pane>
      <form onSubmit={handleSumbit}>
        <TextInputField
          value={quantity}
          label={`${coinFormat(coin)} (${coinCuantity}) in stock`}
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
          <Text fontSize={11}>Refill {coin}</Text>
        </Button>
      </form>
    </Pane>
  );
};
export function RefillCoinStack() {
  const dispatch = useDispatch();
  const stocks = useSelector(selectCoinStack);
  const handleRefillStock = (quantity, coinStack) => {
    console.log(coinStack, quantity);
    dispatch(refillStockOfCoins({ quantity, slot: coinStack }));
  };
  return (
    <>
      <Heading size={700} marginTop={40} marginBottom={16}>
        Refill Coin Stack
      </Heading>
      <Pane
        display="grid"
        gridTemplateColumns="1fr 1fr"
        gridColumnGap={16}
        gridRowGap={24}
      >
        {Object.entries(stocks).map(stock => {
          const coinStack = stock[0];
          const coinCuantity = stock[1];
          return (
            <CoinStack
              key={coinStack}
              coin={coinStack}
              coinCuantity={coinCuantity}
              sumbitToParent={quantity =>
                handleRefillStock(quantity, coinStack)
              }
            />
          );
        })}
      </Pane>
    </>
  );
}
