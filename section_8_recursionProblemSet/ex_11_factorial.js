/*
=========================
Write a function factorial() which accepts a number and returns the factorial of that number. 
A factorial is the product of an integer and all the integers below it; e.g., factorial four, 4!, is equal to 24, because 4 * 3 * 2 * 1 equals 24. 
factorial zero (0!) is always 1.
=========================
*/

function factorial(num){
  if (num === 0) return 1
  return num * factorial(num-1)
}

/*
What's happening: 

4 * factorial(3)        //4 * 6 => 24
  3 * factorial(2)      //3 * 2 => 6
    2 * factorial(1)    //2 * 1 => 2
      1 * factorial(0)  //1 * 1 => 1
        1               //=> 1

*/

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040

