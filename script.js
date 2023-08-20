let box = document.querySelector("#box");
let user = document.querySelector("#username");
let parol = document.querySelector("#parol");
let knopka = document.querySelector("#btn");
let err = document.querySelector("#err");
let wel = document.querySelector("#welcome");
function LoginOyna (){
    if(user.value == "Nurulloh" && parol.value == "12345678"){
        box.style = "display:none"; 
        wel.style = "display:block";
    }else{
        err.style = "display:block";
    }
}

knopka.addEventListener("click",e=>{
    e.preventDefault();
    LoginOyna();
})