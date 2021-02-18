const express = require('express')
var app = express.Router();
var auth = require('./auth');

module.exports = () => {
	app.use('/auth', auth);
	return app;
}

