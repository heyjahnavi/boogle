const search = document.querySelector(".search-box input");
const images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e => {
    const searchValue = search.value.toLowerCase();

    images.forEach(image => {
        const imageName = image.dataset.name.toLowerCase();
        const displayStyle = imageName.includes(searchValue) ? "block" : "none";
        image.style.display = displayStyle;
    });
});


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

search.addEventListener("keyup", () =>{
    if(search.value != "") return;

    images.forEach(image =>{
        image.style.display = "block";
    })
});