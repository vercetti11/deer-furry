import { Button, KeyIcon } from "evergreen-ui";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export function OpenMantainance() {
  const link = useLocation().pathname === "/" ? "/mantainance" : "/";
  return (
    <Link to={link}>
      <Button
        display="flex"
        justifyContent="center"
        marginBottom={32}
        width="100%"
      >
        <KeyIcon />
      </Button>
    </Link>
  );
}
