document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
    
    

});
function openModal(id){

    document.getElementById(id)
    .style.display = "flex";

}

function closeModal(id){

    document.getElementById(id)
    .style.display = "none";

}

window.onclick = function(event){

    document.querySelectorAll(".modal")
    .forEach(modal => {

        if(event.target === modal){

            modal.style.display = "none";

        }

    });

}

const slides =
document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current]
    .classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current]
    .classList.add("active");

}, 5000);