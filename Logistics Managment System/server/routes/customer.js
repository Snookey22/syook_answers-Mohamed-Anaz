const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

//  This is to Create a new customer
router.post('/', async (req, res) => {
    try {
        const { name, city } = req.body;
        const customer = new Customer({ name, city });
        await customer.save();
        res.status(201).json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
