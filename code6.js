// Question 6 Write a function that takes in an array of strings and returns the length of the longest string.

let arr = ["vikas", "vikas kumar", "vikku", "rohit"]

function findlength(arr){
     let largest = 0;
   for(let i = 0; i< arr.length; i++){
    if(arr[i].length > largest){
        largest = arr[i].length;
    }
   }
   return largest;
}
console.log(findlength(arr));
