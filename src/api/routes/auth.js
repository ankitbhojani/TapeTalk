const Router = require('express');
const route = Router();
const app = Router();
const auth_routes = (app) => {
    app.use('/auth', route);
    route.get('/hii', checkApiWorking);
}

function checkApiWorking(req, res) {
	try {
        console.log("hiii")
        return {
            status:200,
            message:"Bhaag"
        }
	} catch (error) {
        console.log(error,"errors")
        return {
            status:500,
            message:"Something went wrong"
        }
	}
}

module.exports =  auth_routes(app);

