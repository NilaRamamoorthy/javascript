function Student(name, grades) {
    this.name = name;
    this.grades = grades;

    this.getAverage = function () {
        const sum = this.grades.reduce((acc, curr) => acc + curr, 0);;
        return sum/this.grades.length;
    };
    Student.prototype.total=function(){
        const total = this.grades.reduce((acc, curr) => acc + curr, 0);;
        return total;

    }
}
const student1 = new Student("Ajay", [85, 90, 78, 92]);
console.log(`Student: ${student1.name}`);
console.log(`Grades: ${student1.grades}`);
console.log(`Total: ${student1.total()}`);

console.log(`Average: ${student1.getAverage()}`);
