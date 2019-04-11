//load data
var friendsData = require('../data/friends')

//routing_____________________________________

//api GET requests
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json()
        console.log(res.json())
    })
}

