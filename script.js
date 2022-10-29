min = 1
max = 100
let var2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(var2)
let count=10;
function guessval(){
if(count>1){
let endgame = document.getElementById("div1")
--count
let res = document.getElementById("inpval").value
if(res<var2){
    resu=`your guess is less than the value, you have ${count} chances left`
}
else if(res>var2){
    resu=`Your guess is more than the value, you have ${count} chances left`
}
else if(res==var2){
    endgame.className="end"
    endgame.innerText= "you guessed the correct value,(●'◡'●)"
}

}
else{
    resu =`You exhausted all your chances,  ${var2} is the number you were trying to guess`
}

let answer = document.getElementById("retext").innerText=resu;
}

