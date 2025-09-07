

// let firstPromises = new Promise((resolve,reject)=>{

//  setTimeout(function sayMyName()  {
//     console.log("My Name is Vipin Rajak");
    
//  }, 15000);
//  resolve (1)

// })




// let promise1 = new Promise((resolve , reject)=>{
//    let success = true ; 
//    if (success) {
//       resolve(10)
//    }
//    else{
//       reject(-1)
//    }
// });

// promise1.then((message)=>{
//    console.log("Then ka messsage i "+ message);
//    return 20;
// }).catch((error)=>{
//    console.log("Error :"+ error);
   
// })




let promise1 = new Promise((resolve, reject)=>{
   setTimeout(resolve,1000,"first");
})


let promise2 = new Promise((resolve, reject)=>{
   setTimeout(resolve,2000,"first");
})


let promise3 = new Promise((resolve, reject)=>{
   setTimeout(reject,4000,"third");
})


Promise.all([promise1,promise2,promise3])
.then((value)=>{
   console.log(value);
   
})

.catch((error)=>{
console.log("error :" + error);

})