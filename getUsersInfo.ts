
import * as readline from 'readline';
import {readFile, writeFile} from 'fs/promises'
import ClassUsers from "./users";
var json = require('./userData.json');

const fs = require('fs');
const data= JSON.parse(fs.readFileSync('./newData.json'));

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

  rl.question('Are you a registered user or non registered user? (`yes` or `no`)?' ,(answer) =>{

    if(answer == 'yes' || answer == 'YES'){
      rl.question('Please enter your userName and password seperated by a comma?' ,(answer1) =>{
        var splitFloat: any= answer1.split(",");
        for (let i =0 ; i < splitFloat.length;i++){
            splitFloat[0] = (splitFloat[0]);
            splitFloat[1] = (splitFloat[1]);
        }
          let userInfoFromTerm = new ClassUsers;
          userInfoFromTerm.userName = splitFloat[0];
          userInfoFromTerm.password = splitFloat[1];
          
           let isCredentialFalse =false;
           let userNameFormJson = '';
           let passwordFormJson = '';

        for(let i=0; i<json.loggedUsers.length; i++){
             userNameFormJson = json.loggedUsers[i].userName;
             passwordFormJson = json.loggedUsers[i].password;
              //console.log(userNameFormJson);


          if(userNameFormJson== userInfoFromTerm.userName && passwordFormJson == userInfoFromTerm.password){
              console.log('Welcome ' + userInfoFromTerm.userName + ' !'+'\n'+ 'If you`ve any tasks it should appear here :D');
              console.log(json.loggedUsers[i].tasks);
              break; 
          } 
          else{
            isCredentialFalse = true;
            }
          }
          if(isCredentialFalse == true){
            console.log('Wrong userName or password!'+'\n'+'please try again!');
          }       
      });
    }
    else if(answer == 'no' || answer == 'NO'){

        rl.question('Want to register? (`yes` or `no`)' ,(answer2) =>{
          
          if(answer2 == 'yes' || answer2 == 'YES'){
            rl.question('Please provide your userName and password seperated by a comma?' ,(answer3) =>{
              let getUserCredintial = new ClassUsers;
              let firstPrameter = getUserCredintial.userName;
              let secondPrameter = getUserCredintial.password;

              var splitFloat: any= answer3.split(",");
              for (let i =0 ; i < splitFloat.length;i++){
                  splitFloat[0] = (splitFloat[0]);
                  splitFloat[1] = (splitFloat[1]);
              };

              firstPrameter = splitFloat[0];
              secondPrameter = splitFloat[1];

              interface PushDataIntoJson{
                userName: string;
                password: string;
                tasks: string;
              }

              const getAllFormJson = async():Promise <PushDataIntoJson> => {
                  const buffer = await readFile('./userData.json',{
                  encoding:'utf-8'
                })
                return JSON.parse(buffer)['LoggedUsers'];
              }

              const addUser = async (addUser: PushDataIntoJson) => {
                const newData= await getAllFormJson();
                await writeFile ('./userData.json',JSON.stringify([newData,addUser],null,2))
              };

              const run = async() =>{
                const add = await addUser({userName: firstPrameter, password:secondPrameter,tasks:'Not assigened yet'});
              }
              run();
              console.log('User data saved successfully!'+'\n' +'Please try to login again');
          }) 
        }else if(answer2 == 'no' || answer2 == 'NO'){
         console.log('Sorry to hear that!!'+ '\n'+' Bye bye!');
        } 
        else{
          console.log('Please provide your answer with `yes` OR `no`.'+ '\n'+ 'Try again!!');
        }  
    })
  }
    else{
      console.log('Please provide your answer with `yes` OR `no`.'+ '\n'+ 'Try again!!');
    };
});
  


