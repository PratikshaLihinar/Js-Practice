// console.log('hello');
// // values and veriabes in js
// // var variablezz(key) name = value
// var myName  = 'pratiksha';
// console.log(myName);
// //6 data type is primitive - undifined, Boolean, Number, String, BigInt, Symbol
// var myNames ="pratiksha lihinar";
// console.log(myName.length);
// //typeof 
// console.log(typeof(myName));
// var age=25;
// console.log(typeof(age));
// var isAdmin = true;
// console.log(typeof(isAdmin));
// console.log(10+"20");//1020 concat
// console.log(9-"10");//-1 bug
// console.log("java" + "script");//javascript (string + string = concat)
// console.log("" + "");//nothing is print
// console.log("prats" - "lihinar");//NaN-not a number
// console.log(true + true);//2
// console.log(false-true);// - 1
// console.log(true-true);//0
// console.log(true-false);//1

// //null vs undefined

// var iAmUseless = null;
// console.log(iAmUseless);//null
// console.log(typeof(iAmUseless));//object bug-2

// var isAmStandBy;
// console.log(isAmStandBy);//value & datatype =undefined 

// //what is NaN? - when we substract two string it shows NaN as output ex.-console.log("prats" - "lihinar");//NaN-not a number

// // NaN is a property of the global object.
// //In other words, it is a variable in global scope.
// //The initial value of NaN is  Not-A-Number

// var phone = 8796446560;
// console.log(isNaN(phone));

// if(isNaN(myName)){
//     console.log("Enter valid phone number");
// }

//NaN practice

//console.log(Nan === NaN);//false we have no idea

//isNaN(Number.NaN);
//Number.isNaN(NaN);
//console.log(isNaN(Number.NaN));//true
//console.log(Number.isNaN(NaN));//true


//Expresion and oprator- Arithmatic oprator, Assigment oprator, comparison, Logical, String(+ concate), conditional(ternary)
// console.log(5+6);

// var a = 5;
// var b = 5;
// //ecmascipt 
// console.log(`Is both the a and b are equal : ${a == b}`);


// console.log(5+4);
// console.log(5-1);
// console.log(20/5);
// console.log(5+2);

// console.log("Remender operator : " + 21%2);


//Increment and decrement operator

//x++ postfix Increment
//++x prefix Increment

//y-- postfix decrement
// var num =15;
// var newnum = num--;
// console.log(num);
// console.log(newnum);

//--y prefix decrement
// var num =15;
// var newnum = --num;
// console.log(num);
// console.log(newnum);

// 3 Comparison operator
// A comparison operator compares  irs operands and return a logical value base on whether the comaprison is true.
// var a=30;
// var b= 10;

//equals (==)
//console.log(a == b);//false

//not equal()
//console.log(a != b);// true

//> greater than
// console.log(a>b);

//>= 
// console.log(a>=b);

//Logical operator: 

//the result is always boolean
//&&- and (all the value is true the result is true)
//console.log(a>b && b>0);//true


// ||- or(either one is true the result is true)
//console.log(a>b || b<0);//true || false = true

//  !-not()
//console.log(!true);//false - it shows opposite value


//exponaltial oprator
//console.log(3**3);//27

// var a=10;
// var b=20;
// var temp;
// temp = a;
// a= b;
// b= temp;
// console.log(a,b);


// == vs ===
// var num1 = 5;
// var num2 = '5';

//console.log(num1 == num2);//true - check only value
//console.log(num1 === num2);//false - check value and data type is equal or not

//control statement & loops

//1.If Else
// var w= 'rain';
// if(w=='rain'){
//     console.log("take a raincoat");
// }else{
//     console.log("no need to take raincoat");
// }

//leap year

// var year= 2020;
// //debuggear;
// if(year%4 ===0){
//     if(year%100===0){
//         if(year %400 ===0){
//             console.log("leap year");
//         }else{
//             console.log("not leap year");
//         }
//     }else{
//     console.log("leap year");
//     }
// }else{
//     console.log("not leap year");
// }
//5falsy value - 0, NaN, null, undefined, false, ""
// if(score = 0){
//     console.log("yay, we won the game");
// }else{
//     console.log("we lose the game");
// }


