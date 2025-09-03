// const student = {
//     FullName: "vipin",
//     lastName: "kanaujiya",
//     marks: 70.5,
//     printMarks: function () {
//         console.log("marks =", this.marks);
//     } 
// };

// console.log(student);       // Shows object
// student.printMarks();       // Shows: marks = 70.5




// const employee = {
//     calTax(){
//         console.log("tax rate is 10%");
        
//     }
    
    
// } 
// console.log(employee.calTax());








const employees = {
 clacTax(){
    console.log("tax rate is 10%");
    
 }
}
 
const karn ={
    salary:20000000,
    tax(){
        console.log("tax rate is 20%");
        
    }
};


karn.__proto__ =employees;


class ToyotaCar{
    constructor(brand,milegage){
        console.log("crate new object");
        this.brand = brand;
        this.milegage = milegage;
        
    }
    start(){
        console.log("Start");
        
    }
    stop(){
        console.log("stop");
        
    }
    
}

let Fartunar = new ToyotaCar("fartuner",12);
console.log(Fartunar);
let car = new ToyotaCar("lexus",13);
console.log(car);

//Fartunar.setBrad("vipin")




// inheritance 

class Parent {
Hello(){
    console.log("HEllO ,Vipin");
    
}

}

class Child extends Parent{}


let obj= new  Child ()





////


class Parents {
    eat(){
        console.log("Eating");
        
    }
    sleep(){
        console.log("Sleeping");
        
    }
}

class Engineer extends Parents{
    work(){
        console.log("slove problem ,build something");
        
    }
}


let vipinObj = new Engineer();



// super keyword


class parent {
    constructor(name){
        this.species = "homo sapines";
        this.name = name
    }
    eat(){
        console.log("eats");
        
    }
}

class engineer extends parent {
    constructor(name){
        super(name)
    }
    works(){
        super.eat();
        console.log('some Thinking');
        
    }
}


let engObj = new engineer("vipin");




