//value of var can be changed anywhere in the program
var a=100
console.log("value of var a ="+a)
a=30
console.log("value of var a ="+a)
//const
const c=20
console.log("value of const c ="+c)
c=30 //throws an error since const values cannot be changed
{
    let b=200
    
console.log(b)
}
//b is undefined since its scope is within a {} here
console.log(b);




