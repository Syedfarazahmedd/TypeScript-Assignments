let current_users:string[] = ["Faraz", "Zeeshan", "Ansab", "Razi", "Nabeel", "Admin"];
let new_users:string[] = ["John","Admin", "Wick", "Faraz", "Finn" ];
let flag:number=0;
for(let i:number=0;i<new_users.length;i++){
    for(let j:number=0;j<current_users.length;j++){
        if(new_users[i]==current_users[j]){
            flag++;
        }
    }
    if(flag>0){
        
        console.log(new_users[i]+", you need to enter a new username!");
        flag=0;
    }
    else{
    console.log("Yes the username : "+new_users[i]+" is available for use.");
    flag=0;
    }
}