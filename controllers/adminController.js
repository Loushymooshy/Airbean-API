// middleware/auth.js
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/userModel');

const jwtSecret = process.env.JWT_SECRET;

const adminAuth = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).send({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        const user = await UserModel.findById(decoded.userId);

        if (!user || user.role !== 'admin') {
            return res.status(403).send({ error: 'Access denied. Not an admin.' });
        }

        req.user = user;
        next();
    } catch (ex) {
        res.status(400).send({ error: 'Invalid token.' });
    }
};

module.exports = adminAuth;
