let guestList:string []= ["Faraz","Zeeshan","Ahmed","Ansab"];

console.log("Mr "+guestList[0]+" cannot make it to the dinner.");
guestList[0]="Danny";
for(let i=0;i<guestList.length;i++){
    console.log("Dear "+guestList[i]+", you have been invited to dinner!");
}
export{}