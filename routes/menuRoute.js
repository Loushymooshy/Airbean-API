const { createMenuItem } = require('../controllers/createMenuItemController');
const { deleteMenuItem } = require('../controllers/DeleteMenuItemController');
const { updateMenuItem } = require('../controllers/updateMenuItemController.js');
const { getMenu } = require('../controllers/getMenuController');
const express = require('express');
const adminAuth = require('../controllers/adminController');

const router = express.Router();

// Routing for menu

router.get('/menu', getMenu);
router.post('/menu', adminAuth, createMenuItem); // Apply adminAuth middleware before createMenuItem
router.delete('/menu/:itemID', adminAuth, deleteMenuItem); // Apply adminAuth middleware before deleteMenuItem
router.put('/menu/:itemID', adminAuth, updateMenuItem);

module.exports = router;