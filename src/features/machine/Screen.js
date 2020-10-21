import { Code, Pane } from "evergreen-ui";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearedErrorMessage,
  selectError,
  selectUserMoney,
} from "./machineSlice";

export const Screen = () => {
  const dispatch = useDispatch();
  const userMoney = useSelector(selectUserMoney);
  const error = useSelector(selectError);
  const screenMessage = error ? error : userMoney.toFixed(2);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearedErrorMessage());
    }, 1000);
  }, [error, dispatch]);

  return (
    <Pane display="flex" justifyContent="flex-end" marginBottom={16}>
      <Code paddingX={16} paddingY={8} minWidth={80} textAlign="right">
        {screenMessage}
      </Code>
    </Pane>
  );
};
