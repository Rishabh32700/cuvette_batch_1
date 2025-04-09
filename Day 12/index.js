// // // function declaration
// // // hello()
// // function hello(){
// //     console.log("inside funct");
// // }
// // // hello()
// // // =============================================================================
// // // function expression
// // // a()
// // var a = function hello2(){
// //     console.log("inside funct 2");
// // }
// // // hello2() // this will throw u an error stating hello 2 is not def coz outside people dont know what hello2 is they only can see a which is holding the function
// // // a()

// // var b = function(){
// //     console.log("inside funct 2");
// // }
// // // b()
// // // =============================================================================

// // // arrow functions
// // const c = () => {
// //     console.log("inside arrow function");
// // }
// // c()

// // // IIFE
// // var a = () =>{
// //     console.log("IIFE funct 1");
// // }
// // // a()
// // // let's substitute the value of a
// // (() =>{
// //     console.log("IIFE funct 2");
// // })()

// // (()=>{
// //     console.log("IIFE funct 3");
// // })()

// // (()=>{
// //     console.log("IIFE funct 3");
// //     return function(){
// //         console.log("returned function");
// //         return function(){
// //             console.log("returned inner function");
// //         }
// //     }
// // })()()()

// var a = () => {
//   console.log("IIFE funct 1");
//   return function () {
//     console.log("returned function");
//     return function () {
//         console.log("returned inner function");
//       };
//   };
// };
// var returnedValue = a();
// // a()
// var returnedValue = (() => {
//     console.log("IIFE funct 1");
//     return function () {
//       console.log("returned function");
//       return function () {
//           console.log("returned inner function");
//         };
//     };
//   })()
// var returnedValueFromInnerFunc = returnedValue()
// // returnedValue()
// var returnedValueFromInnerFunc = (() => {
//     console.log("IIFE funct 1");
//     return function () {
//       console.log("returned function");
//       return function () {
//           console.log("returned inner function");
//         };
//     };
//   })()()

//   (() => {
//     console.log("IIFE funct 1");
//     return function () {
//       console.log("returned function");
//       return function () {
//           console.log("returned inner function");
//         };
//     };
//   })()()()

function bye (param){
    // var returnedValue = param()
    console.log(param());
}

bye(function () {
        console.log("this is a func as a argumnet");
})

