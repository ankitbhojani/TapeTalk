require('./db');
const bodyParser = require('body-parser');
const express = require('express');
// var PostMessageRoutes = require('./controller/postMessageController')
var app = express();
var cors = require('cors');
const config = require('./src/config')
const auth = require('./src/api/routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.listen(config.port,() => {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${config.port}   🛡️
    ################################################
  `);
});
// Load API routes
app.use(config.api.prefix, auth());