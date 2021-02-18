const Router = require('express')
const auth_routes = require('./auth')

// guaranteed to get dependencies
module.exports = () => {
	const app = Router();
	auth_routes;
	return app;
};
