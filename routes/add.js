var data = require("../data.json");

exports.addFriend = function(request, response) {  
	var name = request.query.name;
	var description = request.query.description;
	var img = "http://lorempixel.com/400/400/people"; 
	var newFriend = { 'name': name, 'description': description, 'imageURL' : img }; 
	data.friends.push(newFriend);
	response.render('index', data);
	//response.render('index', JSONobj);
 };
