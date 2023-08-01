// Example :-Print the odd numbers in an array
// Function Method
var arr = [12, 13, 14, 15, 16];
var result = [];
function odd(arr) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 != 0) {
result.push(arr[i]);
}
}
return result;
}
console.log(odd(arr));

// Anonyomus Function
var arr = [12, 13, 14, 15, 16];
var result = [];
var odd = function (arr) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 != 0) {
result.push(arr[i]);
}
}
return result;
};
console.log(odd(arr));

// Convert all the strings to title caps in a string array
// Function Method

const a = "hello how are you";
function caps(a) {
let b = a[0].toUpperCase() + a.slice(1);
return b;
}
console.log(caps(a))