//2.switch statement
// var area="circle";
// var PI=3.14, l=5, b=4, r=3;
// switch(area){
//     case 'circle':
//         console.log("Area of circle: "+ PI*r**2);
//         break;
//     case 'triangle':
//         console.log("Area of triangle: " + (l*b)/2);
//         break;
//     case 'rectangle':
//         console.log("Area of rectagble: "+(l*b) );   
//         break;

//     default:
//         console.log("Please enter valid data");     
        
// } 

//3. while loop

// var a=1;
// while(a<=10){
//     console.log(a);
//     a++;
// }

//4. do-while loop

// var a = 1;
// do{
//     console.log(a);
//     a++;
// } while(a<=10)

//5. for loop


// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// let table=5;
// for(let i=1;i<=10;i++){
//     ans=table*i;
//     console.log(table+"*"+i+"="+ans);

// }

//6.for in loop


//7.for of loop
//8. conditional oprator- take three operants 
// variablename=(condition)? value1:value2;
// var age = 15;
// console.log((age>18)?"vote now":"not eligible");


//function in js

// A js function is a block of code designed to perform a particular task.
//syntax-
//function functionName(Parameter){
    //statement
//}


// function sum(a,b){//paramer
    
//     // var ans=a+b;
//     // console.log(ans);
//     return a+b;
// }
// var funExp=sum(20, 30);//argument
// console.log("sum: "+funExp);
//function parameter vs function arguments
//parameter-it is in declaration
//argument-pass the value while calling

//Anonoymous Function

//A function expression is similar to and same syntax as a function declareation one can define "name" 

// var funExpression = function(a,b){
//     return a+b;
// }
// var ans=funExpression(5, 15);
// var ans1=funExpression(50, 15);
// console.log(ans);
// console.log(ans > ans1);

//Moden js(1996)=>ECMAScript(1997)(ES6 2015)

//let, const, template Strings, Default Aruments, destructiring,object properties, arrow function, est operators,spead operator


//var =>Functional scope
//let and const => block scope

// var myNam="prats";
// console.log(myNam);

// myNam="pratiksha";
// console.log(myNam);

// let myNam="prats";
// console.log(myNam);

// myNam="pratiksha";
// console.log(myNam);

// const myNam="prats";
// console.log(myNam);

// myNam="pratiksha";
// console.log(myNam);

//Template literals ``using back tick ${variableName}

// var a = 5;
// var b = 5;
// //ecmascipt 
// console.log(`Is both the a and b are equal : ${a == b}`);

//Default Parameters
// function multi(a,b=5){
//     return a*b;
// }
// console.log(multi(5,2));


//Fat Arror Function

// const sum=()=>{
//    // let a=5,b =5;
//    // let sum =a+b;
//    // return `sum : ${a+b}`;
//    return `sum is ${(a=5)+(b=8)}`
// }

// const sum = ()=> `the sum of the two number is ${(a=5)+(b=6)}`;
// console.log(sum());

//Array
//var myFriend=new Array; no need to do this
// var myFriends =["sky", "blue","purpple"];

//console.log(myFriends);
//console.log(myFriends[0]);

//console.log(myFriends[myFriends.length-1]);

//for loop

// for(let i=0;i<myFriends.length;i++){
//     console.log(myFriends[i]);
// }

//for in loop-elements index number

// for (const elements in myFriends) {
//     console.log(elements);
// }

//for of loop- return element value

// for (const elements of myFriends) {
//     console.log(elements);
// }

//forEach loop
// myFriends.forEach(function(element, index, array)  {
//     console.log(element+" index: "+index+" array: "+array);
// });

// myFriends.forEach((element,index,array) => {
//     console.log(element);
// });

//Array serching and filtering 

//Array.prototype.indexOf()-1. Method

//var myFriends =["sky", "blue","purpple"];
//console.log(myFriends.indexOf("blue"));//forwared search
//console.log(myFriends.lastIndexOf("sky"));//backward search
//console.log(myFriends.includes("blue"));//true

//find - it return only on element -when it not able to rach out the element it return undefined

//4.Array subsection (perform CURD)

//const animals = ['pigs','goats','sheep'];

// const count=animals.push('chicken','cat');//add element at end and return the length of array.add one or more elements
// console.log(animals);
// console.log(count);
// const counts=animals.unshift('dog');//add front of array
// console.log(animals);

//ex 2
// const myNumber = [1,2,3,5];
// myNumber.unshift(4,6);
// console.log(myNumber);


