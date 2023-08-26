const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  const a = parseInt(input);
  let sum = 0;

  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }

  if (sum === a) {
    console.log('Perfect number');
  } else if (sum > a) {
    console.log('Abundant number');
  } else {
    console.log('Deficient number');
  }

  rl.close();
});