function makeChange(amount) {
  //const coins = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];
  const coins = [0.01, 0.02];

  if (amount < 0) return 0;
  if (amount === 0) return 1;

  let count = 0;

  var reduceAmount = function (amount, index) {
    console.log('reduce amount called', amount)
    if (index < 0) return 0;
    if (amount === 0) {
      count++;
      console.log('counter', count)
    }
    reduceAmount((amount - coins[index]).toFixed(2), index - 1)
  };
  reduceAmount(amount, coins.length - 1)
  return count;
}

makeChange(0.05);