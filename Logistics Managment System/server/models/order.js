const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber: { type: Number, unique: true, required: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    price: { type: Number, required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    deliveryVehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryVehicle', required: true },
    isDelivered: { type: Boolean, default: false },
    invoiceId: { type: String }, // If required
});

module.exports = mongoose.model('Order', orderSchema);
