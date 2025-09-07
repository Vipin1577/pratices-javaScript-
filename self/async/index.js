// async function getData(){
//     setTimeout(function()  {
//         console.log("I am inside Timeout Block");
        
//     }, 3000);
// }
// getData();


async function getData() {
 let response= await  fetch('https://jsonplaceholder.typicode.com/posts')
let data = await response.json();

 console.log(data);
 
}

getData()