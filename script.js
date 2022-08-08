let num1= 10;
let num2=20;
let num3="10";
let word1="Hello";
let word2="hello";

console.log(num1<num2);
console.log(num1>num2);
console.log(num1<=num2);
console.log(num1>=num2);
console.log(!true);
console.log(!false);
console.log(num1==num3);
console.log(num1===num3);
console.log(word1===word2);
console.log(word1!==word2);

//Control flow
let item="Annapurna";
if(item==="Annapurna"){
    console.log("Buy Annapurna");
}
else if(item==="U2"){
    console.log("Buy U2");
}
else if(item==="A1"){
    console.log("Buy A1");
}
else{
    console.log("Buy Rocky salt");
}

//Graading System
let score=30;
if(score>=0 && score<=100){
if(score>=90){
    console.log("Excellent");
}
else if(score>=80){
    console.log("Very Good");
}
else if(score>=80){
    console.log("Very Good");
}
else if(score>=70){
    console.log("Good");
}
else if(score>=60){
    console.log("Average");
}
else if(score>=50){
    console.log("Credit");
}
else if(score>=40){
    console.log("Pass");
}
else if(score>=0){
    console.log("Fail");
}
}
else{
    console.log("Please Enter a valid number");
}

//FUNCTIONS
function sum(a,b){
    let total = a+b;
    return total;   
}
let eleven = sum(5,6);
console.log(eleven);

let fifteen = sum(7,8);
let nineteen = sum(9,10);

//Functions(Multiplication)
function Multiply(a, b=0){
    let total = a*b;
    return total;    
}
let one = Multiply(5);
console.log(one);

let two = Multiply(7,8);
let three = Muliply(9,10);
console.log(Multiply(one));

//LOOPS
//FOR LOOPS
for (let i=1; i<=10; i++){
    console.log(i + ".I will not talk in class");
}

//WHILE LOOPS
let num=1;
while (num<= 10){
    console.log(num); 
    num++;
}

//do.....while loop
let age=100;
do{
    console.log(age + ". You cannot vote");
    age++;
}while (age<18);

//Array Methods (Filter)
let ages= [19,26,24,18,22,35,30,33,31,29];

for(let age of ages){
    console.log(Math.pow(age, 2));
}
let marriage=ages.filter(function(num){
    return num>25;
})
console.log(marriage);

//map 
let squares= ages.map((age)=>age*age);
console.log(squares);

//find
let eighteen = ages.find((age)=>age===18);
console.log(eighteen);
