var codes = document.getElementById("coder");
var play = document.getElementById("play");
var clear = document.getElementById("clear");
var result = document.getElementById("result_final");

play.addEventListener("click",()=>{
    result.innerHTML = codes.value;
    sessionStorage.setItem("result",codes.value);
});
clear.onclick = ()=>{
    result.innerHTML = "";
    // codes.value = "";
};
onload = ()=>{
    codes.value= sessionStorage.getItem("result");
}