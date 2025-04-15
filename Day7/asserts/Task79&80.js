function Person(name,age){
    this.name=name,
    this.age=age,
    this.greet = function() {
    return `Hi, I'm ${name} and I'm ${age} years old.`;
  };

}
let person1=new Person("Vixen",32)
let person2=new Person("Max",36)
let person3=new Person("Marvel",35)
let person4=new Person("Harry",37)

console.log(person2.greet());
