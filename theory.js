// Q1 What is a for loop in JavaScript?
//  for loop is a way to run code over and over until the condition get satisfied given by us


// Q2 What is the syntax for a for loop?
// for(initialization; condition; iteration){
//     code to be executed
// }

// Q3 How do you use a for loop to iterate through an array?
//  we can use for loop to iterate through an array
//  first initialize a loop i = 0;
//  second (i < arr.length) means variable shouuld be less than the length of the array
//  increment the loop counter variable at the end of each iteration

//  for example
//  var numbers = [1, 2, 3, 4, 5];

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// Q4 How do you use a for loop to iterate through the characters of a string?
// to iterate through the characters of a string you can use "length" property to determine the number of character in string then loop through the characters using their indexes.

// for example
// let myString = "Hello, World!";
// for (let i = 0; i < myString.length; i++) {
//   console.log(myString[i]);
// }

// Q5 How do you use a for loop to print the numbers from 1 to 10?
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }


// Q6 How do you use a for loop to print the even numbers from 1 to 10?

// for (let i = 2; i <= 10; i = i+2) {
//     console.log(i);
//   }


// Q7  How do you use a for loop to print the odd numbers from 1 to 10?

// for (let i = 1; i <= 10; i = i + 2) {
//     console.log(i);
//   }



// Q8 How do you use a for loop to iterate through the properties of an object?

// let obj = {
//     key1: 'Value 1',
//     key2: 'Value 2',
//     key3: 'Value 3',
//     key4: 'Value 4'
// }
// for (let key in obj) {
//     console.log(key + " : " + obj[key]);
// }



// Ques 9 How do you use a for loop to iterate through the keys of an object?
// let obj = {
//     key1: 'Value 1',
//     key2: 'Value 2',
//     key3: 'Value 3',
//     key4: 'Value 4'
// }
// for (let key in obj) {
//     console.log(key);
// }



// Ques 10 How do you use a for loop to iterate through the values of an object?
// let obj = {
//     key1: 'Value 1',
//     key2: 'Value 2',
//     key3: 'Value 3',
//     key4: 'Value 4'
// }
// for (let key in obj) {
//     console.log(obj[key]);
// }