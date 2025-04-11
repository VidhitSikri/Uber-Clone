const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service');
const { sendMessageToSocketId } = require('../socket');
const rideModel = require('../models/ride.model');

module.exports.createRide = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;
    try{
        const ride = await rideService.createRide({
            user: req.user._id,
            pickup,
            destination,
            vehicleType
        });
        res.status(201).json(ride);

        const pickUpCoordinates = await mapService.getAddressCoordinate(pickup);
        console.log('Pickup coordinates:', pickUpCoordinates);

        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickUpCoordinates.lat, pickUpCoordinates.lng, 2);
        console.log('Captains in radius:', captainsInRadius);

        ride.otp = "";

        const rideWithUser = await rideModel.findById(ride._id).populate('user');

        captainsInRadius.map(async captain => {
            sendMessageToSocketId(captain.socketId,{
                event: 'new-ride',
                data: rideWithUser
            })
        });
    }

    catch(error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}

module.exports.getFare = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;
    try{
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }   
}


module.exports.confirmRide = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try{
        const ride = await rideService.confirmRide({ rideId, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        });
        return res.status(200).json(ride);
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports.startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, otp } = req.query;

    console.log('rideId:', rideId, 'otp:', otp);

    try {
        const ride = await rideService.startRide({ rideId, otp, captain: req.captain });

        console.log(ride);

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json( "internal fucking server error" );
    }
}