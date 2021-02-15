let word = "racecar";
let letters = [];
let reverseWord = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  reverseWord = reverseWord + letters.pop();
}

if (reverseWord === word) {
  console.log(reverseWord + "is a palindrome");
} else {
  console.log(reverseWord + "is not a palindromeß");
}

let arrayOne = [1, 4, 5, 8];
let arrayTwo = [1, 3, 4, 4];
