let images = document.querySelectorAll("img")
images.forEach(image => {
    image.addEventListener('mouseover', function new_image(){
    image.src = this.src.replace(".jpg","_2.jpg")
})
})