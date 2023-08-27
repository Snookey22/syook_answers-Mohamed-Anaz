const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ',  (input) => {
  let result = '';
  let i = 0;
  while (i < input.length) {
    let count = 1;
    while (i + 1 < input.length && input.charAt(i) === input.charAt(i + 1)) {
      i++;
      count++;
    }
    result += count + input.charAt(i);
    i++;
  }
  console.log(result);
  rl.close();
});
