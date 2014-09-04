function remove(){
	document.getElementById('name').value="";
	document.getElementById('container').innerHTML='';
	document.getElementById('palin').innerHTML='';
}
function test(){
	var a='';
var x=document.getElementById('name').value;
if(x==''){
  alert("Please Enter Name");
}
else{
//console.log(x.length);
for (var i = x.length-1; i>=0; i--) {
   a+=x[i];
  //console.log(a);
}
document.getElementById('container').innerHTML="Reverse of Name: "+a;
console.log(a);
console.log(x);
if(a==x){
	document.getElementById('palin').innerHTML=x+" Is Palindrome";
}
else{
	document.getElementById('palin').innerHTML=x+" Is Not Palindrome";
}
}
}