// CallBack 

function sum(a , b) {
    console.log(a + b);
    
}
function Calculator(a , b , sumCallback ) {
    sumCallback(a,b );

}
Calculator(20, 56 ,sum)




///// ----- 


const hello  = ()=>{
    console.log("Hello");
    
}

setTimeout(hello,3000);



const Sum =()=>{
    console.log("vipin ");
    
}

setTimeout(Sum,4000)


///////=====-------

function Add( a, b) {
    console.log(a -b);
    
}
function Cal(a , b , Calcal) {
    Calcal(a , b)
}

Cal(45 ,20, Add)










///


const DD = () => {
    console.log("Jay Shree Ram");
};

setTimeout(() => {
    DD();   // call your function after 3 seconds
}, 3000);



///


/// nesting


let age  = 10

if (age>=18) {
    if (age>=60) {
        console.log("Senior");
        
    } else {
        console.log("middle");
        
    }
} else {
 console.log("child");
    
}















