// array is a collection of homogeneous datatypes but in other progamming languages not in JS

// when it comes to JS arrays can store hetrogeneous datatypes
// 1. JS is dynamically typed language
var arr = [10, "hello", [1,2,3,4], {key:"value"}, true]
// 2. everythin in JS is an object
// arr = {
//     0: 10,
//     1 : "hello",
//     2: [1,2,3,4],
//     3: {key:"value"},
//     4: true
// }

const arr2 = []
arr2.push(3)
arr2.push(4)
arr2.push(5)
console.log(arr2.length);
for(let i = 0; i<=arr2.length; i++) console.log(arr2[i]);


const arr3 = [1,2,3,4,5,6] // here u will find addess stored in front of arr3


