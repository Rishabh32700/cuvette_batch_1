// // by using object literals
// const obj = { 
//     name : "cuvette",
//     greet : function (){
//         console.log("hello guys!");
//     }
// }
// obj.name = "rishabh"
// obj.age = 24
// // console.log(obj.name, obj.age, obj.greet());

// // by using constructors
// const car = new Object({model : "s convertible", name:"mini cooper"})
// const car2 = new Object({model : "s convertible"}, {name:"mini cooper"})
// const car3 = new Object({model : "s convertible"}, 2)
// const car4 = new Object("model", "s convertible")
// console.log(car);
// // car.brand = "mini cooper"
// console.log(car2);
// console.log(car3);
// console.log(car4);
// // console.log(car4[0]);
// // console.log(car4[1]);
// // console.log(car4[2]);
// console.log(car4.length);
// for(let i = 0; i<car4.length; i++){
//     console.log(car4[i]);
// }


const obj = { 
    name : "cuvette",
    greet : function (){
        console.log("hello guys!");
    },
    age : 40,
    rishabh : "magic guys",
    24 : 24
}
const name = "rishabh"
const age = 24


console.log(obj.name);
console.log(obj.age);
console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj[name]); // console.log(obj["rishabh"]);
console.log(obj[age]);
