//duplicate items are not allowed, unlike arrays.
//insertion order is not stored, memorized
//eleement axess and extraction via method
//are iterable
//size adjusts dynamically
//deleting and finding elements is faster

//can have any type of data in sets
const ids = new Set();
ids.add("abc");
ids.add(1);
ids.add("bb3");

for (const el of ids) {
  console.log(el);
}

//you do this to check for values, you dont use an index
//the console will make it look like they have specific positions but they do not.
console.log(ids.has("abc"));
ids.delete("bbc");

//arrays vs sets
// arrays use if order matters, and also go to list
// sets use if the order doesnt matter, they provide better performance because of simply data access
