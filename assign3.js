let gname = "Syed Faraz";
console.log("Text in Lower case : " + gname.toLowerCase());
console.log("Text in Upper case : " + gname.toUpperCase());
console.log("Text in Title case : " + gname.toLowerCase().split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' '));
//# sourceMappingURL=assign3.js.map