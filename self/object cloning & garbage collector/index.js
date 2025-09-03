// let obj = {
//     age:20,
//     weight:50,
//     ht:150
// }


// console.log(obj);

// obj.color = "fair"
// console.log(obj);




///  --- Question ----- separate operator  ----(cloning object)


// let obj = {
//     age:20,
//     weight:50,
//     ht:150
// }

// let dest = {...obj}

// obj.age=25

// console.log(dest);
// console.log(obj);


// ---------------question--------assign method --------------(cloning object)


// let obj = {
//     age:20,
//     weight:50,
//     ht:150 ,
//     address:"xyz"

// }

// let dest = Object.assign({},obj)
// obj.age=25
// console.log(dest);
// console.log(obj);




 ///  -------question----------------------garbage collector ---------------(cloning object)


let user = {
  name: "Vipin"
};

user = null; // now the object {name: "Vipin"} is unreachable
// Garbage Collector will clean it up
console.log(user);




function demo() {
  let obj = { data: "hello" };
  // obj is reachable here
}

demo();
// after function ends, obj is no longer reachable
// Garbage Collector frees memory





