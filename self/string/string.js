let str = "vipin kanujiya          ";
let string = "Ayush" 
console.log("Length:", str.length);      // ✅ property, no ()

let lower = str.toLowerCase();           // returns new string
let upper = str.toUpperCase();           // returns new string

let result=     str.trim()
let tsr=  str.concat(string)
//let name = string.length()


console.log("Lowercase:", lower);
console.log("Uppercase:", upper);
console.log("Original string:", str);    // original still the same
console.log("result=",result);
console.log(tsr);
//console.log(name);


let fullName= prompt("Enter the fullName without white space")

let username = "@"+fullName+fullName.length;
console.log(username);










let name = "chaudhray"
console.log(name.replace("c","C"));



 