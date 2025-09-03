// compile time error

// syntax error

// console.log(1

//// runtime error

// console.log(x);

 
// let a = 5;
// let b = 10  
// console.log("a = ", a)
// console.log("b = ", b)
// console.log("a+b = ", a+b)

// try {

//     console.log("a+b = ", a+c);
    
// } catch (error) {
//     console.log(error);
    
// }



// try {
//   // Code that may throw error
//   let result = riskyFunction();
//   console.log(result);
// } catch (error) {
//   // Handle error here
//   console.log("Error occurred:", error.message);
// }



// try {
//   let x = 10 / 0;
//   console.log(x);
// } catch (error) {
//   console.log("Error:", error.message);
// } finally {
//   console.log("Always executed");
// }



function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log("Caught Error:", err.message);
}












    
      

