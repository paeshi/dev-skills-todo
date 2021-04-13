// require our modules
const express = require('express');
const morgan = require('morgan');


// require cors module
const cors = require('cors');

// initialize the express app
const app = express();



// configure settings (app.set()

// require and configure our dotenv module

require('dotenv').config();

// require database config file
require('./config/database')


// mount middleware with app.use

app.use(morgan('dev'));
// this middleware receives json data and converts it to req.body:
app.use(express.json());
// call cors to get rid of cors error
app.use(cors());

// mount our routes with app.use
app.use('/api/skills', require('./routes/api/skills'));


// tell the app to listen on port 3001
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Express is listening for AJAX request on port ${port}`);
});