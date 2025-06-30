function fibo(n) {
  let res = [0, 1];
  for (i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res[n - 1];
}
console.log(fibo(5));

// ----------------------------------
function fibo(n) {
  let res = [0, 1];
  for (let i = 2; i <= n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res;
}
console.log(fibo([6]));
// ----------------------

// Bubble Sort Function
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
        swapped = true;
      }
    }
    if (!swapped) break; // Stop if already sorted
  }
  return arr;
}

// Function to Sort and Then Separate Even & Odd
function evenOdd(n) {
  // Step 1: Sort the array using Bubble Sort
  let sortedArr = bubbleSort(n);

  let even = [];
  let odd = [];

  // Step 2: Separate even and odd numbers
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] % 2 === 0) {
      even.push(sortedArr[i]);
    } else {
      odd.push(sortedArr[i]);
    }
  }

  return { even, odd };
}

// Testing the function
console.log(evenOdd([1, 3, 4, 5, 6, 723, 2, 9, 10]));
