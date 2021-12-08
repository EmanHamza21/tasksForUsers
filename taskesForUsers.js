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
exports.allUsers = void 0;
var readline = __importStar(require("readline"));
var users_1 = __importDefault(require("./users"));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
;
exports.allUsers = [
    { userName: 'EmanHamza', password: '123456', task: '1 Task, task 2, task 3' },
    { userName: 'yahya', password: '123456', task: '3 Tasks' },
    { userName: 'maher', password: '123456' }
];
rl.question('are you a registered user or non registered user?', function (answer) {
    if (answer == 'yes') {
        rl.question('Please enter ur userName and ur password seperated by comma?', function (answer1) {
            var splitFloat = answer1.split(",");
            for (var i = 0; i < splitFloat.length; i++) {
                splitFloat[0] = (splitFloat[0]);
                splitFloat[1] = (splitFloat[1]);
            }
            var userInfo = new users_1["default"];
            userInfo.userName = splitFloat[0];
            userInfo.password = splitFloat[1];
            for (var i = 0; i < exports.allUsers.length; i++) {
                if (exports.allUsers[i].userName == userInfo.userName && exports.allUsers[i].password == userInfo.password) {
                    console.log('Welcome ' + userInfo.userName + ' !');
                }
                else if (exports.allUsers[i].userName != userInfo.userName && exports.allUsers[i].password != userInfo.password) {
                    console.log('Wrong userName or password !');
                }
            }
            for (var i = 0; i < exports.allUsers.length; i++) {
                if (exports.allUsers[i].userName == userInfo.userName && exports.allUsers[i].password == userInfo.password && exports.allUsers[i].task) {
                    console.log('You`ve these tasks assigned to you:' + exports.allUsers[i].task);
                }
                else if (exports.allUsers[i].userName == userInfo.userName && exports.allUsers[i].password == userInfo.password) {
                    console.log('There are no tasks assigned to you ' + userInfo.userName + '!');
                }
            }
        });
    }
    else if (answer == 'no') {
        rl.question('Want to register?', function (answer2) {
            if (answer2 == 'yes') {
                rl.question('Please enter ur userName and password seperated by comma?', function (answer3) {
                    var splitFloat = answer3.split(",");
                    for (var i = 0; i < splitFloat.length; i++) {
                        splitFloat[0] = (splitFloat[0]);
                        splitFloat[1] = (splitFloat[1]);
                    }
                    var newUserInfo = new users_1["default"];
                    var firstPara = newUserInfo.userName;
                    var secondPara = newUserInfo.password;
                    firstPara = splitFloat[0];
                    secondPara = splitFloat[1];
                    exports.allUsers.push(firstPara, secondPara);
                    console.log(exports.allUsers);
                });
            }
            else if (answer2 == 'no') {
                console.log('Oh no!!');
            }
        });
    }
});
