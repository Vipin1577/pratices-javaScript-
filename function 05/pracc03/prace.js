
// //Qs: we are given array of marks of students. Filter out of the marks of student that scored 90+

// let marks = [85,90,95,93,89,90,78,35];

// let student = marks.filter((val)=>{
//     return  val >=  90
// })



// console.log("90+ scroec ",student);

// // QS: take a number n as input from user. create an array of number form 1 to n

//  let n =   prompt("Enter the  number")

// let arr = [];
//  for (let i = 1; i<=n; i++) {
//      arr[i-1] = i
    
    
//  }

// console.log(arr);

//  let sum=   arr.reduce((prv ,curr)=>{
//     return prv + curr
// })

// console.log(sum);



// // Use the reduce method to calculate product of all numbers in the  array

// let foctorial = arr .reduce((res, curr)=>{
//     return res*curr;

// })
// console.log("Factorial = ",foctorial);





///

let marks = [89,90,95,98,65,89,,78,96,99];



 let student =  marks.filter((val)=>{
    return val>=90
})
console.log(student);





let n = prompt("enter the number ")
let arr = []

for (let i = 1; i <=n; i++) {
    arr[i-1]= i
    
    
}
console.log(arr);

let sum = arr.reduce((prv,curr)=>{
    return prv+curr
})

console.log(sum);

