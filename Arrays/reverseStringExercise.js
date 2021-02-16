let name = "check me out";
let array = [];
let reverseWord = "";

for (let i = 0; i < name.length; i++) {
  array.push(name[i]);
}

for (let i = 0; i < name.length; i++) {
  reverseWord = reverseWord + array.pop();
}

function reverse(str) {
  //check input, cant always assume that a user is passing a string
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not a string";
  }

  const backwards = [];
  //how many items in string
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  //Adds all the elements of an array separated by the specified separator string.
  return backwards.join("");
}

reverse("hey there");

//explanation
//total items = str.length - 1 is starting us at the back of the array
//check to see if the input is equal to zero, its not so push the last item into array
//decrement, then check again, keep pushing last item into array

//built in methods to do this in js

function reverse2(str) {
  return str.split("").reverse().join("");
}

reverse2("hey there");

//es6
const reverse3 = (str) => str.split("").reverse().join("");

//same thing with spread operator
const reverse3 = (str) => [...str].reverse().join("");
