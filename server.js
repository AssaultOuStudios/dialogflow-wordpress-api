const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3100;

let app = express();
app.use(bodyParser.json());

app.post('/', (req, res, next) => {
	
	let action = req.body.result.action;
	let message = action === 'get.wp.content' ? `Hey, our webhook is connected!` : `Sorry, I didn't get that`;
	
	res.send({
		speech: message,
		displayText: message,
		source: 'wp-webhook',
	});
	
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});
