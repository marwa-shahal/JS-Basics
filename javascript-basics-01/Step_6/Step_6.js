let identity = document.getElementsByTagName("form")[0]
identity.addEventListener("submit", (e)=>{
    e.preventDefault()
    const first_number = e.target.first_number.value;
    const second_number= e.target.second_number.value;
    let divide=first_number/second_number
    alert(divide)
    identity.reset()
})