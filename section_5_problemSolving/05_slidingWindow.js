document.addEventListener("DOMContentLoaded", () => {
  const conf = document.getElementById("confirmation")
  conf.innerText = "scripts loaded"
});

/*
===============
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maxiumum sum of n consecutive elements in the array.
===============
*/

// maxSubarraySum([1,2,3,4,5,6,7], 2) // 13

//FIRST IMPLEMENTATION
/*
___ declare variable result that wil hold our answer. This will be the return value.
  ___ as we traverse the array, compare the current sum with the current value of result
  ___ if currentSum > result, set result = currentSum

___ Construct a loop that starts at element 0 (the starting point) and adds successive n elements. At completion of the loop, increment start.
*/

function maxSubarraySumV1(array, n){
  if (array.length < n) return undefined

  let result = 0;
  
  for (let i=0; i<array.length-n+1; i++){
    let testArray = [];
    
    let j = i
    while (testArray.length < n){
      testArray.push(array[j])
      j++
    }

    let testArraySum = testArray.reduce((accum, el) => accum + el, 0)

    result = testArraySum > result ? testArraySum : result
    console.log(testArray)
  }

  return result
}