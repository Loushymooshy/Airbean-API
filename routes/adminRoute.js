// routes/admin.js
const express = require('express');
const router = express.Router();
const { MenuModel: Product } = require('../models/menuModel');
const Campaign = require('../models/campaignModel');
const adminAuth = require('../controllers/adminController');

// Lägg till en ny produkt
router.post('/menu', adminAuth, async (req, res) => {
    const { title, desc, price } = req.body;
    if (!title || !desc || !price) {
        return res.status(400).send({ error: 'All fields are required.' });
    }

    const product = new Product({ title, desc, price, createdAt: new Date() });
    try {
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send({ error: 'Failed to add product.' });
    }
});

// Ändra en produkt
router.put('/menu/:itemID', adminAuth, async (req, res) => {
    const updates = req.body;
    updates.modifiedAt = new Date();

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, updates, { new: true });
        if (!product) {
            return res.status(404).send({ error: 'Product not found.' });
        }
        res.send(product);
    } catch (error) {
        res.status(400).send({ error: 'Failed to update product.' });
    }
});

// Ta bort en produkt
router.delete('/menu/:itemID', adminAuth, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send({ error: 'Product not found.' });
        }
        res.send({ message: 'Product deleted.' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete product.' });
    }
});

// Lägg till ett kampanjerbjudande
router.post('/campaign', adminAuth, async (req, res) => {
    const { products, price } = req.body;
    if (!products || !price) {
        return res.status(400).send({ error: 'All fields are required.' });
    }

    try {
        const existingProducts = await Product.find({ _id: { $in: products } });
        if (existingProducts.length !== products.length) {
            return res.status(400).send({ error: 'One or more products do not exist.' });
        }

        const campaign = new Campaign({ products, price });
        await campaign.save();
        res.status(201).send(campaign);
    } catch (error) {
        console.error(error.message);
        console.error(error.stack);
        res.status(500).send({ error: 'Failed to add campaign.' });
    }
});

module.exports = router;
