// QS Create a H2 heading with - "Hello JavaScript" from . Append "from THakur College degree" to this text using Js

// let heading = document.querySelector("h2")

// console.log(heading.innerText);

// heading.innerText= heading.innerText +"  from Thakur College"



//  Qs create 3 div with common class name - "box". Assess them $ add same Uniquery of them



let divs = document.querySelectorAll(".box");
let idx = 1; // Move this outside the loop

for (  let div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}



let heading = document.querySelector("h2");

heading.innerText = heading.innerText + " form Thakur college"


 let marks = [90,98,89,36,95,48,95]
 
 let student = marks.filter((val)=>{
    return val >= 90
 })
 console.log( student);
 






