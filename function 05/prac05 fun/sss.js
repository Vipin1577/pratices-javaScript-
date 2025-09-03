// Qs. Create a function using the "function " keyword that takes a String as an argument & returns the number ofvowels in the string

// function CountVowels(str) {
//     let count =0
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ){
//       count++;

//     }
//   }
//   console.log(count);
// }
// console.log(CountVowels("vipin kanaujiya"));

function vowel(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
   
  }
   return count;
}
console.log(vowel("vipin kanaujiya"));


/// QS: 2 Create an arrow function to perform the same task

 const ArrowSum = (str)=>{
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
   
  }
   return count;
}
    
 console.log(ArrowSum("ayush"));


/// practice 
 let marks = [85,97,44,37,76,60]

 let sum = 0

 for (let val of marks) {
    sum = sum+val


    
 }
  let  avg = sum /marks.length

  console.log(avg);



  ///  

  let items = [250,645,300,900,50]

  for (let i = 0; i < items.length; i++) {
    
    let offer = items[i] / 10
    items[i] -= offer
  }
  console.log(items);
 
/////



  let usrename = prompt("Enter the Fullname without white space ")

  let fullname = "@"+usrename+usrename.length

  console.log(fullname);


  //

  function value(str) {
     let count = 0;
    for (const val of str) {
       
        if (val==="a"||val==="e"||val==="i"||val==="o"||val==="u") {
            count++
            
        }
    }
    return count;
    
  }
  console.log(value("vipinzxcvbxzcv b"));
  



  




  
    
    
    
 






 