import { configureStore } from "@reduxjs/toolkit";
import machineReducer from "../features/machine/machineSlice";

export default configureStore({
  reducer: {
    machine: machineReducer,
  },
});
