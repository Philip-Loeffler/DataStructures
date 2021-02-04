//custom data structure
//you dont work with indexes as in an array, every element in the list has a pointer to the
//to the next element in line. so every elements knows about the next element in line.
//but they dont know about the element behind it.
//here node = element in linkedist
//head  is first
//tail  last
//list know the first and last element, list is implicity stored because the nodes only know about
// about what is in front of them

class LinkedList {
  constructor() {
    this.head = null; // first element of list
    this.tail = null; // last element of list
  }

  append(value) {
    const newNode = { value: value, next: null }; //this is an object because we need to store a pointer
    if (this.tail) {
      // only update if we have a tail
      this.tail.next = newNode; // reach out to old tail
    }
    this.tail = newNode; // replace tail with new node
    if (!this.head) {
      this.head = newNode;
    }
  }

  //go through all nodes and return array
  //allows us to look into our linkedList
  toArray() {
    const elements = [];
    let curNode = this.head;
    while (cureNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;
    while (curNode.next) {
      //this while loop is saying, as long as there is a current node continue looping
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next; // gives access to delete the next node
      } else {
        cureNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  insertAfter(value, afterValue) {
    const exisitingNode = this.find(afterValue);
    if (exisitingNode) {
      const newNode = { value: value, next: exisitingNode.next };
      exisitingNode.next = node;
    }
  }

  find(value) {
    if (!this.head) {
      return;
    }
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }
  }
}

const linkedList1 = new linkedList1();
linkedList1.appen(1);
linkedList1.append("hello there");
linkedList1.append("Phil");

linkedList1.prepend("first value");
linkedList1.delete("Phil");
linkedList1.find("hello there");
linkedList1.insertAfter("new value 1", 1);
console.log(linkedList1.toArray());

//why use a linkedList
//historically the main reason is for memory management
//js has dynamic arrays so memory isnt really an issue with js
//linkedlist can be useful if you do a lot of inertions at the beginning of the lst, ll's are faster than arrays at doing this.
