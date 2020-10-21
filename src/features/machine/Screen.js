import React from "react";
import { useSelector } from "react-redux";
import { Pane, Code } from "evergreen-ui";

export const Screen = () => {
  const userMoney = useSelector(state => state.machine.userMoney);
  return (
    <Pane display="flex" justifyContent="flex-end" marginBottom={16}>
      <Code paddingX={16} paddingY={8} minWidth={80} textAlign="right">
        {userMoney.toFixed(2)}
      </Code>
    </Pane>
  );
};
