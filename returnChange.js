const coinStack = {
  5: 3,
  10: 40,
  20: 50,
  50: 51,
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
      }
    }
  }
  //const sumReturned = change.reduce((coin, sum) => coin + sum);
  //console.log(sumReturned, change);

  return change;
}

console.log(returnChange(20));
