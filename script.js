min = 1
max = 100
let var2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(var2)
function guessval(){
    
let res = document.getElementById("inpval").value
if(res==var2){
    resu = "you predicted the correct value"
}else{
    resu = "try again, your prediction was wrong"
}

let answer = document.getElementById("retext").innerText=resu;

}

