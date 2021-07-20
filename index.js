//look up

//strings or arrays

//objects





/* Return the First Element in an Array
Create a function that takes an array containing only numbers and return the first element. */

// Examples

//getFirstValue([1, 2, 3]) ➞ 1

//getFirstValue([80, 5, 100]) ➞ 80

//getFirstValue([-500, 0, 50]) ➞ -500



/* Notes
The first element in an array always has an index of 0. */


// make a return statement 
//arr[0]


function getFirstValue(arr) {
	return arr[0];
  // Constant time 
  
}

//indexOf()
function getIndexOfFive(arr){
  for(let i=0; i<arr.length; i++){
    if(arr[i]===5) return i;
  }
// Linear time

}

//x = 6, constant
//y = 6x, linear
//y = x^2, exponential

console.log(getFirstValue([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5]), " should be ", 1);

console.log(getIndexOfFive([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5]), " should be ", 1);


console.log(getFirstValue([80, 5, 100]), " should be ", 80);
console.log(getIndexOfFive([80, 5, 100]), 1)

console.log(getFirstValue([-500, 0, 5]), " should be ", -500);
console.log(getIndexOfFive([-500, 0, 5]), 2)