let btn = document.querySelector("button")
//first method
// let form = document.querySelector("form")
// btn.addEventListener("click",()=>{
//     form.reset()
// })

//second method
let  input = document.querySelectorAll("input")
btn.addEventListener("click",()=>{
    input.forEach(input=>input.value ="")
})