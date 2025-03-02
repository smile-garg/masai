// Smart Home Management System  

// Device constructor function  
function Device(name, type) {  
    this.name = name;  
    this.type = type;  
    this.status = 'off';  
}  

Device.prototype.turnOn = function() {  
    this.status = 'on';  
    console.log(`${this.name} is now ON.`);  
};  

Device.prototype.turnOff = function() {  
    this.status = 'off';  
    console.log(`${this.name} is now OFF.`);  
};  

Device.prototype.checkStatus = function() {  
    console.log(`${this.name} is currently ${this.status}.`);  
};  

// SmartHome constructor function  
function SmartHome(owner) {  
    this.owner = owner;  
    this.devices = [];  
}  

SmartHome.prototype.addDevice = function(device) {  
    this.devices.push(device);  
    console.log(`${device.name} added to ${this.owner}'s smart home.`);  
};  

SmartHome.prototype.removeDevice = function(deviceName) {  
    this.devices = this.devices.filter(device => device.name !== deviceName);  
    console.log(`${deviceName} removed from ${this.owner}'s smart home.`);  
};  

SmartHome.prototype.listDevices = function() {  
    console.log(`Devices in ${this.owner}'s smart home:`);  
    this.devices.forEach(device => console.log(`- ${device.name} (${device.type})`));  
};  

// SmartDevice constructor function  
function SmartDevice(name, type, brand, connectivity) {  
    Device.call(this, name, type);  
    this.brand = brand;  
    this.connectivity = connectivity;  
}  

SmartDevice.prototype = Object.create(Device.prototype);  
SmartDevice.prototype.constructor = SmartDevice;  

// Simulate fetching firmware update  
SmartDevice.prototype.updateFirmware = async function() {  
    console.log(`Updating firmware for ${this.name}...`);  
    // Simulating a network request  
    await new Promise(resolve => setTimeout(resolve, 2000));  
    console.log(`${this.name} firmware updated successfully.`);  
};  

SmartDevice.prototype.checkConnectivity = function() {  
    console.log(`${this.name} connectivity status: ${this.connectivity}`);  
};  

// SmartLight constructor function  
function SmartLight(name, brand, connectivity, brightness, color) {  
    SmartDevice.call(this, name, 'Light', brand, connectivity);  
    this.brightness = brightness;  
    this.color = color;  
}  

SmartLight.prototype = Object.create(SmartDevice.prototype);  
SmartLight.prototype.constructor = SmartLight;  

SmartLight.prototype.adjustBrightness = function(newBrightness) {  
    this.brightness = newBrightness;  
    console.log(`${this.name} brightness adjusted to ${this.brightness}.`);  
};  

SmartLight.prototype.changeColor = function(newColor) {  
    this.color = newColor;  
    console.log(`${this.name} color changed to ${this.color}.`);  
};  

// SmartThermostat constructor function  
function SmartThermostat(name, brand, connectivity, temperature, mode) {  
    SmartDevice.call(this, name, 'Thermostat', brand, connectivity);  
    this.temperature = temperature;  
    this.mode = mode;  
}  

SmartThermostat.prototype = Object.create(SmartDevice.prototype);  
SmartThermostat.prototype.constructor = SmartThermostat;  

SmartThermostat.prototype.setTemperature = function(newTemperature) {  
    this.temperature = newTemperature;  
    console.log(`${this.name} temperature set to ${this.temperature}°C.`);  
};  

SmartThermostat.prototype.changeMode = function(newMode) {  
    this.mode = newMode;  
    console.log(`${this.name} mode changed to ${this.mode}.`);  
};  

// User constructor function  
function User(username, password) {  
    this.username = username;  
    this.password = password;  
    this.smartHome = null;  
}  

User.prototype.authenticate = async function() {  
    console.log(`Authenticating user ${this.username}...`);  
    // Simulating a network request  
    await new Promise(resolve => setTimeout(resolve, 1000));  
    console.log(`User ${this.username} authenticated successfully.`);  
};  

User.prototype.createSmartHome = function() {  
    this.smartHome = new SmartHome(this.username);  
    console.log(`Smart home created for user ${this.username}.`);  
};  

User.prototype.addDeviceToHome = function(device) {  
    if (this.smartHome) {  
        this.smartHome.addDevice(device);  
    } else {  
        console.log(`No smart home found for user ${this.username}.`);  
    }  
};  

// Demonstration  
(async function() {  
    // Create user  
    const user = new User('john_doe', 'password123');  
    await user.authenticate();  
    user.createSmartHome();  

    // Create devices  
    const livingRoomLight = new SmartLight('Living Room Light', 'Philips', 'Wi-Fi', 75, 'Warm White');  
    const bedroomThermostat = new SmartThermostat('Bedroom Thermostat', 'Nest', 'Wi-Fi', 22, 'Heating');  

    // Add devices to smart home  
    user.addDeviceToHome(livingRoomLight);  
    user.addDeviceToHome(bedroomThermostat);  

    // List devices  
    user.smartHome.listDevices();  

    // Control devices  
    livingRoomLight.turnOn();  
    livingRoomLight.adjustBrightness(100);  
    bedroomThermostat.setTemperature(20);  
    bedroomThermostat.changeMode('Cooling');  

    // Update firmware  
    await livingRoomLight.updateFirmware();  
    await bedroomThermostat.updateFirmware();  

    // Check connectivity  
    livingRoomLight.checkConnectivity();  
    bedroomThermostat.checkConnectivity();  
})();  