//pop()

// const myNumber = [1,2,3,5];
// myNumber.pop();//remove last element
// console.log(myNumber);

// const myNumber = [1,2,3,5];
// myNumber.shift();
// console.log(myNumber);//pop first element
//add end dec in month array 
//const month=['jan','feb','march','april','may','june','july'];
//const newMonth=month.splice(month.length,0,"dec");//start index, remove element, add element
// console.log(month);

//console.log(newMonth);//return empty array because splice method mainly use for delete 

//march update
// const updateMonth = month.splice(2,1,'March');
// console.log(month);
//output => [
//   'jan',   'feb',
//   'March', 'april',
//   'may',   'june',
//   'july'
// ]

// const indexOfMonth =month.indexOf('march');
// if(indexOfMonth != -1){
//     const updateMonth = month.splice(2,1,'March');
//     console.log(month);
// }else{
//     console.log('no such data found');
// }


//Map insted of for each
 //const array1 = [1,2,3,4];
// let newArr = array1.map((curElement,index,arr)=>{
//     return curElement>2;
// })
// console.log(array1);//[ 1, 2, 3, 4 ]

// console.log(newArr);//[ false, false, true, true ]


// let newArr = array1.map((curEle,index,arr) =>{
//     return `Index of = ${index} and the value is ${curEle}`;
// })

// console.log(newArr);//return new array and does not manupulate orignal arrya.
//foreach vs map
//foreach- return undefined
//map-return new array


//
// let arr = [25,36,64];

// let arrSquaroot=arr.map((ele,index,arr)=>{
//     return Math.sqrt(ele);
// })
// console.log(arrSquaroot);


//we are using chaning method

//let arr = [25,36,64];

// let newArray = arr.map((curElement)=>{
//     return curElement*2;
// }).filter((curElement)=>{
//     return curElement>10;
// }).reduce((accmulator,curElement)=>{
//     return accmulator += curElement;
// })
// let newArray = arr.map((curElement)=> curElement*2).filter((curElement)=> curElement>10)
 //console.log(newArray);

//****************************************************************************************************map return true false and filter retur filter value  and reduce -return single value(ex sum, avrage, etc)*********important
//Reduce method

//flatten an array means to convert the 3d and 2d array into a single dimemndional array

//accumelator, current value , inde,array

// let arr =[1,4,3];

// let sum= arr.reduce((accmulator,curElement,index,arr)=>{
//     return accmulator += curElement;
// },6)//,intial value
// console.log(sum);//14

//How to flatten and array

// const arr =[
//     ['prats','yee'],
//     ['kiujj',["sdfd",'sd']]
// ];

// let flatArray = arr.reduce((accumelater,curElement)=>{
//     return accumelater.concat(curElement);
// })

// console.log(flatArray);


//String
// let names ='pratiksha';
// console.log(names);
// console.log(names.length);

//Escape character

// let sentance ='their is "some" here';//their is "some" here
//let sentance ="their is \"some\" here";//their is "some" here
//console.log(sentance);


//Finding a string in a string

//String.prototype.indexdOf(searchValue[,fromIndex])  ->syntax

 //const howYouFeel= 'I am enjoing this learning';
// console.log(howYouFeel.indexOf("enjoing"));//return staring index counting with spaces 5

//console.log(howYouFeel.lastIndexOf("j"));

//console.log(howYouFeel.search("am"));
//extracting string part
//3 method 
//slice(start,end);
//sublstring(s,e);
//substr(s,e);

//slice() return extracted part into a new string.

//var str = "Apple, Banana, Kiwi";
//let res = str.slice(0,5);//Apple
//let res = str.slice(7,-2);//Banana, Ki
//console.log(res);

//Display only 280 chracters of a string like the one used in Twitter?

// let myTwitter = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit natus culpa earum exercitationem, at debitis ipsa inventore quo repellendus ab deserunt ullam. Numquam harum officia beatae ullam pariatur vitae excepturi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit natus culpa earum exercitationem, at debitis ipsa inventore quo repellendus ab deserunt ullam. Numquam harum officia beatae ullam pariatur vitae excepturi";
// let myActualTwitter = myTwitter.slice(0,280);//0 to 279 =280 charater in string
// console.log(myActualTwitter.length);
// console.log(myActualTwitter);


// What is substring()Method-this is not accept negative index

