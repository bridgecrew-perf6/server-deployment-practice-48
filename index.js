'use strict';

require('dotenv').config();

const server = require('./server');
//this needs to call a processenv to make heroku work
process.env.PORT || 3001