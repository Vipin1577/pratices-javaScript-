// let btn = document.querySelector("#btn") 
// btn.onclick= ()=>{
//     console.log("click me ");
    
// }

let box = document.querySelector('div')

box.onmouseover = () =>{
    console.log("mouse hover");
    
}  



 let btn = document.querySelector("#btn");

btn.onclick = (evt) => {
    console.log(evt);               // Full event object
    console.log(evt.type);         // Event type (e.g., "click")
    console.log(evt.target);       // Element that was clicked
    console.log(evt.clientX, evt.clientY); // Mouse click position (x, y)
};



// let myBtn  = document.getElementById("myBtn")

// myBtn.onclick = function (event) {
//     alert("vipin")
//     console.log(event);
    
// }



// let myBtn = document.querySelector("#myBtn");

// myBtn.addEventListener("click" ,()=>{
//     console.log("button was clicked")
// })



// let btn1 =  document.querySelector('.btn1');

// btn1.onclick = function(event) {
//     alert('vv')
//     console.log(event);
    
    
// }




let button  =  document.querySelector('#box');

button.onclick=() =>{
    console.log("click");
    

}


let btn2 = document.querySelector('.myButton')

btn2.ondblclick = ()=>{
 console.log("button vvv");
 
}


let box1 = document.querySelector('#box1')
 box1.addEventListener('click', ()=>{
    console.log("button was click - handler1");
    
 })

 

 box1.addEventListener('click', ()=>{
    console.log("button was click - handler2");
    
 }) 

 const handler3 = ()=>{
 console.log("button was click - handler3");
 };   
box1.addEventListener('click', handler3)

  box1.addEventListener('click', ()=>{
    console.log("button was click - handler4");
    
 })

 box1.removeEventListener("click", handler3)


 