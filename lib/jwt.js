const jwt = require('jsonwebtoken');
const SECRET_KEY = 'rahasia';

// Generate Token after Login Success 
const generateToken = (payload) => {
    return jwt.sign(payload,SECRET_KEY);
}

// Decode Token For Authentication
const verifyToken = (token) => {
    return jwt.verify(token,SECRET_KEY);
}

module.exports = {generateToken,verifyToken};