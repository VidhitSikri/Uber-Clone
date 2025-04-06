const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get("/create", 
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).notEmpty().withMessage('Pickup location cannot be empty'),
    body('destination').isString().isLength({ min: 3 }).notEmpty().withMessage('Dropoff location cannot be empty'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).notEmpty().withMessage('Vehicle type must be one of the following: auto, car, motorcycle'),
    rideController.createRide
);






module.exports = router;