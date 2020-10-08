const gallery = document.querySelectorAll(".gallery img");

gallery.forEach( image => {
    image.addEventListener('click', () =>{
        const lightbox = document.querySelector(".lightbox");
        const currentImg = document.querySelector(".lightbox img");
        const arrowNext = lightbox.querySelector(".next");
        const arrowPrev = lightbox.querySelector(".prev");

        currentImg.src = image.src;
        lightbox.classList.add("visible");

        arrowNext.addEventListener("click", () => {
            if(image.nextElementSibling != null)
            {
                currentImg.src = image.nextElementSibling.src;
                image = image.nextElementSibling;
            }
        });

        arrowPrev.addEventListener("click", () => {
            if(image.previousElementSibling != null)
            {
            currentImg.src = image.previousElementSibling.src;
            image = image.previousElementSibling;
            }
        });
    });
} );


