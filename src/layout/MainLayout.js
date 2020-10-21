import React from "react";
import { Pane } from "evergreen-ui";

export default function ({ children }) {
  return (
    <Pane maxWidth={300} margin="auto" marginTop={24}>
      <Pane display="flex" flexDirection="column">
        {children}
      </Pane>
    </Pane>
  );
}
