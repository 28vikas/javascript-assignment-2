// Question 9 Write a function that takes in an array of strings and returns a new array with each string capitalized.

let arr = ["mohit", "rajubeta", "chimta"];

let arr1 = [];

function capital(arr){
    for(let i = 0; i<arr.length; i++){
        let captilized = arr[i].toUpperCase();
        arr1.push(captilized)
    }
    return arr1;
}

console.log(capital(arr))