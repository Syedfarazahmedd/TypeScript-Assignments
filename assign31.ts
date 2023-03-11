let users:string[] = ["Faraz", "Zeeshan", "Ansab", "Razi", "Nabeel", "Admin"];

for(let i:number=0;i<users.length;i++){
    if(users[i]=="Admin"){
        console.log("Hello "+users[i]+", would you like to see a status report?");
    }
    else
    console.log("Hello "+users[i]+", thank you for logging in again");
}

console.log("Emptying list now . . ");
users.pop();
users.pop();
users.pop();
users.pop();
users.pop();
users.pop();
if(users.length==0){
    console.log("We need to find some users!")
}


export{}