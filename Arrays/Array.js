const strings = ["a", "b", "c", "d"];
//4x4 = 16 bytes of storage

//go to array call strings, grab 3rd item from where array is stored in memory
strings[2];

//push = store at end of array, also an 0(1) operation
strings.push("e");

//pop = remove last item of array 0(1)
strings.pop();

//unshift = this will add x to the beginning of the array
strings.shift("x"); //0(n)

//splice = go to index two where b is initial, add alien, and shift things over
strings.splice(2, 0, "alien"); //0(n)
