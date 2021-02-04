const person = {
  firstname: "phil",
  age: 31,
  hobbies: ["swimming", "development"],
  greet() {
    console.log("hi my name is" + this.firstname);
  },
};

// dot notation
console.log(person.firstname);

//add property
person.lastname = "loeffler";

//delete prop...didnt know about this one ha
delete person.age;

//calling the function
person.greet();

// unordered key values paies
// element access via kia (property name)
// not iterable
// keys are unique, values are not
// keys have to be strings number or symbols- keys cannot be object or array
