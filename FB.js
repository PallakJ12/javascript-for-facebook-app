// 1. Create an array which contains the object of the username and password and name the array "database"
var database = [
	{
		username: "jasmine",
		password: "supersecret",
	},
	{
		username: "David",
		password: "456789",
	},
	{
		username: "Sally",
		password: "@1234",
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

function isUserValid (username,password) {
	for(var i=0; i <database.length; i++ ) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}
function signIn (username,password) {
	if(isUserValid(username,password)) {
		console.log (newsfeed);
	} else {
		alert("Sorry! wrong username or password");
	}
	}

var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(usernamePrompt,passwordPrompt);