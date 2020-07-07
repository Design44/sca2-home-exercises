const assert = require("assert");
const { notEqual } = require("assert");

// Feel free to look things up online!

const reverse = function(str) {
  // TODO - write a function which reverses the string
  let strList = str.split("");
  let strListReverse = strList.reverse("");
  let strReverse = strListReverse.join("");
  return strReverse
}

const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  if (num < 0) {
   return -1;
  }
  else if (num == 0) {
    return 1;
  }
  else {
    return (num * factorial(num - 1))
  }
}

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  let array1 = str.split("");
  let beginning = array1.slice(0, (num - 1));
  let end = array1.slice((num - 1), array1.length);
  let final = (end.concat(beginning)).join("");
  return final
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ")
}

const uniqueOnes = function(ary) {
  // TODO - write a function which returns the inputted array without duplicate elements
  const set1 = new Set(ary);
  return [...set1]
}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  /*if (arr1.length !== arr2.length) {
    return -1
  }
  else {
    for(let i = 0; i < arr1.length; i++) {
      if (i == 0) {
        var arr3 = Array(Array(arr1[i], arr2[i]))
      }
      else {
        var arr3 = arr3.concat(Array(Array(arr1[i], arr2[i])))
      }
    }
  }
  return arr3
}*/
  if (arr1.length != arr2.length) {
    return -1
  }
  let arr = []
  for (let i = 0; i < arr1.length; i++) {
    arr.push([arr1[i], arr2[i]]);
  }
  return arr;
} 

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
  /*for(let i = 0; i < arr.length; i++) {
    if (i == 0) {
      var arr1 = Array(arr[i][0])
    }
    else {
      var arr1 = arr1.concat(Array(arr[i][0]))
    }
  };
  for(let i = 0; i < arr.length; i++) {
    if (i == 0) {
      var arr2 = Array(arr[i][1])
    }
    else {
      var arr2 = arr2.concat(Array(arr[i][1]))
    }
  };
  return Array(arr1, arr2)
}*/
  let arr1 = []
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0])
    arr2.push(arr[i][1])
  }
  return [arr1, arr2]
}

// Write tests here:
console.log(reverse("Hello"))
console.log(factorial(5))
console.log(shiftRight("Hello", 3))
console.log(tokenize("Once upon a time"))
console.log(uniqueOnes([1, 2, 3, 2, 4, 5, 1, 6, 6, 7]))
console.log(zip([1, 2], [1, 2, 3]))
console.log(zip([1, 2, 3, 4], ["a", "b", "c", "d"]))
console.log(unzip([[1, "a"], [2, "b"], [3, "c"], [4, "d"]]))

assert(1 < 2)
assert(1 + 2 == 3)
assert([2, 3][0] === 2)
// assert(reverse("3df") === "fd3")
