// Question 8 	Write a function that takes in an array of numbers and returns a new array with each number multiplied by 2.
let arr = [1, 2, 3, 4, 5];

let arr1 = [];

function double(arr){
    for(let i = 0; i<arr.length; i++){
        arr1.push(arr[i]*2)
    }
    return arr1;
}

console.log(double(arr))
