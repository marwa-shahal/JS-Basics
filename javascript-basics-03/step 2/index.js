const show_hide = document.querySelectorAll('a')
const text = document.getElementById("texte")
show_hide.forEach(a => {
a.addEventListener("click",()=>{
    if (a.innerText == "Hide"){
        text.style.display="none"
    }else{
        text.style.display="block"
    }
})
})

