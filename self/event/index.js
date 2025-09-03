function changeText(){
    let para = document.getElementById('para')
    para.textContent = "Hello Vipin"

}

let para = document.getElementById('para')

para.addEventListener('click', changeText);
 

 


////   preventDefault  ()


let anchoter = document.getElementById("action")

anchoter.addEventListener("click", function(event){
    event.preventDefault();
    anchoter.textContent = "Done hai"
})


//// event

// let paraa = document.querySelectorAll('p')

// for(let i=0; i<paraa.length; i++){
//     let par = paraa[i]
//     par.addEventListener('click', function(){
//         alert('you have clicked on para',(i+1))
//     })
// }



function alertpara(event){
    alert("you clicked on para:" + event.target.textContent);
}


let mydiv = document.getElementById('wapper')

document.addEventListener('click',alertpara)
