const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  const lines = input.trim().split('\n');
  const [k, l, m, n, total] = lines[0].split(' ').map(Number);
  const arr = [];

  for (let i = k; i <= total; i += k) {
    let f = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        f = false;
      }
    }
    if (f) {
      arr.push(i);
    }
  }

  for (let i = l; i <= total; i += l) {
    let f = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        f = false;
      }
    }
    if (f) {
      arr.push(i);
    }
  }

  for (let i = m; i <= total; i += m) {
    let f = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        f = false;
      }
    }
    if (f) {
      arr.push(i);
    }
  }

  for (let i = n; i <= total; i += n) {
    let f = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        f = false;
      }
    }
    if (f) {
      arr.push(i);
    }
  }

  console.log(arr.length);
  
  rl.close();
});
