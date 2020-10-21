import React from "react";
import { useSelector } from "react-redux";
import { Popover, Menu, Pane, Button, Position, AddIcon } from "evergreen-ui";

export function CoinsInput() {
  const coinsItCanInsert = useSelector(state =>
    Object.keys(state.machine.coinStack).map(coin => parseFloat(coin))
  );
  return (
    <Popover
      position={Position.BOTTOM_RIGHT}
      content={
        <Menu>
          <Menu.Group>
            {coinsItCanInsert.map(coin => (
              <Menu.Item key={coin} icon={AddIcon} onSelect={() => {}}>
                {coin.toFixed(2) + " €"}
              </Menu.Item>
            ))}
          </Menu.Group>
        </Menu>
      }
    >
      <Pane display="flex" justifyContent="flex-end" marginBottom={32}>
        <Button fontSize={16}>Insert Coin</Button>
      </Pane>
    </Popover>
  );
}
