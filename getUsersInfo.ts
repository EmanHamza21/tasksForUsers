import * as readline from 'readline';
import Users from "./users";
import * as prop from " ../testData/userData.json";

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

  rl.question('are you a registered user or non registered user?' ,(answer) =>{

    if(answer == 'yes'){
      rl.question('Please enter ur userName and ur password seperated by comma?' ,(answer1) =>{
        var splitFloat: any= answer1.split(",");
        for (let i =0 ; i < splitFloat.length;i++){
            splitFloat[i] = parseFloat(splitFloat[i])
        }

        let user = new Users;
        user.userName = splitFloat[0];
        user.password = splitFloat[1];

        let userName1 = (<any>prop).loggedUsers.userName;
        let password1 = (<any>prop).loggedUsers.password;
        
        if (user.userName == userName1 && user.password == password1){
           console.log('Welcome ' + user.userName);          
        }
        else{
           console.log('Wrong userName or password');
        }
        });
    }


    else if(answer == 'No'){
        rl.question('Want to register?' ,(answer2) =>{
        });
    }
  });
  


