//Task 66
let studname=["Nila","Anitha","Priya","Sasikala","Preeti"]
for(let val of studname){
console.log(val);
}
//Task 67
studname.push("Karthik")
console.log(studname);
//Task 68
studname.pop()
console.log(studname);
//Task 69
const uppername=studname.map(stud=>stud.toUpperCase())
console.log(uppername);
//Task 70
const filter=studname.filter(val=>val.startsWith("A"))
console.log(filter);
//Task 71
studname.forEach(val=>console.log(val));
console.log(typeof(studname));
console.log(Array.isArray(studname));




