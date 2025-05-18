const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/vehicleController');

// Vehicle CRUD
router.post('/vehicles', ctrl.createVehicle);
router.get('/vehicles', ctrl.getVehicles);
router.put('/vehicles/:id', ctrl.updateVehicle);
router.delete('/vehicles/:id', ctrl.deleteVehicle);

// Trip management
router.post('/vehicles/:id/trips', ctrl.addTrip);
router.put('/vehicles/:id/trips/:tripId', ctrl.updateTrip);
router.delete('/vehicles/:id/trips/:tripId', ctrl.deleteTrip);

// Queries
router.get('/vehicles/trips/long', ctrl.getVehiclesByDistance);
router.get('/vehicles/trips/cities', ctrl.getVehiclesByStartLocation);
router.get('/vehicles/trips/from-2024', ctrl.getVehiclesByTripStartDate);
router.get('/vehicles/type/car-truck', ctrl.getCarOrTruck);

// Instance method
router.get('/vehicles/:id/total-distance', ctrl.getTotalDistance);

module.exports = router;
