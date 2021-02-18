const mongoose = require('mongoose');
const config = require('./src/config')
mongoose.connect(config.MONGO_HOST,{useNewUrlParser:true,useUnifiedTopology:true},(err) => {
    if(!err){
        console.log("MongoDB Connection Succeeded");
    } else {
        console.log("Error occurred while connecting :- "+JSON.stringify(err,undefined,2))
    }
})