// var str = "Apple, Banana, Kiwi";
// let res = str.substring(0,5);//Apple
// // let res = str.slice(7,-2);//Banana, Ki
// console.log(res);

//replacing string content

// let myBio=`I am pratiksha`;
// let replaceData = myBio.replace('pratiksha','prats');
// console.log(replaceData);

//charCodeAt and charAt
// let myBio=`I am pratiksha`;
// let replaceData = myBio.charAt(0);
// console.log(replaceData);

// let unicode = myBio.charCodeAt(2);
// console.log(unicode);


//return last char unicode
// let myBio=`I am pratiksha`;
// let last = myBio.length;
//  console.log(myBio.charCodeAt(last-1));

//Property Access
//ECMAScript 5(2009) allows property access [] on strings
// let myNam='hello';
// console.log(myNam[0]);//h

// let names='   Pratiksha';
// let lastName='Lihina';
// console.log(names.toUpperCase());
// console.log(names.toLocaleLowerCase());

// console.log(names.concat(lastName));
// console.log(names.concat(" ",lastName));
// console.log(`${names} ${lastName}`);
// console.log(names.trim());//remove the white spaces from front and back on string

// let txt ='a,b|c,d';
// console.log(txt.split(","));
// console.log(txt.split("|"));



//DATE AND TIME METHOD using getter and setter

//thier are 4 way to create date object

// new Date()
// new Date(year,month,day,hours,minuters,seconds,milliseconds)
// //it takes 7 argument
// new Date(millisecond)
// new Date(date string)

// let currentDate= new Date();
// console.log(currentDate);//2022-02-13T08:51:22.144Z

// let currentDate= new Date();
// console.log(currentDate.toLocaleString());//   2/13/2022, 2:25:27 PM
// console.log(currentDate.toString());//  Sun Feb 13 2022 14:26:23 GMT+0530 (India Standard Time)


//console.log(Date.now());//return milisecond since 1 jan 1970 - 1644742662669

// var d = new Date(2022,0,24,10,33,30,1);
// console.log(d.toLocaleString());

//month argument is complsoury
// var d = new Date(2022,0);
// console.log(d.toLocaleString());//1/1/2022, 12:00:00 AM


// let d= new Date("july 25 2022");
// console.log(d.toLocaleString());
// let d = new Date(1644742662669);//passing milisecond
// console.log(d.toLocaleString());//2/13/2022, 2:27:42 PM

//how to get indivisual date
// const d= new Date();
// console.log(d.toLocaleString());
// console.log(d.getFullYear());
// console.log(d.getDate());
// console.log(d.getDay());

//how to set indivisual date

//it return milisecond
// const d= new Date();
// console.log(d.setDate(5));
// let date=d.setFullYear(2022,2,13);
// console.log(date);


// const time= new Date();
// console.log(time.getTime());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());



// let time= new Date();
// console.log(time.setTime(5));
// console.log(time.setHours(5));
// console.log(time.setMinutes(45));
// console.log(time.setSeconds(5));

// new  Date().toLocaleDateString();//date 
// new Date().toLocaleTimeString();//time shows 
// new Date().toLocaleString();//date and time


//Math object in js

//console.log(Math.PI);

// let num=13.256;
// console.log(Math.round(num));//13


//console.log(Math.pow(2,3));//8

//console.log(Math.sqrt(25));

//console.log(Math.abs(-55));//55

// console.log(Math.ceil(4.4));//5 after .1 it will increse by one
//console.log(Math.round(4.4));//4

//console.log(Math.floor(4.4));//4

// console.log(Math.min(4.4,5,2,5,5));//2
// console.log(Math.max(4.4,5,2,5,5));//5


//console.log(Math.floor(Math.random()*10));//0 to 9


//console.log(Math.trunc(-4.4));//it return the integer part of a number

//DOM in js

//window object-(parent) in it document(child) is a part 

//DOM VS BOM 

//WINDOW OBJECT
// alert(location.href);
// if(confirm("want to visit gamil ? ")){
//     location.href ="https://www.gmail.com";
// }

//DOM Navigation
//document.head-return head section,document.getElememtById,document.document.Element-return the html root element, document.body-return body data, document..childNodes-return node(it include tab,enter and whitespace),document.body.children-return child elements.,document.hasChildNodes.length,document.body.firstElementChild-return first element

