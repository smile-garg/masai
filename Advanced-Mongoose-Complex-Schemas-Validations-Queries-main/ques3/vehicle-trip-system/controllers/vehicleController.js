const Vehicle = require('../models/Vehicle');

// Vehicle CRUD
exports.createVehicle = async (req, res, next) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (err) {
    next(err);
  }
};

exports.getVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.updateVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.json(vehicle);
  } catch (err) {
    next(err);
  }
};

exports.deleteVehicle = async (req, res, next) => {
  try {
    const result = await Vehicle.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: "Vehicle not found" });
    res.json({ message: "Vehicle deleted" });
  } catch (err) {
    next(err);
  }
};

// Trip operations
exports.addTrip = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

    vehicle.trips.push(req.body);
    await vehicle.save();
    res.json(vehicle);
  } catch (err) {
    next(err);
  }
};

exports.updateTrip = async (req, res, next) => {
  try {
    const { id, tripId } = req.params;
    const vehicle = await Vehicle.findById(id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

    const trip = vehicle.trips.id(tripId);
    if (!trip) return res.status(404).json({ message: "Trip not found" });

    Object.assign(trip, req.body);
    await vehicle.save();
    res.json(trip);
  } catch (err) {
    next(err);
  }
};

exports.deleteTrip = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

    vehicle.trips.id(req.params.tripId).remove();
    await vehicle.save();
    res.json({ message: "Trip deleted" });
  } catch (err) {
    next(err);
  }
};

// Advanced Queries
exports.getVehiclesByDistance = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({ "trips.distance": { $gte: 200 } });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.getVehiclesByStartLocation = async (req, res, next) => {
  try {
    const cities = ['Delhi', 'Mumbai', 'Bangalore'];
    const vehicles = await Vehicle.find({ "trips.startLocation": { $in: cities } });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.getVehiclesByTripStartDate = async (req, res, next) => {
  try {
    const date = new Date("2024-01-01");
    const vehicles = await Vehicle.find({ "trips.startTime": { $gte: date } });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.getCarOrTruck = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({ type: { $in: ["car", "truck"] } });
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

exports.getTotalDistance = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

    const total = vehicle.totalDistance();
    res.json({ totalDistance: total });
  } catch (err) {
    next(err);
  }
};
