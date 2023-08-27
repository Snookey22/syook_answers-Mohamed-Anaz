const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// This is to Create a new item
router.post('/', async (req, res) => {
    try {
        const { name, price } = req.body;
        const item = new Item({ name, price });
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;
