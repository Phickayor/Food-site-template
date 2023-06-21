const foods = require('../foods')
exports.food = (req, res) => {
    res.send(foods);
}