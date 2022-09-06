let currentIndex = 0;

function NextImage(){
    // Grabbing Image
    const images = ["static/images/website_example_1.png", "static/images/website_example_2.png", "static/images/website_example_3.png"];
    const img = document.getElementById("image-example");

    // Checking if index is out of range
    if (currentIndex >= images.length - 1){
        currentIndex = 0
        img.src = images[currentIndex];
    }
    else{
        img.src = images[currentIndex += 1];
    }

    console.log(currentIndex);
}