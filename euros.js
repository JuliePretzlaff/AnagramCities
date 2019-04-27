function makeChange(amount) {
  if (amount < 0) return 0;
  if (amount === 0) return 1;

  let count = 0;
  const coins = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];

  for (let i = amount; i >= 0; i = (i - coins[7]).toFixed(2)) {
    console.log('i', i)
    // 2
    for (let j = i; j >= 0; j = (j - coins[6]).toFixed(2)) {
      console.log('j', j)
      // 1
      for (let k = j; k >= 0; k = (k - coins[5]).toFixed(2)) {
        console.log('k', k)
        // 0.5
        for (let m = k; m >= 0; m = (m - coins[4]).toFixed(2)) {
          console.log('m', m)
          // 0.2
          for (let n = m; n >= 0; n = (n - coins[3]).toFixed(2)) {
            console.log('n', n)
            // 0.1
            for (let o = n; o >= 0; o = (o - coins[2]).toFixed(2)) {
              console.log('o', o)
              // 0.05
              for (let p = o; p >= 0; p = (p - coins[1]).toFixed(2)) {
                console.log('p', p)
                // 0.02
                for (let q = p; q >= 0; q = (q - coins[0]).toFixed(2)) {
                  console.log('q', q)
                  // 0.01
                  if (q === '0.00') count++;
                }
              }
            }
          }
        }
      }
    }
  }
  return count;
}

console.log(makeChange(0.02));
