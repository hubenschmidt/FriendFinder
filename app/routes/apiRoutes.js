//load data
var friendsData = require('../data/friendsData')
var questionsData = require('../data/questions')

//export API routing
module.exports = function (app) {

    //api GET requests displays JSON of all possible friends.
    app.get('/api/friends', function (req, res) {
        res.json(friendsData)

    })
    //api GET request displays JSON of survey questions
    app.get('/api/questions', function (req, res) {
        res.json(questionsData)
    })

    //api POST requests handles incoming survey results and compatibility logic
    app.post('/api/friends', function (req, res) {

        //match object stores best match
        var match = {
            name: "",
            photo: "",
            friendDifference: 99999 //set initial value
        };
        var totalDifference = 0;

        //user submitted data
        var user = req.body;
        var surveyResults = req.body.scores

        // covert scores array to simply array of numbers using parseInt
        for (var i = 0; i < surveyResults.length; i++) {
            surveyResults[i] = parseInt(surveyResults[i]);
        }

        //loop through the friendsData array
        for (i = 0; i < friendsData.length; i++) {
            //loop through surveyResults array
            for (var j = 0; j < surveyResults.length; j++) {

                totalDifference = difference(surveyResults, friendsData[i].scores);
            }
    
            //compare results and if lowest, assign user to match object
            if (totalDifference <= match.friendDifference) {
                match.name = friendsData[i].name;
                match.photo = friendsData[i].photo;
                match.friendDifference = totalDifference;
            }
        }
        //push user data to friends database after performing check
            friendsData.push(user);

      res.json(match);
    })

    function difference(arr1, arr2) {
        // store difference between array values
        var arrayDifference = 0;
        for (var i = 0; i < arr1.length; i++) {
            arrayDifference += Math.abs(arr1[i] - arr2[i]);
        }
        return arrayDifference;
    }
};