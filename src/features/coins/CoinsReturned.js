import React from "react";
import { Pane, Pill } from "evergreen-ui";
import { useSelector } from "react-redux";
import { returnedChange } from "./coinSlice";

export function CoinsReturned() {
  const change = useSelector(returnedChange);
  return (
    <Pane
      height={24}
      width={32}
      backgroundColor="gainsboro"
      borderRadius={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingTop={4}
      cursor="pointer"
    >
      {change.map((coin, index) => (
        <Pill
          key={index}
          color="green"
          isSolid
          width="fit-content"
          marginBottom={4}
          data-testid="returned-change"
        >
          {coin >= 100 ? coin / 100 + "€" : coin + "c"}
        </Pill>
      ))}
    </Pane>
  );
}
