
const search = document.querySelector(".search-box input"),
      images = document.querySelectorAll(".image-box");

search.addEventListener("change", e =>{
    // if(e.key == "Enter"){
        let searchValue = search.value.toLowerCase();
        images.forEach(image =>{
            const imageName = image.dataset.name.toLowerCase();
            if(searchValue === imageName){ 
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    
});
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  button.classList.add("animate");
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);

  // Navigate to the desired HTML page
  window.location.href = "graphs.html";
});

search.addEventListener("keyup", () => {
  if (search.value != "") return;

  images.forEach((image) => {
    image.style.display = "block";
  });
});


// Add event listener to each star for rating
images.forEach(image => {
    const stars = image.querySelector(".rating").querySelectorAll(".star");
    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            // Set the rating based on the index of the clicked star
            const rating = index + 1;
            // Highlight stars up to the clicked one
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add("rated");
            }
            // Remove highlight from stars after the clicked one
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].classList.remove("rated");
            }
            // You can perform further actions here, such as sending the rating to a server
            // console.log(Rated ${rating} stars for ${image.dataset.name});
        });
    });
});
