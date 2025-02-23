function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.displayInfo = function () {
      console.log(this.name + " is " + this.age + " years old");
    };
  }
  
  let person = new Person("Alice", 25);
  let boundDisplay = person.displayInfo.bind(person);
  boundDisplay();
  