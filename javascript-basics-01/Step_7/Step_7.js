const shoe_size_prompt= prompt("Enter your shoe_size")
let shoe_size_input = document.getElementById("shoe_size")
shoe_size_input.value=shoe_size_prompt

const age_prompt= prompt("Enter your age")
let year_input = document.getElementById("year")
year_input.value=age_prompt

let identity = document.getElementsByTagName("form")[0]
identity.addEventListener("submit", (e)=>{
    e.preventDefault()
    const shoe_size= e.target.shoe_size.value;
    const year= e.target.year.value;
    let ans = equ(shoe_size,year)
    alert(ans)
    identity.reset()
})

function equ(shoe_size,year){
    return (shoe_size*2+5)*50-year+1766
}