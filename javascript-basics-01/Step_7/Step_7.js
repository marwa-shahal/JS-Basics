let identity = document.getElementsByTagName("form")[0]
identity.addEventListener("submit", (e)=>{
    e.preventDefault()
    const shoe_size= e.target.shoe_size.value;
    const year= e.target.year.value;
    let ans = (shoe_size*2+5)*50-year+1766
    alert(ans)
    identity.reset()
})