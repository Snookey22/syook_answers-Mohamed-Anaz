Logistics Management System
Description: This is a logistics management system for handling orders, customers, delivery vehicles, and items. It provides functionality for placing orders, managing customers, tracking delivery vehicles, and more.

Table of Contents
Getting Started
Prerequisites
Installation
Usage
Features
API Endpoints
Contributing
License
Features
Create, read, update, and delete items, customers, delivery vehicles, and orders.
Place orders with automatic assignment of delivery vehicles.
Check vehicle availability and track active orders per vehicle.
Mark orders as delivered, updating delivery vehicle status.
API Endpoints
Items: /api/items

POST: Create a new item
GET: Retrieve all items
PUT: Update an item
DELETE: Delete an item
Customers: /api/customers

POST: Create a new customer
GET: Retrieve all customers
PUT: Update a customer
DELETE: Delete a customer
Delivery Vehicles: /api/delivery-vehicles

POST: Create a new delivery vehicle
GET: Retrieve all delivery vehicles
PUT: Update a delivery vehicle
DELETE: Delete a delivery vehicle
Orders: /api/orders

POST: Place a new order
GET: Retrieve all orders
PUT: Update an order
DELETE: Delete an order
