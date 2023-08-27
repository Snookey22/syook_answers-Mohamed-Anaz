let n = parseInt(prompt("Enter a number:"));
let s = n.toString(2);
let list = [];
let relist = [];
let count = 1;
let f = true;

for (let i = s.length - 1; i >= 0; i--) {
  if (s.charAt(i) === '1') {
    if (count === 1) {
      list.push("pop");
      relist.unshift("pop");
    } else if (count === 2) {
      list.push("double rap");
      relist.unshift("double rap");
    } else if (count === 3) {
      list.push("hide your mints");
      relist.unshift("hide your mints");
    } else if (count === 4) {
      list.push("fall");
      relist.unshift("fall");
    } else {
      f = false;
    }
  }
  count++;
}

if (f) {
  console.log(list);
} else {
  console.log(relist);
}
