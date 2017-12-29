// Modules
const express = require('express');
const bodyParser = require('body-parser');

// Imports
//const chatbase = require(__dirname + '/lib/chatbase/chatbase');

// Set port for server
const port = process.env.PORT || 3100;

// Express set up
let app = express();
app.use(bodyParser.json());

// Receive a message and send to API.ai
app.post('/webhook', (req, res, next) => {
	
});

// Start server
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});
