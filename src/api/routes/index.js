const express = require('express')
var app = express.Router();
var wiki = require('./auth');
// ...

module.exports = () => {
	app.use('/hiii', wiki);
	return app;
}

