const express = require('express');
const mongoose = require('mongoose');
const app = express();

// This is to Configure middleware, routes, and error handling here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb://localhost/logistics', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});
