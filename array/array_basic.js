// 1-Write a function to find the largest element in an array.

var arr = [3, 6, 2, 56, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);

// 2-Write a function to find the smallest element in an array.

var arr = [3, 6, 2, 56, 32];
var smallest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log(smallest);

// 3-Write a function to find the sum of all elements in an array.

var arr = [3, 6, 2, 6, 1];

function Summation(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(Summation(arr));

// 4-Write a function to find the average of all elements in an array.

var arr = [1, 2, 3, 4, 5];

function Summation(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function average(arr) {
  let sum = Summation(arr);
  let avg = sum / arr.length;
  return avg;
}

console.log(average(arr));

// // 5-Write a function to find the median of all elements in an array.

var arr = [2, 4, 6, 8, 10];

function findMedian(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // here we check elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  const median = (arr.length / 2) >> 0;

  // If array length is odd, return the middle element
  // If array length is even, return the average of the two middle elements
  if (arr.length % 2 === 0) {
    return (arr[median] + arr[median - 1]) / 2;
  } else {
    return arr[median];
  }
}
console.log(findMedian(arr));

// 6-Write a function to remove all duplicates from an array.

function DublicatCheckerFunction(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray[uniqueArray.length] = arr[i]; 
    }
  }
  return uniqueArray;
}

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 7, 7, 7];
const result = DublicatCheckerFunction(arr);
console.log(result);

// 7-Write a function to sort an array in ascending order.

function Ascending_SortFunction(arr) {
  const length = arr.length;

  // Outer loop for iterations
  for (let i = 0; i < length; i++) {
    // Inner loop for comparisons and swaps
    for (let j = 0; j < length - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// testing Example :
const arr = [30, 20, 50, 40, 80, 70, 60, 10];
const sortArry = Ascending_SortFunction(arr);
console.log(sortArry); 

// // 8-Write a function to sort an array in descending order.

function Descending_SortFunction(arr) {
  const length = arr.length;

  // Outer loop for iterations
  for (let i = 0; i < length; i++) {
    // Inner loop for comparisons and swaps
    for (let j = 0; j < length - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] < arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// testing Example :
const arr2 = [30, 20, 50, 40, 80, 70, 60, 10];
const sortArry2 = Descending_SortFunction(arr2);
console.log(sortArry2);

// // 9-Write a function to shuffle the elements of an array randomly.

function shuffleArray(arr) {
  const length = arr.length;

  let BaseValue = 1;

  // shuffle random function
  function ShuffleRandomFunction() {
    seed = (BaseValue * 1664525 + 1013904223) & 0xffffffff;
    return BaseValue / 0xffffffff;
  }

  for (let i = length - 1; i > 0; i--) {
    const random = ((i * ShuffleRandomFunction()) | 0) % (i + 1);

    const temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5];

shuffleArray(arr);

console.log(arr);
