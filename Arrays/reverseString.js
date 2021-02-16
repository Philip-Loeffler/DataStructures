let name = "check me out";
let array = [];
let reverseWord = "";

for (let i = 0; i < name.length; i++) {
  array.push(name[i]);
}

for (let i = 0; i < name.length; i++) {
  reverseWord = reverseWord + array.pop();
}

console.log(reverseWord);
