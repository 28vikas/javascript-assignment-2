// Question 5 Write a function that takes in an array of numbers and returns the sum of the numbers.

let arr = [4,5,8];
sum = 0;

function sumArray(x){
for (let i = 0; i<arr.length; i++){
  sum = sum + arr[i]
}
  return sum;
}
console.log(sumArray(arr))