import { Pane } from "evergreen-ui";
import React from "react";

export function MachineBottomLayout({ children }) {
  return (
    <Pane
      display="flex"
      alignItems="center"
      marginTop={24}
      justifyContent="space-around"
    >
      {children}
    </Pane>
  );
}
