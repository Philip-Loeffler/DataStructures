//Given an array of integers, find if the array contains any duplicates.
//Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

function checkForDuplicates(num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < i; ++j) {
      if (num[j] == num[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

//explanation
// [1,2,3,1]
// outter loop is going to run one time, checks the length of the array against i
// inner loop then loops to completion,
// then outter loop increments and goes again, ect ect.
