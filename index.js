// express-router-cw

// reference express
const express = require('express');
const app = express();
app.use(express.json());

// import routes
const api = require('./routes/api');
const admin = require('./routes/admin');

// mount routes
app.use('/api',api);
app.use('/admin',admin);

// listen to server
const port = 8000;
const host = 'localhost';
// !! no need to pass a host name
app.listen(port, host, () => {
    console.log(`listening to port ${port}`);
})