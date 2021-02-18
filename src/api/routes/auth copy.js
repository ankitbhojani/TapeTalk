
var express = require('express');
var router = express.Router();
const User = require('../../models/user');
const bcyrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const signUpSchema = require('../validation/signUpSchema');
const signInSchema = require('../validation/signInSchema');

// Authentication Routes
router.post('/signUp', signUp)
router.post('/signIn', signIn)

async function signUp(req, res) {
	try {
        const data = req.body;
        let user = await User.findOne({
            email:req.body.email
        });
        if (user) {
            return res.json({
                status:409,
                message: "User Already Exists",
                data:null,
            });
        }

        user = new User(data);

        await user.save();

        const payload = {
            user: {
                id: user._id
            }
        };

        jwt.sign(
            payload,
            "randomString", {
                expiresIn: 10000
            },
            (err, token) => {
                if (err) throw err;
                res.json({
                    status : 201,
                    message : "SignUp Successfully",
                    data : {
                        user : {
                            token : token,
                            username : user.username,
                            gender : user.gender,
                            email : user.email,
                            status : user.status,
                        }
                    }
                })
            }
        );
    } catch (err) {
        console.log(err,"error");
        res.json({status:500,message:"Something went wrong"});
    }
}


async function signIn(req, res) {
	try {
        let user = await User.findOne({
            email:req.body.email
          });
          if (!user)
            return res.status(400).json({
              status:400,
              message: "User Not Exist",
              data:null
            });
    
          const isMatch = await bcyrpt.compare(req.body.password, user.password);
          if (!isMatch)
            return res.json({
              message: "Incorrect Password!",
              status:400,
              data:null
            });
    
          const payload = {
            user: {
              id: user._id
            }
          };
    
          jwt.sign(
            payload,
            "randomString",
            {
              expiresIn: 3600
            },
            (err, token) => {
              if (err) throw err;
              res.json({
                status : 201,
                message : "SignIn Successfully",
                data : {
                    user : {
                        token : token,
                        username : user.username,
                        gender : user.gender,
                        email : user.email,
                        status : user.status,
                    }
                }
             })
            }
          );
	} catch (error) {
        console.log(error,"errors")
        return {
            status:500,
            message:"Something went wrong"
        }
	}
}

module.exports = router;



