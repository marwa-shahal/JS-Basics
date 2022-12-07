const first_number_prompt= prompt("Enter your first number");
let first_number_input = document.getElementById("first_number");
first_number_input.value=first_number_prompt;

const second_number_prompt= prompt("Enter your second_number");
let second_number_input = document.getElementById("second_number");
second_number.value=second_number_prompt;

let identity = document.getElementsByTagName("form")[0]
identity.addEventListener("submit", (e)=>{
    e.preventDefault()
    const first_number = e.target.first_number.value;
    const second_number= e.target.second_number.value;
    let mult=first_number*second_number
    alert(mult)
})