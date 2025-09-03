let items = ["apple","Banana","Mango","grapess", ];

items.push("chip", "burger", "paneer")

console.log(items);

// pop ()  delete 

let item = ["apple","Banana","Mango","grapess"];

console.log(item);
 let deleteItem= item.pop()
 console.log(deleteItem);
 

// toString()

let foodItems =  ["apple","Banana","Mango","grapess" ];

console.log(foodItems);
console.log(foodItems.toString());

// concat():

let marvel = ["thor", "spiderman", "ironman"];

let dc_heroes= ["superman", "batman"];

let tatal = marvel.concat(dc_heroes);

console.log(tatal);


// unshift () add to start

let marvels = ["thor", "spiderman", "ironman"];
 marvels.unshift("vipin")

console.log(marvels);

// shift ()  delete from start & return

let name = ["thor", "spiderman", "ironman"];
let val =name.shift()

console.log(name);

 // 


 let marval_herores  = ["thor", "spiderman", "ironman", "Ayush", "sachin", "vipin"];


console.log(marval_herores);
console.log(marval_herores.slice(1,3));



// splice():  chnage original array (add, remove, replace)



let  arr =  [1,2,3,4,5,6,7,]

//arr.splice(2,2,101,102)
//console.log(arr);


// Element Add

//arr.splice(2, 0 ,101)
//console.log(arr);


// Delete element
arr.splice(2 ,1)
console.log(arr);












 