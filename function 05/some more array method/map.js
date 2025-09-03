
// map method

let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];

 let newArr=  nums.map((val)=>{
  return val *val
    
})
console.log(newArr);



// filter method


let arr = [1,2,3,4,5,6,,7,8,9 ];

let evenArr= arr.filter((val) =>{
    return val %2===0;
})
console.log(evenArr);

// filter method


let array = [9,7,8,4,5,6,3,2,1,4,5,]

let oddArr = array.filter((val)=>{
    return val % 2!==0

})

console.log("Odd Arrray",oddArr);

// Reduce method


let num = [12,15,45,35,45,65,48]

const addArr = num.reduce((res , curr)=>{
    return res + curr
})

console.log(addArr);


/// biggest number hai (reduce)


let number = [100,120,200,3000,400,600,800,945,10];

let bigg = number.reduce((prev, curr)=>{
  return prev > curr ? prev : curr 

})

console.log(bigg);





