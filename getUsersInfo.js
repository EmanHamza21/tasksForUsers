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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var readline = __importStar(require("readline"));
var promises_1 = require("fs/promises");
var users_1 = __importDefault(require("./users"));
var json = require('./userData.json');
var fs = require('fs');
var data = JSON.parse(fs.readFileSync('./newData.json'));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Are you a registered user or non registered user? (`yes` or `no`)?', function (answer) {
    if (answer == 'yes' || answer == 'YES') {
        rl.question('Please enter your userName and password seperated by a comma?', function (answer1) {
            var splitFloat = answer1.split(",");
            for (var i = 0; i < splitFloat.length; i++) {
                splitFloat[0] = (splitFloat[0]);
                splitFloat[1] = (splitFloat[1]);
            }
            var userInfoFromTerm = new users_1["default"];
            userInfoFromTerm.userName = splitFloat[0];
            userInfoFromTerm.password = splitFloat[1];
            var isCredentialFalse = false;
            var userNameFormJson = '';
            var passwordFormJson = '';
            for (var i = 0; i < json.loggedUsers.length; i++) {
                userNameFormJson = json.loggedUsers[i].userName;
                passwordFormJson = json.loggedUsers[i].password;
                //console.log(userNameFormJson);
                if (userNameFormJson == userInfoFromTerm.userName && passwordFormJson == userInfoFromTerm.password) {
                    console.log('Welcome ' + userInfoFromTerm.userName + ' !' + '\n' + 'If you`ve any tasks it should appear here :D');
                    console.log(json.loggedUsers[i].tasks);
                    break;
                }
                else {
                    isCredentialFalse = true;
                }
            }
            if (isCredentialFalse == true) {
                console.log('Wrong userName or password!' + '\n' + 'please try again!');
            }
        });
    }
    else if (answer == 'no' || answer == 'NO') {
        rl.question('Want to register? (`yes` or `no`)', function (answer2) {
            if (answer2 == 'yes' || answer2 == 'YES') {
                rl.question('Please provide your userName and password seperated by a comma?', function (answer3) {
                    var getUserCredintial = new users_1["default"];
                    var firstPrameter = getUserCredintial.userName;
                    var secondPrameter = getUserCredintial.password;
                    var splitFloat = answer3.split(",");
                    for (var i = 0; i < splitFloat.length; i++) {
                        splitFloat[0] = (splitFloat[0]);
                        splitFloat[1] = (splitFloat[1]);
                    }
                    ;
                    firstPrameter = splitFloat[0];
                    secondPrameter = splitFloat[1];
                    var getAllFormJson = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var buffer;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, promises_1.readFile)('./userData.json', {
                                        encoding: 'utf-8'
                                    })];
                                case 1:
                                    buffer = _a.sent();
                                    return [2 /*return*/, JSON.parse(buffer)];
                            }
                        });
                    }); };
                    var addUser = function (addUser) { return __awaiter(void 0, void 0, void 0, function () {
                        var newData;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getAllFormJson()];
                                case 1:
                                    newData = _a.sent();
                                    newData['loggedUsers'].push(addUser);
                                    return [4 /*yield*/, (0, promises_1.writeFile)('./userData.json', JSON.stringify(newData, null, 2))];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    var run = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var add;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, addUser({ userName: firstPrameter, password: secondPrameter, tasks: 'Not assigened yet' })];
                                case 1:
                                    add = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    run();
                    console.log('User data saved successfully!' + '\n' + 'Please try to login again');
                });
            }
            else if (answer2 == 'no' || answer2 == 'NO') {
                console.log('Sorry to hear that!!' + '\n' + ' Bye bye!');
            }
            else {
                console.log('Please provide your answer with `yes` OR `no`.' + '\n' + 'Try again!!');
            }
        });
    }
    else {
        console.log('Please provide your answer with `yes` OR `no`.' + '\n' + 'Try again!!');
    }
    ;
});
