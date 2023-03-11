make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "Not all heroes wear cape");

function make_shirt(size:string, msg:string="I love TypeScript"){
console.log("The size of the shirt is "+size+" and the message is "+msg);
}
export{}