const express = require('express');

const bodyParser = require('body-parser');
const dotenv = require('dotenv');




const app = express();
app.use(bodyParser.json());


// app.get('/', (req, res) => {  
//     res.send('Hello World!');
// });

// app.get('/employees', (req, res) => {
//     res.send('Hello');
// });

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

//route
app.use('/', require('./routes/index'));

app.listen(5000, () => {
    console.log('Server started on port 5000');
});