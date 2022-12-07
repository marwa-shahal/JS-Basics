let identity = document.getElementsByTagName("form")[0]
identity.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const city = e.target.city;
    alert("name:"+ name  +"\n"+ "surname: "+ surname + "\n"+"city: " + city)
})