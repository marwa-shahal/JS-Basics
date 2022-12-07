let identity = document.getElementsByTagName("form")[0]
identity.addEventListener("submit", (e)=>{
    e.preventDefault()
    const first_number = e.target.first_number.value;
    const second_number= e.target.second_number.value;
    let mult=first_number*second_number
    alert(mult)
})