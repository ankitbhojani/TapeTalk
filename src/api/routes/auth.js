
var express = require('express');
var router = express.Router();
const User = require('../../models/user');

// Authentication Routes
router.post('/signUp', signUp)
router.post('/signIn', signIn)

async function signUp(req, res) {
	try {
        let user = await User.find({});
        res.json({message:'API is working now',status:200,data:user});
	} catch (error) {
        console.log(error,"errors")
        return {
            status:500,
            message:"Something went wrong"
        }
	}
}


function signIn(req, res) {
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



