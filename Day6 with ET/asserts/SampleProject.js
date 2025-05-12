let studentDetails=[{
    name:"John",
    age:20,
    mark:78
},
{
    name:"Alex",
    age:20,
    mark:87
},
{
    name:"Alen",
    age:20,
    mark:89
},
{
    name:"Max",
    age:20,
    mark:95
}]
let total=0;
console.log("Student Details: ");
studentDetails.forEach(student=>
{
    console.log(`Name: ${student.name}, Age: ${student.age}, Marks: ${student.mark}`);
    
    total+=student.mark
}
)
console.log("Student Average: "+ total);

