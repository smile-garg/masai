// Base constructor for Product  
function Product(name, price, quantity) {  
    this.name = name;  
    this.price = price;  
    this.quantity = quantity;  
}  

Product.prototype.getDetails = function() {  
    return `Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;  
};  

Product.prototype.updateQuantity = function(amount) {  
    this.quantity += amount;  
};  

// Constructor for Electronics  
function Electronics(name, price, quantity, brand, model) {  
    Product.call(this, name, price, quantity); // Call the base constructor  
    this.brand = brand;  
    this.model = model;  
}  

// Inherit from Product  
Electronics.prototype = Object.create(Product.prototype);  
Electronics.prototype.constructor = Electronics;  

// Additional methods for Electronics  
Electronics.prototype.powerOn = function() {  
    console.log(`${this.brand} ${this.model} powered on.`);  
};  

Electronics.prototype.powerOff = function() {  
    console.log(`${this.brand} ${this.model} powered off.`);  
};  

// Constructor for Clothing  
function Clothing(name, price, quantity, size, color) {  
    Product.call(this, name, price, quantity); // Call the base constructor  
    this.size = size;  
    this.color = color;  
}  

// Inherit from Product  
Clothing.prototype = Object.create(Product.prototype);  
Clothing.prototype.constructor = Clothing;  

// Method specific to Clothing  
Clothing.prototype.displaySize = function() {  
    console.log(`Size: ${this.size}, Color: ${this.color}`);  
};  

// Constructor for Books  
function Books(name, price, quantity, author, genre) {  
    Product.call(this, name, price, quantity); // Call the base constructor  
    this.author = author;  
    this.genre = genre;  
}  

// Inherit from Product  
Books.prototype = Object.create(Product.prototype);  
Books.prototype.constructor = Books;  

// Method specific to Books  
Books.prototype.getAuthor = function() {  
    console.log(`Author: ${this.author}, Genre: ${this.genre}`);  
};  

// Example usage  
const phone = new Electronics('Smartphone', 699, 10, 'BrandX', 'X100');  
console.log(phone.getDetails());  
phone.powerOn();  
phone.updateQuantity(-1);  
console.log(phone.getDetails());  

const tshirt = new Clothing('T-Shirt', 19.99, 50, 'M', 'Red');  
console.log(tshirt.getDetails());  
tshirt.displaySize();  
tshirt.updateQuantity(-5);  
console.log(tshirt.getDetails());  

const book = new Books('Learn JavaScript', 29.99, 100, 'John Doe', 'Programming');  
console.log(book.getDetails());  
book.getAuthor();  
book.updateQuantity(-2);  
console.log(book.getDetails());  