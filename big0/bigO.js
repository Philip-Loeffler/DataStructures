const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel"];

//create an array of 100 nenos. pretty neat.
const large = new array(100).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found nemo");
    }
  }
  let t1 = performance.now();
  //performance.now is how we can test our performance
  //the time in which this takes is subjective based on many factors. performance, cpu, where the code is running.
  console.log("call to find nemo took" + (t1 - t0));
}

findNemo(nemo); //0(n) -- Linear time. the big 0 depends on the number of inputs

//big o notation is the language in which we use to talk about how long an algo takes to run. regardless of computers differences
