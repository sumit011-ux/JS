"use strict"; //treat all Js code as newer version

// alert(3+3); // we are using nodejs, not browser

// Data types in Js
// 1. Primitive data types
// a. Number
let num1 = 3.14;
let num2 = 42;
console.log("Number data type:");
console.log(typeof num1);
console.log(typeof num2);

// b. String  
let str1 = "Hello, World!";
let str2 = 'JavaScript is fun.';
console.log("String data type:");
console.log(typeof str1);
console.log(typeof str2);

// c. Boolean
let bool1 = true;
let bool2 = false;
console.log("Boolean data type:");
console.log(typeof bool1);
console.log(typeof bool2);

// d. Undefined
let undef;
console.log("Undefined data type:");
console.log(typeof undef);

// e. Null
let nullVar = null;
console.log("Null data type:");
console.log(typeof nullVar); // Note: this will show 'object' due to a historical bug in JavaScript

// f. Symbol
let sym = Symbol("unique");
console.log("Symbol data type:");
console.log(typeof sym);

// g. BigInt
let bigIntNum = 9007199254740991n;
console.log("BigInt data type:");
console.log(typeof bigIntNum);

// 2. Non-primitive data types

// a. Object
let obj = {
  name: "Alice",
  age: 30
};
console.log("Object data type:");
console.log(typeof obj);

// b. Array
let arr = [1, 2, 3, 4, 5];
console.log("Array data type:");
console.log(typeof arr);

// c. Function
function greet() {
  return "Hello!";
}
console.log("Function data type:");
console.log(typeof greet);
// Note: In JavaScript, arrays and functions are also considered objects.
// However, they have their own specific types when checked with typeof.
