const URL = "https://randomuser.me/api/?inc=gender,name,nat";

//const factPara  = document.querySelector("#fact")

const btn = document.querySelector("#btn");

const getFacts  = async ()=>{
    console.log("getting data ...");
    

let response =await fetch(URL)
console.log(response);
let data = await response.json();
console.log(data);

//factPara.innerText=data[0].text;

}

btn.addEventListener("click",getFacts)