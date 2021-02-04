// ordered key value pair
// element access via key
// are iterable
// keys are unique, values are not
// maps are meant to be pure data storages, optimized for data access

const resultData = new Map();
resultData.set("average", 153);
resultData.set("lastResult, null");

const germany = { name: "germany", population: 82 };

//in maps, you can set objects as keys. you cant do this with normal object
resultData.set(germany, 0.89);

//every key value pair is out put as an array
for (const el of resultData) {
  console.log(el);
}

// need to do this to get info
// the regular dot notation will bring back undefinded
console.log(result.get("average"));

//would delete key
resultData.delete("germany");

//objects vs map

// objects are versatile consturct and data storage, must use if you want to add extra functionality

// maps focused on data storage and access, can simpliy and improve data access compared to objects
