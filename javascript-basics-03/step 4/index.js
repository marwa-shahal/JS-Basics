const pass = document.getElementById("password")
const confirmation = document.getElementById("confirmation")
const btn = document.querySelector("button")
btn.addEventListener('click',()=>{
    if (pass.value != confirmation.value){
        pass.style="border-color:red";
        confirmation.style ="border-color:red"
}
 })
