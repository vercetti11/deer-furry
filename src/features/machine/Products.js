import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedAProduct } from "./machineSlice";
import { selectAllProducts } from "./machineSlice";
import { Button } from "evergreen-ui";

export function Products() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const handleClick = buttonIndex => {
    dispatch(selectedAProduct(buttonIndex));
  };

  return products.map((product, buttonIndex) => (
    <Button
      onClick={() => handleClick(buttonIndex)}
      key={buttonIndex}
      marginBottom={8}
    >
      {product.name}
    </Button>
  ));
}
