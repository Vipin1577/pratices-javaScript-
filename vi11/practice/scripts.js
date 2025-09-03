// let DATA = "SECRET INFORMATION"

// class User{
//     constructor(name , email){
//      this.name = name;
//      this.email = email;
//     }
//     viewData(){
//     console.log ("data",DATA)
// }

// }

// let stuent1 = new User("vipin","vipin@gmail");

// let student2 = new User("Ayush", "ayush@gmail.com")



////   QS: 2


let DATA = "SECRET INFORMATION"

class User{
    constructor(name , email){
     this.name = name;
     this.email = email;
    }
    viewData(){
    console.log ("data",DATA)
   }

}

class Admin extends User{
    constructor(name , email){
        super(name,email)
    }
    editData(){
        DATA ="same new value"
    }
} 





let stuent1 = new User("vipin","vipin@gmail");

let student2 = new User("Ayush", "ayush@gmail.com")

let admin1 = new Admin("admin", "admin@College.com");

