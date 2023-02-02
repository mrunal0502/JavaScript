function avg(a,b){
    return (a+b)/2;
}

var c1=avg(2,3);
var c2=avg(55,11);
console.log(c1,c2);

//Conditional statements
var age = 5;
if(age<18){
    console.log("You can drink");
}
else{
    console.log("You cannot drink");
}

//if-else ladder
var age= 5;
if(age>30){
    console.log("You are late");
}
else if(age>25){
    console.log("Congratulations you have made it");
}
else if(age>22){
    console.log("Keep trying you are going to make it");
}
else{
    console.log("happy ending");
}
console.log("end");

//loop statements
var arr=[1,2,3,4,5,6,7];
// console.log(arr);
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);

// }
// console.log("using for each loop");
// arr.forEach(function(num){
//     console.log(num);

// })

//while loop
let j=0; //let allows you to declare variables that are limited to the scope of a block statement.
// while(j<arr.length){
//     console.log(arr[j]);
//     j++
// }

//do while
do{
    console.log(arr[j]);
    j++
}while(j<arr.length);

//break and continue 
console.log("break and continue");
var abc=[1,2,3,4,5,6,7,8,9];
for(i=0;i<abc.length;i++){
    if(i==7){
        // break;
        continue;
    }
    console.log(arr[i]);
}