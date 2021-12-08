"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var readline = __importStar(require("readline"));
var users_1 = __importDefault(require("./users"));
var prop = __importStar(require(" ../testData/userData.json"));
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
