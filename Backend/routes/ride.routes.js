const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


router.get("/create", 
    body('userId').isString().isLength({ min: 24, max: 24 }).notEmpty().withMessage('User ID must be a 24 character string and cannot be empty'),
    body('pickup').isString().isLength({ min: 3 }).notEmpty().withMessage('Pickup location cannot be empty'),
    body('destination').isString().isLength({ min: 3 }).notEmpty().withMessage('Dropoff location cannot be empty'),
    
);






module.exports = router;