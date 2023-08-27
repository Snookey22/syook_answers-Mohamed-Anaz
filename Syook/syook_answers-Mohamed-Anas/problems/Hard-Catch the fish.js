let k = 5;
let l = 2;
let m = 3;
let n = 4;
let total = 24;
let arr = [];

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
