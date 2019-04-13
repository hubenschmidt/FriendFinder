//dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//set up express app
var app = express();
var PORT = process.env.PORT || 3000;

//set up express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//serve static css from public folder
app.use(express.static('app/public'))

//router
require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

//listener
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
})

