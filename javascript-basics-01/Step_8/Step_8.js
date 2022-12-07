const age = prompt("Enter your age")
let age_input = document.getElementById("age")
age_input.value=age
let identity = document.getElementsByTagName("form")[0]
identity.addEventListener("submit", (e)=>{
    e.preventDefault()
    const age= e.target.age.value
    let ans=""
    if (age>18){
        ans="you are over 18"
    }else{
        ans="you are under 18"
    }
    alert(ans)
    identity.reset()
})

