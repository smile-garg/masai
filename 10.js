function personInfo() {
    console.log(this.name + " is " + this.age + " years old");
  }
  
  let person = { name: "Alice", age: 25 };
  
  personInfo.call(person);
  