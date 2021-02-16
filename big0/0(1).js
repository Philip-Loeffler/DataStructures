// 0(1) -- constant time. only doing one thing. doesnt matter size,

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxs(boxes) {
  console.log(boxes[0]); //0(1)
  console.log(boxes[1]); // 0(1)
}

logFirstTwoBoxs(Boxes); //this is 0(2) because it is running two operations
