const coinStack = {
  5: 0,
  10: 2,
  20: 0,
  50: 0,
  100: 0,
  200: 2,
};

const sortedStacks = Object.entries(coinStack)
  .sort((a, b) => b[0] - a[0])
  .map(arr => [parseInt([arr[0]]), arr[1]]);

const stackHasCoins = stack => stack[1] > 0;

function giveChangefor(amount) {
  let change = [];
  sortedStacks.forEach(stack => {
    const coin = stack[0];
    while (amount >= coin && coinStack[coin] > 0) {
      amount -= coin;
      change = [...change, coin];
      coinStack[coin]--;
    }
  });
  return change;
}

console.log(giveChangefor(100));
console.log(coinStack);
