// Constructor function for Car  
function Car(make, model, year, isAvailable = true) {  
    this.make = make;  
    this.model = model;  
    this.year = year;  
    this.isAvailable = isAvailable;  
}  

// Constructor function for Customer  
function Customer(name, rentedCars = []) {  
    this.name = name;  
    this.rentedCars = rentedCars;  
}  

// Method to rent a car  
Customer.prototype.rentCar = function(car) {  
    if (car.isAvailable) {  
        car.isAvailable = false;  
        this.rentedCars.push(car);  
        console.log(`${this.name} has rented a ${car.make} ${car.model}.`);  
    } else {  
        console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);  
    }  
};  

// Method to return a car  
Customer.prototype.returnCar = function(car) {  
    const carIndex = this.rentedCars.indexOf(car);  
    if (carIndex !== -1) {  
        car.isAvailable = true;  
        this.rentedCars.splice(carIndex, 1);  
        console.log(`${this.name} has returned a ${car.make} ${car.model}.`);  
        // Simulate delay in processing return  
        setTimeout(() => {  
            console.log(`Return processed for ${car.make} ${car.model}.`);  
        }, 2000);  
    } else {  
        console.log(`This car was not rented by ${this.name}.`);  
    }  
};  

// Constructor function for PremiumCustomer  
function PremiumCustomer(name, discountRate, rentedCars = []) {  
    Customer.call(this, name, rentedCars); // Call the parent constructor  
    this.discountRate = discountRate;  
}  

// Inherit from Customer  
PremiumCustomer.prototype = Object.create(Customer.prototype);  
PremiumCustomer.prototype.constructor = PremiumCustomer;  

// Function to calculate rental prices  
function calculateRentalPrice(carType, days, isPremium = false) {  
    const basePricePerDay = 50;  
    const rates = {  
        'SUV': 70,  
        'Sedan': 50,  
        'Truck': 90  
    };  
    
    let price = (rates[carType] || basePricePerDay) * days;  

    if (isPremium) {  
        price -= price * (this.discountRate / 100);  
    }  

    return price;  
}  

// Maintenance function  
function Maintenance(car, delay) {  
    setTimeout(() => {  
        car.isAvailable = true;  
        console.log(`Maintenance completed for ${car.make} ${car.model}. It is now available.`);  
    }, delay);  
}  

// Demonstration of functionality  
const car1 = new Car('Toyota', 'Corolla', 2020);  
const car2 = new Car('Honda', 'Civic', 2021);  
const car3 = new Car('Ford', 'Explorer', 2022);  

const customer1 = new Customer('Alice');  
const premiumCustomer = new PremiumCustomer('Bob', 10); // 10% discount  

// Renting cars  
customer1.rentCar(car1);  
premiumCustomer.rentCar(car2);  
premiumCustomer.rentCar(car3); // Should log that car3 is not available  

// Returning cars  
customer1.returnCar(car1);  
premiumCustomer.returnCar(car2);  

// Calculate rental prices  
const rentalPrice1 = calculateRentalPrice.call(premiumCustomer, 'SUV', 3, true);  
console.log(`Rental price for Premium Customer: $${rentalPrice1}`);  

const rentalPrice2 = calculateRentalPrice.call(customer1, 'Sedan', 2);  
console.log(`Rental price for Regular Customer: $${rentalPrice2}`);  

// Handling maintenance  
const car4 = new Car('Chevrolet', 'Tahoe', 2023, false); // Currently not available  
const maintenanceTask = new Maintenance(car4, 3000); // 3 seconds delay  