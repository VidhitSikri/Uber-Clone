const express = require('express');
const router = express.Router();
const mapController = require('../controllers/maps.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { query } = require('express-validator');

router.get('/get-coordinates', query('address').isString().isLength({ min: 3 }).withMessage('Address must be at least 3 characters long') ,     authMiddleware.authUser, mapController.getCoordinates);


router.get('/get-distance-time', query('origin').isString().isLength({ min: 3 }).withMessage('Origin must be at least 3 characters long'), query('destination').isString().isLength({ min: 3 }).withMessage('Destination must be at least 3 characters long'), authMiddleware.authUser, mapController.getDistanceAndTime);


router.get('/get-suggestions', query('input').isString().isLength({ min: 3 }).withMessage('Input must be at least 3 characters long'), authMiddleware.authUser, mapController.getSuggestions);










module.exports = router;