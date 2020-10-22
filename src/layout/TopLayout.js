import { Pane } from "evergreen-ui";
import React from "react";

export function TopLayout({ children }) {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginBottom={32}
    >
      {children}
    </Pane>
  );
}
