//building an array,

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    //data is an object, at 0 key we are adding in the 'item'
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItem(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
newArray.push("hi");
//myArray {length: 1, data: {0: 'hi'}}
newArray.push("you");
//myArray {length: 1, data: {0: 'hi', 1: 'you}}

newArray.pop();
//myArray {length: 1, data: {0: 'hi'}}

//a new instance of myarray object as 'new array'
const newArray = new MyArray();
console.log(newArray);
console.log(newArray.get(9)); // nothing will happen
