

// Write a program to reverse a string without using .reverse(). 👉 Example: "vipin" → "nipiv" ans


function reStr(str){
let reversed = "";
for (let i =   str.length -1; i>=0; i--) {
    
    reversed += str[i]
}
return reversed
}
let input = "vipin";
console.log(reStr(input));


// 

function isPalindrome(str) {
    // Remove spaces and make lowercase for uniformity
    str = str.replace(/\s+/g, '').toLowerCase();

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed;
}

// Example
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("nurses run")); // true



// Count the number of vowels in a string.
// 👉 Example: "javascript" → 3

function contVowel(str) {
    let vowels = "aieouAEIOU";
    let count = 0
    for (let char of str) {
        if (vowels.includes(char)) {
            count++
      
        }
    }
    return count;

}
console.log (contVowel("vipin kanujiya"));




/// 

function vowels (str) {
    let count = 0;
    for (let  char of str.toLowerCase()) {
        if (char==="a"|| char==="e"|| char==="o"|| char==="i"||char==="u") {
            count++
        }
    }
    return count
}

console.log(vowels("aysh Singh vipin kanaujiya"));


function myFun(a ,b) {
    return a +b;
       


}
let x = myFun(12,12)

console.log(x);


