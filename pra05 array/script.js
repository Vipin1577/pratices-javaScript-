//QS: for a give array with marks of student -> [85,97,44,37,76,60] find the average marks of the entire class


let marks = [85,97,44,37,76,60];
let sum = 0 ;

for (let val of marks) {
    sum = sum+val

}
let avg  = sum / marks.length
console.log(`avg class marks  student ${avg}`);


 // QS: 2 For a given array with price of 5 items -> [250,645,300,900,50]. All items have an an offer of 10% OFF on them. Change the array to store  final after applying offer.


 let  items= [250,645,300,900,50];
 

 for (let i = 0; i < items.length; i++) {
    
    let offer = items[i] / 10
    items[i] -= offer
    
 }
 console.log(items)


 // -----------------------same question ----------------

 let item =[250,645,300,900,50];
 let i = 0
 for (let val of item) {
     //console.log(val);
      let offer = val / 10;
      item[i] = item[i] - offer
    console.log(`value after offer = ${item[i]}`);
          i++  
    
    
 }

 //






 let array = [45,68,98,78,96,45,87,];

 for (let i = 0; i < array.length; i++) {
    let offer =  array[i] / 10
    array[i] -= offer
    
 }
 console.log(`offer values ${array}`);






 //// 







let veg = [78,98,45,54,65,15,35,64,98,100,355,];

for (let i = 0; i < veg.length; i++) {
    let offer = veg[i]  /10;
    veg[i] = veg[i] - offer 
    
}
 console.log(veg);
 console.log(veg.length);
 


 /// 

 let student = [100,100,100,100,100,100];
  let sums = 0

  for(let val of student ){
   // console.log(student);
    sums = sums+val 

    let avg = sums / student.length

    
  }
console.log( `tatal avg marks ${avg}`);

 

//


// let price = [200,200,200,200,200,200,200];

//  let add = 0 

// for (let i = 0; i < price.length; i++) {
//      add = add+ i
//  let avg = avg  / i
    
// }
// console.log(avg);





///
let price = [20000, 200, 200, 200, 200, 200, 200];
let su = 0;

for (let i = 0; i < price.length; i++) {
  su = su + price[i];
}

let av = su / price.length;
console.log(av); 





let username = prompt("Enter your fullname without white space")

 let  fullname =  "@" + username + username.length

 console.log(fullname);




   
 

 