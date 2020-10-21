import { Code, Pane } from "evergreen-ui";
import React from "react";
import { useSelector } from "react-redux";
import { selectError, selectUserMoney } from "./machineSlice";

export const Screen = () => {
  const userMoney = useSelector(selectUserMoney);
  const error = useSelector(selectError);
  const screenMessage = error ? error : userMoney.toFixed(2);

  return (
    <Pane display="flex" justifyContent="flex-end" marginBottom={16}>
      <Code paddingX={16} paddingY={8} minWidth={80} textAlign="right">
        {screenMessage}
      </Code>
    </Pane>
  );
};
