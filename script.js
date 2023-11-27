document.getElementById("showContactForm").addEventListener("click", function() {
    var slideContainer = document.querySelector(".slide-container");
    var arrow = document.querySelector(".arrow");
    slideContainer.style.right = "0"; // Slide in from right to left (0% from the right)
    arrow.style.right = "33%"; // Slide the arrow along with the container
});
