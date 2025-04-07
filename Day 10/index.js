// diff between var let and const

var a = 10
let b = 20
const c = 30


// =================================================
// =================================================
// declaration and initialization
var d // this is declaration
var e = 10 // this is dec and initialization
// in var and let u are allowed to declare and initialize variable in diff lines
// eg:
var f 
f = 30 
let g
g = 40

// but in const u are not allowed to declare and initialize variable in diff lines instead u have to initialize var where declared
// eg
const h = 30

// =================================================
// =================================================

// updation

// in var and let u are allowed to update the values
// eg

f = 80 // since in line 15 we have already dec and in line number 16 we have assigned the value but still i can update the value here
g = 90 // since in line 17 we have already dec and in line number 18 we have assigned the value but still i can update the value here

// in const u are not allowed to update the values
h = 100 // since in line 22 we have already dec and we have assigned the value so we cannot update the value here

// =================================================
// =================================================

// redeclaration
// in var we can redeclare our variables
var f = 100 // this is valis u can d=re declare

// but u cannot redeclare the leta nd const type of variables
let g = 120 // this is not allowed
const h = 150 // this is not allowed

// =================================================
// =================================================
// scope

// var type of variables are either global scoped or functional scoped
// when it comes to let and const type of variables they are blocked scope
// {
//     // this is a block
// }


// =================================================
// =================================================

// hoisting

// when it comes to var type of variables u can access these variables before their initialization 

console.log(i);
var i = 20

// when it comes to let and const type of variables u can not access these variables before their initialization but on the other hand it does'nt mean that these variables are not hoisted they are also hoisted but we cannot access them because of Temporal dead zon (TDZ)
console.log(j); // this will throw u a run time error same goes for ur const
let j = 500

