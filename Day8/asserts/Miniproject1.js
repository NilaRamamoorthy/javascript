const firstName=prompt("Enter First Name");
const lastName=prompt("Enter Last Name");
function userName(firstName,lastName) {
let first=firstName.slice(0,3);
let last=lastName.slice(0,3);
let random=Math.floor(Math.random()*900)+100;
const userName=first+last+random;
return userName
}

console.log(userName(firstName,lastName));

