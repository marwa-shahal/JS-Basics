const name_prompt= prompt("Enter your name");
let name_input = document.getElementById("name");
name_input.value=name_prompt;

const surname_prompt= prompt("Enter your surname");
let surname_input = document.getElementById("surname");
surname.value=surname_prompt;

const city_prompt= prompt("Enter your city");
let city_input = document.getElementById("city");
city.value=city_prompt;

let validate = document.getElementById("validate")
validate.addEventListener("click", ()=>{
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const city = document.getElementById("city").value;
    alert("name:"+ name  +"\n"+ "surname: "+ surname + "\n"+"city: " + city)
})