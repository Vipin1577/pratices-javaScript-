console.log("start");
function task() {
    for(let i = 0; i<1000; i++){}
    console.log("Task name");
    
}
task();
console.log("End");


console.log("vipin");
setTimeout(()=>{
    console.log("sachin");
    
},200)

console.log("end");

function sum(a, b) {
    console.log(a+b);
    
}
function Calcutator(a,b , SumCallback) {
SumCallback(a,b)

}
Calcutator(20,35,sum)