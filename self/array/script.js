// let arr = ["vipin" ,"Abhay", "Sachin", ];


// // arr.push("Priyanshu","sdfmnb");
// // console.log(arr);


// // arr.pop()
// // console.log(arr);

// arr.toString()
// console.log(arr);

// let ArryString = [1,12,3,6,5,5,6,9];

// ArryString.toString()

// console.log(ArryString);


// let arr = ["vipin" ,"Abhay", "Sachin", ];

// let man = ["saa","wee","sad"]
// let dog = ["qq","sss0","sdsa","cxv"]

// let woman = arr.concat(man,dog)

// console.log(woman);


// let arr = ["vipin" ,"Abhay", "Sachin", ];

// arr.unshift("kanaujiya")
// console.log(arr);


// let arr = ["vipin" ,"Abhay", "Sachin", ];

// arr.shift()
// console.log(arr);



// let arr = ["vipin" ,"Abhay", "Sachin", "Ayush", "Aman", "STTT" ];

// console.log(arr.slice(2,4));



// create an array to storre companies 



let companies = ["Mircosoft", "Ubar","Google","IBM","Netfilic"]



// companies.shift()
// console.log(companies);


// companies.splice(2,1,"ola")
// console.log(companies);



companies.push("amazon")

console.log(companies);


// let obj ={
//     name:"vipin",
//     age :20,
//     weight:50,
//     height:"5fit 5in"

// }
// console.log(obj);


/// array Method  


// map()

// let arr = [10 ,20,30,40]

// let ans= arr.map((number)=>{
//     return number*number
// })
// console.log(ans);




// filter method

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let ans= arr.filter((number)=>{
//     if (number%2===0) {
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(ans);





// let arr =["vipin ", 1 ,2, "sachin", 10 , 50 ];

// let ars = arr.filter((value)=>{
//     if (typeof(value) === "number" ) {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(ars);



// --- reduce method 


// let arr = [10,20,30,40,50]

// let ans = arr.reduce((prev, curr)=>{
//     return prev + curr
// })
// console.log(ans);


//  let arr = [10,20,30,40 ,20,5000,1000]

//  let ans = arr.reduce((prev,curr)=>{
//     return prev >curr ? prev:curr
//  })

//  console.log(ans);
 



/// ===== ---- sort method
// //
// let arr = [10,2,30,4,50,6,70,8,90,100]
// arr.sort()
// console.log(arr);


// let arr = [11, 13, 15,  21, 2 ,3,5,4,8,];

// let result = arr.find(num => num % 2 === 0);

// console.log(result); 



// forEach loop


// let  Array = [10,20,30,"vipin",40,50]
//  let arr  = Array.forEach((val, number)=>{
//     console.log(val%2===0);
    
//  })

//  console.log(arr);
 


// let arr = [10,20,30,40,50]

// function getSum(arr){
//     let len = arr.length
//     let sum = 0
//     for (let i = 0; i <len ; i++) {
//            sum = sum +arr[i]        
//     }
//     return sum
// }

// let total = getSum(arr)

// console.log(total);


// forEach loop

let arr = [30,10,60,4,0,80,60,30]

let sum = 0 ;
 function arrSum(arr){
    arr.forEach( (value)=> {
        sum = sum + value
    });
    return sum
 }

 console.log(arrSum(arr));
 