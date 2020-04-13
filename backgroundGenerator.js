var color1=document.getElementsByClassName("color")[0];
var color2=document.getElementsByClassName("color")[1];
var body=document.querySelector("body");
color1.addEventListener("input",function(){
	body.style.background="linear-gradient(to right," + color1.value + "," +color2.value+")";
})
color2.addEventListener("input",function(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
})