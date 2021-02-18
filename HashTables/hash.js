//user object
let user = {
  age: 54,
  name: "phil",
  magic: true,
  scream: function () {
    console.log("ahhh");
  },
};

user.age; // 54 0(1)

//adding new property
user.spell = "abra kadabra"; //0(1)
user.scream(); //0(1)

//allows you to save any data type as a key. maintains insertion order as well
const a = new Map();

//only stores keys, no values
const b = new Set();
