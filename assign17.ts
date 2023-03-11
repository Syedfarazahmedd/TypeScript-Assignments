let guestList:string []= ["Faraz","Zeeshan","Ahmed","Ansab"];
console.log("People! I have found a bigger table");
guestList.unshift("Razi");//new element added to start of the array
guestList.splice(3,0,"Syed");//new element added to center of the array
guestList.push("Nabeel");//new element added to end of the array
for(let i=0;i<guestList.length;i++){
    console.log("Dear "+guestList[i]+", you have been invited to dinner!");
}

console.log("I am sorry to announce that the table won't arrive in time and i can invite only two guests");
console.log("Sorry "+guestList[guestList.length-1]+", you are no more invited");
guestList.pop();
console.log("Sorry "+guestList[guestList.length-1]+", you are no more invited");
guestList.pop();
console.log("Sorry "+guestList[guestList.length-1]+", you are no more invited");
guestList.pop();
console.log("Sorry "+guestList[guestList.length-1]+", you are no more invited");
guestList.pop();
console.log("Sorry "+guestList[guestList.length-1]+", you are no more invited");
guestList.pop();
for(let i=0;i<guestList.length;i++){
    console.log("Dear "+guestList[i]+", you are still invited!");
}
guestList.pop();
guestList.pop();
console.log("The list is now empty! "+guestList);

export{}