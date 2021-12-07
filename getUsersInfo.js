"use strict";
exports.__esModule = true;
var readline = require("readline");
var users_1 = require("./users");
var prop = require(" ../testData/userData.json");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('are you a registered user or non registered user?', function (answer) {
    if (answer == 'yes') {
        rl.question('Please enter ur userName and ur password seperated by comma?', function (answer1) {
            var splitFloat = answer1.split(",");
            for (var i = 0; i < splitFloat.length; i++) {
                splitFloat[i] = parseFloat(splitFloat[i]);
            }
            var user = new users_1["default"];
            user.userName = splitFloat[0];
            user.password = splitFloat[1];
            var userName1 = prop.loggedUsers.userName;
            var password1 = prop.loggedUsers.password;
            if (user.userName == userName1 && user.password == password1) {
                console.log('Welcome ' + user.userName);
            }
            else {
                console.log('Wrong userName or password');
            }
        });
    }
    else if (answer == 'No') {
        rl.question('Want to register?', function (answer2) {
        });
    }
});
