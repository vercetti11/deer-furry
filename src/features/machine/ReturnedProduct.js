import React from "react";
import { Pane, Badge } from "evergreen-ui";
import { useSelector } from "react-redux";
import { selectLastReturnedProduct } from "./machineSlice";

export function ReturnedProduct() {
  const lastReturnedProduct = useSelector(selectLastReturnedProduct);

  return (
    <Pane marginY="auto" display="flex" justifyContent="center">
      <Pane
        border="default"
        height={40}
        width={160}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {lastReturnedProduct && (
          <Badge data-testid="returned-product" cursor="pointer" color="green">
            {lastReturnedProduct}
          </Badge>
        )}
      </Pane>
    </Pane>
  );
}
