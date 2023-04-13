// Question 1

// function even(num){
//          if(num%2 == 0){
//             return true;
//          }else{
//             return false
//          }
// }
// console.log(even(13))

// question 1 (second method)

// function even(num){
//     return num%2 == 0;
// }

// console.log(even(10))


















// Question 10

let arr = [
    objt1 = {fname: "vikas",
             age : 25
},
  objt2 = { fname : "mohit",
            age : 36}
]

let arr2 = [];


function prop(arr, propert){
    let count = 0;
    for(i=0; i<arr.length; i++){
        for(let key in arr[i]){
            if(key == propert){
                 count++;
                 arr2.push(arr[i])

            }
        }
    }
    return arr2;
}

console.log(prop(arr, "fname"));







