let newBtn  = document.createElement("button");
newBtn.innerText = "click me!"

console.log(newBtn);


let div = document.querySelector("div")
 div.append(newBtn)


let button = document.createElement("button")
button.innerText = "click off !"

console.log(button);


let p = document.querySelector('p')
 p.after(button)
 button.style.color = "red"


 let heading = document.createElement("h1")
 heading.innerHTML = "<i>Hi , I am new </i>";

 document.querySelector("body").prepend(heading)


 let para  = document.createElement("p")
 para.innerText = "vipin kanaujiya"

 document.querySelector("body").append(para)






