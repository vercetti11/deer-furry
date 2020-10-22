const coinStack = {
  5: 0,
  10: 40,
  20: 0,
  50: 51,
  100: 15,
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
    if (stackHasCoins(stack)) {
      while (amount >= coin) {
        amount -= coin;
        change = [...change, coin];
      }
    }
  });
  return change;
}

console.log(giveChangefor(20));
