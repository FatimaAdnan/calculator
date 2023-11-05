var  inp=document.getElementById("inp")
function add(a){
inp.value+=a
}
function equal(){
if(inp.value==''){
alert("enter value")
}
else{
    inp.value=eval(inp.value)
} 
}
function DEL(){
    inp.value=''
}