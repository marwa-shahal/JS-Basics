const text = document.getElementById("text")
const colors = document.querySelectorAll(".color")
colors.forEach(color => {
    color.addEventListener("click",()=>{
    if (color.classList.contains("green")){
        text.style.color="green"
    } else if (color.classList.contains("red")){
        text.style.color="red"
    } else {
        text.style.color="blue"
    }
})
})