let num = prompt("Enter a Number")
if (num%5===0){
    console.log(num ,"a multiple of 5");
    

 } else {
 console.log(num , "a not multple 5");
    }
   


    let score  = prompt("Enter ypur score (0-100):")
    let grade;


    if (score>=90 && score<= 100) {
        grade = "A"
    } else if (score>=70 &&score<=89 ) {
        grade = "B"
    } else if (score>=60 && score<=69) {
        grade = "c"
    } else if(score> 50 && score<=59) {
        grade = "D"
    } else if(score>= 0 && score<= 49){
        grade = "f"
    } ;
    console.log("according to your scores , your grade was",grade);
    