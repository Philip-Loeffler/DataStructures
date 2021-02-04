//stacks - think of a stack of books as an example.
//functions: push, pop, peek, length.

let letters = [];
let word = "racecar";
let reverseWord = "";
// palindrome
//loops over word and puts it in an array
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop off the stack in reverse order
//loops once, pops the last element in the array off and adds it to reverse word.
for (let i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
  //  reverseWord = reverseWord + letters.pop();
}

if (reverseWord === word) {
  console.log(word + "is a palindrom");
} else {
  console.log(word + "is not a palindrome");
}
