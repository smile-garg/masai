function Animal() {  
    this.type = "Animal";  
}  

Animal.prototype.sound = function() {  
    console.log("Animal sound");  
};  

function Dog() {  
    Animal.call(this);  
}  

Dog.prototype = Object.create(Animal.prototype);  
Dog.prototype.constructor = Dog;  

Dog.prototype.sound = function() {  
    console.log("Bark");  
};  

const myDog = new Dog();  

myDog.sound(); 

function Person(name, age) {  
    this.name = name;  
    this.age = age;  
}  

Person.prototype.introduce = function() {  
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);  
};  

function Employee(name, age, jobTitle) {  
    Person.call(this, name, age);  
    this.jobTitle = jobTitle;  
}  

Employee.prototype = Object.create(Person.prototype);  
Employee.prototype.constructor = Employee;  

Employee.prototype.work = function() {  
    console.log(`${this.name} is working as a ${this.jobTitle}.`);  
};  

const person1 = new Person("Alice", 30);  
person1.introduce();  

const employee1 = new Employee("Bob", 25, "Software Engineer");  
employee1.introduce();  
employee1.work();  