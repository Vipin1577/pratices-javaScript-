// Promises


// let promises = new Promise((resolve, reject) => {
//     console.log("promiese is run");
//     // resolve("succes");
//     reject("some error")

// })


/////////////////////////////



// let promises =getData(123)
// function getData(dataId, getNextData) {

//     return new Promise((resolve, reject) => {


//         setTimeout(() => {
//            // resolve("sucess")
//           reject("error");
//           if (getNextData) {
//             getNextData();
            
//           }
//         },500);
//     })     




// }

//////////////////////////////////
const getPromies =  ()=>{
    new Promise ((resolve ,reject)=>{
        console.log("I Am Vipin Kanaujiya");
        resolve("123654")
    })
}

////////////////
// promises chain 





// function getData(dataId) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("data" ,dataId)
//             resolve("success")
//         }, 5000);
//     })
// }


// let p1 = getData(1);
// p1.then((res)=>{
// console.log(res);

// })



// let p2 = getData(2);
// p2.then((res)=>{
// console.log(res);

// })



////////////0---------------------//////////


function getData(dataId) {
    return new Promise((resolve ,reject)=>{

        setTimeout(() => {
            console.log("data", dataId);
           // resolve("success")
           reject("error")
            
        }, 2000);
    })

}


// promises chain

getData(1)
.then((res)=>{
   return getData(2);
})

.then((res)=>{
    return getData(3)
})
.then((res)=>{
    console.log(res);
})



