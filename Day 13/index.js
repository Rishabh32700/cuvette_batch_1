// const arr = [1,2,3,4,5,6,7]
// function hello(param) {
//     console.log(param);
// }
// Array.prototype.push(hello)
// const ret = arr.__proto__[0]
// ret(arr[1])

// // Array.prototype = hello
// // console.log(arr);
// arr.__proto__ = hello
// console.log(arr.__proto__());

// const arr2 = [1,2,34]
// const ret2 = arr2.__proto__[0]
// ret(arr2[2])

// // console.log(arr2.__proto__());

const obj = {
    name : "rishabh",
    age : 24,
    greet : function () {
        console.log(`hello ${this.name} ${this.age}`);
    }
}
const obj2 = {
    name:"cuvette"
}
obj2.__proto__ = obj
console.log(obj2.greet());
console.log(obj.greet());

