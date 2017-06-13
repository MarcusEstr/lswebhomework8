/*  For today's homework your job is to write functions
 *  that make the following invocations work.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  var greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */


// Write a function called firstItem that passes the first item of the given array to the callback function

var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

function firstItem(arr, cb){
  cb(arr[0]);
}

firstItem(foods, (firstItem) => {
  console.log('The first item is ' + firstItem);
});

// Write a function called getLength that passes the length of the array into the callback
function getLength(arr, cb){
	cb(arr.length);
}

getLength(foods, (length) => {
  console.log('The length of the array is ' + length);
});

// Write a function called last which passes the last item of the array into the callback
function last(arr, cb){
	cb(arr[arr.length-1])
}

last(foods, (lastItem) => {
  console.log('The last item in the array is ' + lastItem);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback
function sumNums(a, b, cb){
	sum = a + b;
  cb(sum);
}

sumNums(5, 10, (sum) => {
  console.log('The sum is ' + sum);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
function multiplyNums(a, b, cb){
	product = a * b;
  cb(product);
}

multiplyNums(5, 10, (product) => {
  console.log('The product is ' + product);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
function contains(arr, foodname, cb){
  var i = arr.length;
  trueOrFalse = false;
      while (i--) {
          if (arr[i] == foodname) {
              trueOrFalse = true;
              cb(true);
              break;
          }
      }
      if (trueOrFalse == false) {
      	cb(false);
      }
}

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
function removeDuplicates(arr, cb) {
//Using properties of Objects
//Need a new array to store our results rather than modifying original
    var obj = {};
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    } //Keys are object's properties. So it will push array elements into existing keys, when possible.
    for (var key in obj) {
        newArray.push(key);
    }
    cb(newArray);
}

removeDuplicates(foods, (uniqueFoods) => {
  console.log('foods with duplicates removed: ' + uniqueFoods);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

index = 0;
function forEach(arr, cb) {
	for (var i = 0; i < arr.length; i++) {
  	value = arr[i]; 
    index += 1;
    cb(value, index);
  }
}

forEach(foods, (value, index) => {
  console.log(`${value} is at index ` + index);
});
