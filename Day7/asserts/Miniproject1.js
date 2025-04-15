function Employee(name,position,salary){
  this.name=name;
  this.position=position;
  this.salary=salary;
  this.salaryIncrease=function (increase){
      this.salary+=increase;
  };
  }
  
  const employees = [
      new Employee("Alice", "Manager", 50000),
      new Employee("Bob", "Developer", 40000),
      new Employee("Charlie", "Designer", 38000)
    ];
  
    employees[1].salaryIncrease(2000)
    console.log(employees);
    
    function display(empList) {
      console.log("Name\t\t\tPosition\t\tSalary");
      console.log("--------------------------------------");
      empList.forEach(emp => {
        console.log(`${emp.name}\t\t\t${emp.position}\t\t₹${emp.salary}`);
      });
    }
    display(employees)