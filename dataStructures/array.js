const names = ["max", "manu", "julie"];
//iterate over array
for (const el of names) {
  console.log(el);
}
names.push("julie");
//if we want to find julie, but this function is goign to run through every item in thr array
// so it would need to go through all the elements in the array, finding elements can be performance intensi
const julieIndex = name.findIndex((element) => element === "julie");

//way to remove element in arry and return new array
// can also be performance intensive because it is moving elements around
names.splice(2, 1);
