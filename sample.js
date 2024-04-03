// Import required modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemon = require('nodemon');

// Create an Express application
const app = express();

// Check if all components are present
const components = {
    express: !!express,
    cors: !!cors,
    mongoose: !!mongoose,
    nodemon: !!nodemon
};

// Display the presence of installed components
console.log('Presence of Installed Components:');
console.log('Express:', components.express);
console.log('Cors:', components.cors);
console.log('Mongoose:', components.mongoose);
console.log('Nodemon:', components.nodemon);
