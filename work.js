let look = document.querySelector("#look")
let btn = document.querySelector("#btn")

let check =0;
btn.addEventListener("click",function(){
   if(check==0){
    look.innerHTML ="Friend"
    look.style.color ="green"
    btn.innerHTML ="Remove friend"
    check =1
}
    else{
        look.innerHTML ="Stranger"
        look.style.color ="red"
        btn.innerHTML ="Add friend"
        check =0
    }
})
