let string1: string="Syed";
let string2: string = "Syed";
console.log("Is string1 and string2 equal? I predict True");
console.log(string1==string2);

let string3: string="Faraz";
let string4: string = "Ahmed";
console.log("Is string3 and string4 equal? I predict False");
console.log(string3==string4);

let testString:string="Alpha";
console.log("Is testString in lower case? I predict False");
console.log(testString==testString.toLowerCase());

let testString1:string="alpha";
console.log("Is testString1 in lower case? I predict False");
console.log(testString1==testString1.toLowerCase());

let int1: number=2;
let int2: number=4;
console.log("Is int2 greater than int1? I predict true");
console.log(int2>int1);
console.log("Is int2 greater than equal to int1? I predict true");
console.log(int2>=int1);
console.log("Is int1 less than equal to int2? I predict true");
console.log(int1<=int2);
console.log("is 3 greater than int1 and less than int2? i predict true");
console.log(3>int1 && 3<int2);

let testArray: string []= ["alpha", "beta", "gama","theta"];
for(let i=0;i<testArray.length;i++){
if(testArray[i]=="alpha")
{
var test:string = testArray[i];
break;
}
}
console.log("is 'alpha' present in the test array? i predict true");
console.log(test=='alpha');

for(let i=0;i<testArray.length;i++){
if(testArray[i]=="faraz")
{
var test1:string = testArray[i];
break;
}
}
console.log("is 'faraz' present in the test array? i predict false");
console.log(test1=='faraz');