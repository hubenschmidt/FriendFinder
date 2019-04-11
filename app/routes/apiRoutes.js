//load data
var friendsData = require('../data/friendsData')
var questionsData = require('../data/questions')

//routing_____________________________________

//api GET requests displays JSON of all possible friends.
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friendsData)
      
    })

    app.get('/api/questions', function(req, res){
        res.json(questionsData)
    })

    //api POST requests handles incoming survey results and compatibility logic
app.post('/api/friends', function(req, res){
    //post request logic goes here
    console.log('this works')

})
}

