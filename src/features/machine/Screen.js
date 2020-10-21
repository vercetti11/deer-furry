import React from "react";
import { useSelector } from "react-redux";

export const Screen = () => {
  const userMoney = useSelector(state => state.machine.userMoney);
  console.log(userMoney);
  return <p>{userMoney}</p>;
};
