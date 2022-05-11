const express = require('express');
const dotenv = require('dotenv');



const app = express();


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/api/customers', (req, res) => {
//     res.send([1, 2, 3]);
// });

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});