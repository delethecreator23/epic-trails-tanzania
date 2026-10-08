const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
function toggleItinerary(id) {
    const itinerary = document.getElementById(id);

    if (itinerary.classList.contains("show")) {
        itinerary.classList.remove("show");
    } else {
        itinerary.classList.add("show");
    }
}