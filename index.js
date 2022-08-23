// Write your code here:
function fibonacci(n, counter = 1, arr = [0, 1]) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }
  arr.push(arr[counter] + arr[counter - 1]);

  counter++;

  if (counter >= n) return arr;

  return fibonacci(n, counter, arr);
}

console.log(fibonacci(0)); // [0]
console.log(fibonacci(1)); // [ 0, 1 ]
console.log(fibonacci(3)); // [ 0, 1, 1, 2 ]
console.log(fibonacci(8)); // [ 0, 1,  1,  2, 3, 5, 8, 13, 21]
