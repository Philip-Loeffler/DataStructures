function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  //check for input

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}
//explanation
//the zero index of what is being passed in, is being pushed into merged array.
//then array1Item is being set to the first index in the input array, then we increment index to two
//so the next loop, does the if check, then takes the first index, pushes it into merged array
//then sets next element in arrayitem to the input...ect ect
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
