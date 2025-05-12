
 let fruits=["Apple","Banana","Orange"]
//Task 1
 fruits.push("Mango")
console.log(fruits);
//Task 2
let inde=fruits.indexOf("Orange")
console.log(inde);
console.log(fruits.splice(inde,1));
console.log(fruits);
//Task 3
fruits.unshift("Pineapple")
console.log(fruits);
//Task 4
let ind=fruits.indexOf("Apple")
console.log(ind);
console.log(fruits.splice(ind,1));
console.log(fruits);
//Task 5
console.log(fruits.indexOf("Banana"));
//Task 6
let check=fruits.some((val)=>val=="Grapes")
console.log(check);
//Task 7
let fruitcopy=fruits
console.log(fruitcopy);
//Task 8
let fruits1=["Grapes","Kiwi"]
let newFruits=fruits.concat(fruits1)
console.log(newFruits);
//Task 9
console.log(newFruits.slice(0,2));
//Task 10
let replace=newFruits.indexOf("Banana");
newFruits[replace]="Strawberry"
console.log(newFruits);
//Task 11
console.log(newFruits.reverse());
//Task 12
console.log(newFruits.sort());
//Task 13
const newFruitArray=newFruits.map((val)=>val.charAt(0).toUpperCase()+val.slice(1).toLowerCase());
console.log(newFruitArray);
//Task 14
let a=newFruits.filter(val=>val.toLowerCase().includes("a"))
console.log(a);
//Task 15
newFruits.forEach((val)=>{console.log(val);});
//Task 16
let char=newFruits.every((val)=>val.length>3)
console.log(char);
//Task 17
let find=newFruits.find(val=>val.startsWith("O"))
console.log(find,"Since no orange in the fruit array");
//Task 18
console.log(newFruits.join(","));
//Task 19
console.log(fruits.splice(1,1));
//Task 20
let nestedFruits=["Apple",["Banana","Orange","Grapes"]]
console.log(nestedFruits.flat(1));


