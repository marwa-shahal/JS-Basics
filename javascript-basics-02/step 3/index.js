let new_div=document.createElement("div")
document.body.appendChild(new_div)
// let new_div = document.querySelector("#display")
let name_input=document.querySelector("#name")
name_input.addEventListener("change",()=>{
    new_div.innerText=name_input.value
})

