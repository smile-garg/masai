function greet() {
    console.log("Hello, " + this.name);
  }
  
  function setTimeoutGreeting(person) {
    let boundGreet = greet.bind(person);
    setTimeout(boundGreet, 1000);
  }
  
  let person = { name: "Alice" };
  
  setTimeoutGreeting(person);
  