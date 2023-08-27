const express = require('express');
const router = express.Router();
const DeliveryVehicle = require('../models/deliveryVehicle');

//  This is to Create a new delivery vehicle
router.post('/', async (req, res) => {
    try {
        const { registrationNumber, vehicleType, city } = req.body;
        const deliveryVehicle = new DeliveryVehicle({ registrationNumber, vehicleType, city });
        await deliveryVehicle.save();
        res.status(201).json(deliveryVehicle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// This is for Implement other CRUD routes for delivery vehicles

module.exports = router;
