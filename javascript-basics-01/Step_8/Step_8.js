const age = prompt("Enter your age")
let age_input = document.getElementById("age")
age_input.value=age
let validate = document.getElementById("validate")
validate.addEventListener("click", ()=>{
    const age=document.getElementById("age")
    let ans=""
    if (age>18){
        ans="you are over 18"
    }else{
        ans="you are under 18"
    }
    alert(ans)
})

