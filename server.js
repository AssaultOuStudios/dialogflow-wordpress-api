const express = require('express');
const bodyParser = require('body-parser');

const wordpress = require('lib/wordpress/wordpress');

const port = process.env.PORT || 3100;

let app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res, next) => {
	
	let action = req.body.result.action;
	let tag = parseInt(req.body.result.parameters.tags);
	let message = wordpress.getPosts(tag);
	
	res.send({
		speech: message,
		displayText: message,
		source: 'wp-webhook',
	});
	
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});
