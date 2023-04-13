
// Question 7 	Write a function that takes in an array of objects and returns the number of objects that have a specific property.

function prop(arr, propert){
    let count = 0;
    for(i=0; i<arr.length; i++){
        for(let key in arr[i]){
            if(key == propert){
                 count++;

            }
        }
    }
    return count;
}

let arr = [
    objt1 = {fname: "vikas",
             age : 25
},
  objt2 = { fname : "mohit",
            age : 36}
]

console.log(prop(arr, "fname"));