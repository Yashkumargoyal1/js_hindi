// type of data we have two types
// 1. primitive(non refrencive datatype) == String , Number , Boolean , Undefined , Null,Symbol,BigInt

const id=Symbol('123');
const ifanother=Symbol('123');
console.log(id===ifanother);

let bignumber=1525n;// n is used to show the type is BigInt
console.log(typeof bignumber);  /// bigint




// 2. non-primitive(reference datatype) = object,function,array 
const heros=["shaktiman","gogo","chotabheam"];
console.log(typeof heros);
// OBJECT RETURN TYPE IS VARIABLE
let yash={
fname:" Mr.rajesh",
age:19,
}

// DEFINATION OF A FUNCTION
function name(params) {
    
}
const myFunction=function() {
    console.log("hello world");
}

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/ 
