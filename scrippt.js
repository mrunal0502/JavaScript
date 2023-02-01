// 1.Javascript console API
console.log("Hello World");
console.warn("This is a warning");
console.error("This is an error");

//2.Ways to print in javascript
console.log("Hello World");
document.write("Hello Mrunal");
alert("Welcome Mrunal");

//3.Variables in JS(used to store values)
var a=89;
var b=43;
console.log(a+b);

/*Multi 
line
comment*/

//4. DataTypes in JS
//Numbers
var num1=33.4;
var num2=228;
console.log(num1+num2);

//Strings
var str1="This is a string";
var str2="This is also a string";

//Arrays
var marks={
    Ria:45,
    Jia:44,
    Arya:88
}

console.log(marks);

//Boolean
var a = true;
var b = false;
console.log(a);


//Undefined
var und;
console.log(und);

//DataTypes
//Primitive datatypes-> undefined,null, number, boolean, strings and symbol
//Reference datatypes-> arrays and objects

var arr = [1,3,6,'sonu',9];

//Operators
//Arthmetic operators
var c=67;
var d=90;
console.log("The value of c + d is", c+d);
console.log("The value of c - d is", c-d);
console.log("The value of c * d is", c*d);
console.log("The value of c / d is", c/d);

//Assignment Operators
 var e = b;
console.log(e);

//Comparison Operators
var x = 90;
var y =100;
console.log(x<y);
console.log(x>y);
console.log(x<=y);
console.log(x>=y);
console.log(x==y);
console.log(x!=y);

//Logical Operators
//Logical and
console.log(true && true);
console.log(true && false);
console.log(false && false);

//Logical or
console.log(true || true);
console.log(true || false);
console.log(false || false);

//Logical not
console.log(!false);
console.log(!true);