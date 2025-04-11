const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post("/create", 
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).notEmpty().withMessage('Pickup location cannot be empty'),
    body('destination').isString().isLength({ min: 3 }).notEmpty().withMessage('Dropoff location cannot be empty'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).notEmpty().withMessage('Vehicle type must be one of the following: auto, car, motorcycle'),
    rideController.createRide
);


router.get("/get-fare",
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).notEmpty().withMessage('Pickup location cannot be empty'),
    query('destination').isString().isLength({ min: 3 }).notEmpty().withMessage('Dropoff location cannot be empty'),
    rideController.getFare
)


router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isString().isMongoId().withMessage('Invalid ride ID'),
    rideController.confirmRide
)






module.exports = router;