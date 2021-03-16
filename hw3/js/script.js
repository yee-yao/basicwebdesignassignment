//宣告
/*var name = "Jane Yao";
var school = "NCTU DCAT"; 
var age = 19;
var isGirl = true;
var favorite = ["Solar", "Moonbyul", "Wheein", "Hwasa"];
alert("Hello, I'm" + name);
alert("I'm a student in" + school);
alert("Here is some of my information");
alert(name);
alert(age);
alert(isGirl);
alert(favorite[1]);
*/

//函數、參數、回傳值
/*function addition(num){
	return num+10;
}
var age = 28;
var trueage = addition(age);
alert(trueage); 

var age2 = 15;
var trueage2 = addition(age2);
alert(trueage2); 
*/

//全域、區域變數
// function test(){

// a = 123;
// var b = 456;
// if(a == 123) 
// 	var c = 789;

// }

document.getElementById("byid").innerHTML="我來自id";
document.getElementById("byid").style.color="blue";

document.getElementsByClassName("byClass")[0].innerHTML="我來自class";
document.getElementsByClassName("byClass")[0].style.fontSize="40px";

document.getElementsByTagName("div")[2].innerHTML="我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily="微軟正黑體";

document.getElementsByTagName("p")[0].innerHTML="哈嚕";
document.getElementsByTagName("p")[0].style.color="red";
document.getElementsByTagName("p")[0].style.fontSize="30px";

