const dots = document.querySelectorAll('.dot');

const pictureFrame = document.querySelector(".picture-frame");
const nextEl = document.querySelector(".next");
const previousEl = document.querySelector("#previous");

//Get Images into an array
const images = [
  { src: "../src/images/Bg_To_Do_List.webp", alt: "To_Do_List" },
  { src: "../src/images/calulator.png", alt: "calulator" },
  { src: "../src/images/restuarant.jpeg", alt: "restuarant" },
];

let currentIndex = 0;
let slideshowInterval;

//Display current image in the picture frame
function displayCurrentImage() {
  pictureFrame.textContent = "";

  //Create an image element and append it to the picture frame
  let toDoImg = document.createElement("img");
  toDoImg.classList.add("toDoImg");
  toDoImg.src = images[currentIndex].src;
  toDoImg.alt = images[currentIndex].alt;

  pictureFrame.appendChild(toDoImg);

  //Update the active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex)
  })

}
displayCurrentImage()

// Function to start the slideshow and change to the next image every five seconds
function startSlideshow() {
  slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    displayCurrentImage();
  }, 5000); // Change the interval time (in milliseconds) to adjust the slideshow speed
}

 

const displayNextImage = () => {
  //Loop through the images in circular form
  currentIndex = (currentIndex + 1) % images.length;
  displayCurrentImage();
   clearInterval(slideshowInterval);
   startSlideshow();
};

const prevImage = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  displayCurrentImage();
   clearInterval(slideshowInterval);
   startSlideshow();
};

nextEl.addEventListener("click", displayNextImage);
previousEl.addEventListener("click", prevImage);


// Show slide for each dot user click
function showSlides(index){
//update the active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
})

    //Display the current image
    currentIndex = index;
    displayCurrentImage();
//  clearInterval(slideshowInterval);
//  startSlideshow();
 }
 
 dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlides(index))
 })