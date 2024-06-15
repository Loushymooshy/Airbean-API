
const { MenuModel } = require('../models/menuModel');

exports.updateMenuItem = async (req, res) => {
    const { itemID } = req.params;
    const { title, description, price, image } = req.body;

    try {
        const updatedMenuItem = await MenuModel.findByIdAndUpdate(
            itemID,
            { title, description, price, image },
            { new: true, runValidators: true }
        );

        if (!updatedMenuItem) {
            return res.status(404).send({ message: 'Menu item not found' });
        }

        res.send(updatedMenuItem);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};