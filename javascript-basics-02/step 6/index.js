let images = document.querySelectorAll("img")
console.log(images)
images.forEach(image => {
    image.addEventListener('mouseover', function new_image(){
    image.src = this.src.replace(".jpg","_2.jpg")
})
})
images.forEach(newImage => {
    newImage.addEventListener('mouseout', function old_image(){
    newImage.src = this.src.replace("_2.jpg",".jpg")
})
})