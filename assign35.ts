let hunters:string[] = ["Lion","Tiger","Leopard"];
for(let i:number=0;i<hunters.length;i++){
    console.log(hunters[i]);
}

for(let i:number=0;i<hunters.length;i++){
    
if(hunters[i]=="Lion"){
    console.log("Lion is the king of the jungle");
}
    else if(hunters[i]=="Tiger"){
        console.log("Tiger is a powerful beast");
    }
    else
    console.log("Leopard is the fastest animal");
}

console.log("All these animals have  acommon trait that they are hunters.!")