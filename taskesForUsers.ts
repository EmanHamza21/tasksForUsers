import * as readline from 'readline';
import ClassUsers from './users';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface loggedUsers {
    userName: string;
    password: string;
    task?: string;
};
export let allUsers: loggedUsers[] = [
    { userName: 'EmanHamza', password: '123456', task: '1 Task, task 2, task 3' },
    { userName: 'yahya', password:'123456', task: '3 Tasks' },
    { userName: 'maher',password:'123456' }
];

rl.question('are you a registered user or non registered user?' ,(answer) =>{

    if(answer == 'yes'){
      rl.question('Please enter ur userName and ur password seperated by comma?' ,(answer1) =>{
        var splitFloat: any= answer1.split(",");
        for (let i =0 ; i < splitFloat.length;i++){
            splitFloat[0] = (splitFloat[0]);
            splitFloat[1] = (splitFloat[1]);
        }
        let userInfo = new ClassUsers;
        userInfo.userName = splitFloat[0];
        userInfo.password = splitFloat[1];

        for(let i=0; i<allUsers.length; i++){
        
            if(allUsers[i].userName == userInfo.userName && allUsers[i].password == userInfo.password ){
                console.log('Welcome ' + userInfo.userName + ' !');  
            } 
            else if(allUsers[i].userName != userInfo.userName && allUsers[i].password != userInfo.password){
                console.log('Wrong userName or password !');
              }
            } 
            
            for(let i=0; i<allUsers.length; i++){
                if(allUsers[i].userName == userInfo.userName && allUsers[i].password == userInfo.password && allUsers[i].task){
                        console.log('You`ve these tasks assigned to you:'+ allUsers[i].task); 
                } 
                else if(allUsers[i].userName == userInfo.userName && allUsers[i].password == userInfo.password){
                console.log('There are no tasks assigned to you '+userInfo.userName +'!');
                }
            }         
        });
    }
    else if(answer == 'no'){
        rl.question('Want to register?' ,(answer2) =>{
            if(answer2 == 'yes'){
                rl.question('Please enter ur userName and password seperated by comma?' ,(answer3) =>{
                    var splitFloat: any= answer3.split(",");
                    for (let i =0 ; i < splitFloat.length;i++){
                        splitFloat[0] = (splitFloat[0]);
                        splitFloat[1] = (splitFloat[1]);
                    }
                    let newUserInfo = new ClassUsers;
                    let firstPara:any =newUserInfo.userName;
                    let secondPara =newUserInfo.password;
                    firstPara = splitFloat[0];
                    secondPara = splitFloat[1];

                    allUsers.push(firstPara,secondPara);
                    console.log(allUsers);
                });       
                
            } 
            else if( answer2 == 'no'){
                console.log('Oh no!!');
            }
        
        });
    }
  });