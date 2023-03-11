"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Faraz", "Zeeshan", "Ahmed", "Ansab"];
console.log("People! I have found a bigger table");
guestList.unshift("Razi"); //new element added to start of the array
guestList.splice(3, 0, "Syed"); //new element added to center of the array
guestList.push("Nabeel"); //new element added to end of the array
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you have been invited to dinner!");
}
//# sourceMappingURL=assign16.js.map