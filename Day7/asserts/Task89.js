function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
  
    this.getDetails = function() {
      return `${this.name} earns Rs.${this.salary} per month`;
    };
  }
  function Manager(name, salary, department) {
    Employee.call(this,name, salary);
  
    this.department = department;
  
    this.getManagerDetails = function() {
      return `${this.name} is in the ${this.department} department`;
    };
  }
  const emp = new Employee("Alice", 50000);
  console.log(emp.getDetails()); 
  const mgr = new Manager("Bob", 80000, "HR");
  console.log(mgr.getDetails()); 
  console.log(mgr.getManagerDetails()); 
 
  