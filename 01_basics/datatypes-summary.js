// Primitive data types in JavaScript
let str = "Hello, World!"; // String
let num = 42;
let bool = true; // Boolean
let n = null; // Null
let undef; // Undefined
let sym = Symbol("unique"); // Symbol
let bigInt = 9007199254740991n; // BigInt
console.log(str);
console.log(num);
console.log(bool);
console.log(n);
console.log(undef);
console.log(sym);
console.log(bigInt);

//Refrence Non-primitive data types in JavaScript
let arr = [1, 2, 3]; // Array
let obj = { name: "Alice", age: 30 };
let func = function () 
{ return "I am a function"; }; // Function
console.log(arr);
console.log(obj);
console.log(func());

// typeof operator is used to determine the data type of a variable
console.log(typeof str);
 



// Stack  memory vs Heap memory
// Stack memory is used for static memory allocation and stores primitive data types and function calls.
// Heap memory is used for dynamic memory allocation and stores objects and arrays.
