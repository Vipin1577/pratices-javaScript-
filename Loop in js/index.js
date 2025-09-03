for (let count = 0; count <=5; count++) {
    console.log(count);
    
    
}

for (let i = 1; i <= 5; i++) {
    console.log("vipin");
    
    
}

//Calculate sum of 1 to 5 
let sum = 0
 for(let i=1; i <=5; i++ ){
sum = sum + i;
 }

 console.log("sum" , sum);



 let sums = 0
 let n = 100;
 for (let i = 1; i <= n; i++) {
    sums = sums+i
    
 }
 console.log("sum",sums);



 // while loop 

let j = 1
while (j<=5) {
    console.log("while loop",j);
    
    j++
}


let s = 1
while (s<=50) {
    console.log("while loop" ,s);
    s++
}


// do-while loop

let h= 1
do {
    console.log("Thakur shyamnarayan degree college", h);
    h++
} while (h<=10);

 




// for of loop ( strings and array me help karata hai)

let str = "Thakur shyamnarayan degree college";
let size = 0
for (const i of str) {
    console.log(i);
    size++
}
console.log("string size", size);




//  for-in loop 

let  student ={
    name: "vipin kanaujiya",
    age: 20,
    cgpa: 8.0,
    isPass: true
};

for(let key  in student ){
console.log("key", key , "value=",student[key]);

}
