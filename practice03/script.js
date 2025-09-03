
// even number
let i = 1
for (let i =0 ; i <=100 ; i++) {
    if (i%2==0) {
        console.log(i);
        
    }
    
}



// odd number 

let j = 1
 for (let j = 0; j <=100; j++) {
    if (j%2!==0) {
       console.log(j);
        
    }
    
 }

// Practice Question

 let gameNum = 25 ;
 let userName = prompt("Guess the game number:");

 while (userName != gameNum) {
    userName =prompt("you entered wrong number . Guess again:");
    
 }
console.log("congratution, you entered the right number");
