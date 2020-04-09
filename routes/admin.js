// admin route

// reference express
const express = require('express');
const router = express.Router();

// create admin get method with param
router.get('/:username', (req,res) => {
    // display welcome back message
    res.send(`Welcome back ${req.params.username}`);
})
// !! your delete path should be user/:username
// create admin delete request with params
router.delete('/:username', (req,res) => {
    // display delete message
    res.send(`You attempted to delete the user ${req.params.username}`);
})

// create admin put request with the path '/user/[user-id]'
router.put('/user/:username', (req,res) => {
    // display req body. same from api
    res.send(req.body);
})

// export module
module.exports = router;