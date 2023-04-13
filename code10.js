// Q10

function prop(arr, propert) {
  let arr2 = [];
  for (i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      if (key === propert) {
        arr2.push(arr[i]);
      }
    }
  }
  return arr2;
}

let arr = [
  (objt1 = { fname: "vikas", age: 25 }),
  (objt2 = { fname: "mohit", age: 36 }),
];

console.log(prop(arr, "fname"));
