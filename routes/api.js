// api items route

// reference express
const express = require('express');
const router = express.Router();

// create api get method with param
router.get('/:item_id', (req,res) => {
    // display view single item message
    res.send(`You attempted to view item ${req.params.item_id}`);
    
})

// create api get method
router.get('/', (req,res) => {
    // display view all items message
    res.send('You attempted to view all items');
})

// create api post method
router.post('/', (req,res) => {
    // display body of request. in the body, show json object with itemId, itemDescription, itemPrice
    res.send(req.body);
})

// export module
module.exports = router;