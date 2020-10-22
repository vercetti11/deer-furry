import { Button, KeyIcon } from "evergreen-ui";
import React, { useState } from "react";

export function Mantainance() {
  const [lock, setLock] = useState(true);
  const handleToggleLock = () => setLock(!lock);
  return (
    <Button display="flex" justifyContent="center" marginBottom={32}>
      <KeyIcon onClick={handleToggleLock} />
    </Button>
  );
}
