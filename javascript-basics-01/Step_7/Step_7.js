const shoe_size_prompt= prompt("Enter your shoe_size")
let shoe_size_input = document.getElementById("shoe_size")
shoe_size_input.value=shoe_size_prompt

const age_prompt= prompt("Enter your age")
let year_input = document.getElementById("year")
year_input.value=age_prompt

let validate = document.getElementById("validate")
// validate.addEventListener("click", ()=>{
//     const shoe_size= document.getElementById("shoe_size").value;
//     const year= document.getElementById("year").value;
//     let ans = equ(shoe_size,year)
//     alert(ans)
// })
validate.onclick = alert_equ
function alert_equ(){
    const shoe_size= document.getElementById("shoe_size").value;
    const year= document.getElementById("year").value;
    let ans = equ(shoe_size,year)
    alert(ans)
} 
function equ(shoe_size,year){
    return (shoe_size*2+5)*50-year+1766
}