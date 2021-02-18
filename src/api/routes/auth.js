
var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', checkApiWorking)

function checkApiWorking(req, res) {
	try {
        res.json({message:'API is working now',status:200});
	} catch (error) {
        console.log(error,"errors")
        return {
            status:500,
            message:"Something went wrong"
        }
	}
}

module.exports = router;



