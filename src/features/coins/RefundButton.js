import { Button, Text } from "evergreen-ui";
import React from "react";
import { useDispatch } from "react-redux";
import { refundedUserMoney } from "./coinSlice";

export function RefundButton() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(refundedUserMoney());
  };
  return (
    <Button onClick={handleOnClick} borderRadius={999}>
      <Text>refund</Text>
    </Button>
  );
}
