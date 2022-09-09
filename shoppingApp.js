const express = require('express');
const router = require('./shoppingRoutes');
const app = express();
app.use(express.json());

app.use('/items', router);

app.listen(3000, async function() {
	console.log('You are now running on port 3000');
});

module.exports = app;
