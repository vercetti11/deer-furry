const coinStack = {
  5: 1,
  10: 1,
  20: 0,
  50: 1,
  100: 15,
  200: 0,
};

// O(n*m) | O(n*m) space
// where n is the value of target and m the stacks of coins
function returnChange(targetChange) {
  let change = [];
  while (targetChange > 0) {
    if (!coinStack.hasOwnProperty(targetChange)) {
      return [targetChange];
    }
    for (let coin in coinStack) {
      if (coin <= targetChange && coinStack[coin] > 1) {
        coinStack[coin]--;
        targetChange = targetChange - coin;
        change = [...change, coin / 100];
        break;
      }
    }
  }
  //const sumReturned = change.reduce((coin, sum) => coin + sum);
  //console.log(sumReturned, change);

  return change;
}

console.log(0.5, returnChange(50));
